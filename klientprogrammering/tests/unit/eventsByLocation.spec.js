import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import EventsByLocation from '@/views/EventsByLocation.vue'
import chai from 'chai'
import spies from 'chai-spies'


chai.use(spies)
let expect = chai.expect

const localVue = createLocalVue()
localVue.use(Vuex)

describe('EventsByLocation.vue', () => {

    let eventsByLocation
    let store

    beforeEach(() => {
        eventsByLocation = {
            search: chai.spy
        }
        store = new Vuex.store({
            eventsByLocation
        })
    })

    it('Calls store action search when button is clicked', () => {
        const wrapper = shallowMount(EventsByLocation, { store, localVue })
        wrapper.find('button').trigger('click')
        expect(eventsByLocation.search).to.have.been.called()
    })
})
