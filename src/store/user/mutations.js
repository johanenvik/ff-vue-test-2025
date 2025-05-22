const mutations = {
    REMOVE_USER: (state, userId) => {
        state.users = state.users.filter(user => user.id !== userId);
    },
    ADD_USER: (state, user) => {
        state.users.push(user);
    }
};

export default mutations;