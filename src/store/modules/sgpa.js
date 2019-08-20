const state = {
    sub: {
        main: { index: [], key: [] },
        elective: { index: [], key: [] },
        lab: { index: [], key: [] }
    },
    page: 'sem'
}
const getters = {
    subject: (state) => state.sub,
    getPage: (state) => state.page
}

const actions = {
    setSub: ({ commit }, subj = {}) => {
        commit('setSub', subj)
    },
    setPage: ({ commit }, page = 'sem') => {
        commit('setPage', page)
    }

}

const mutations = {

    setSub: (state, subj) => {


        state.sub = subj;


    },
    setPage: (state, page) => {
        state.page = page
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}