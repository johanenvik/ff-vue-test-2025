const actions = {
    removeUser({ commit }, user) {
        commit('REMOVE_USER', user.id);
    }
};

export default actions;