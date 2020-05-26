import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import EventsByLocation from '@/views/EventsByLocation.vue'
import chai from 'chai'
import spies from 'chai-spies'
import { mutations } from '@/store'


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
})

describe('Vuex mutations', () => {
    it('adds an event to the list', () => {
        let state = { events: [] }
        mutations.addEvents(state, "Inbrott")
        expect(state.events).to.have.length(1)
    })
})
