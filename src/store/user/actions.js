const actions = {
    removeUser({ commit }, user) {
        commit('REMOVE_USER', user.id);
    },
    addNewUser({ commit, state }, user) {
        const newUser = {
            ...user,
            id: state.users.length ? Math.max(...state.users.map(u => u.id)) + 1 : 1 // Generate a new ID
        }
        commit('ADD_USER', newUser);
    }
};

export default actions;