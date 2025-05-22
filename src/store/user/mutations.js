const mutations = {
    REMOVE_USER: (state, userId) => {
        state.users = state.users.filter(user => user.id !== userId);
    },
};

export default mutations;