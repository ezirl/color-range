import {createStore} from 'vuex'

export function setupStore() {
    const store = createStore({
        state() {
            return {}
        },
        mutations: {},
        actions: {},
        getters: {},
        modules: {},
    })
    return store
}