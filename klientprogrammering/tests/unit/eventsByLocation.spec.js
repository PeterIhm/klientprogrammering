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

    let actions
    let store

    beforeEach(() => {
        actions = {
            search: chai.spy(),
        }
        store = new Vuex.Store({
            actions
        })
    })

    it('Calls store action search when button is clicked', () => {
        const wrapper = shallowMount(EventsByLocation, { store, localVue })
        wrapper.find('button').trigger('click')
        expect(actions.search).to.have.been.called()
    })

    it('Calls store action search when enter is pressed', () => {
        const wrapper = shallowMount(EventsByLocation, { store, localVue })
        wrapper.find('input').trigger('keyup.enter')
        expect(actions.search).to.have.been.called()
    })
})


