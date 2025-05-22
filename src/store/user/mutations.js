const mutations = {
    REMOVE_USER: (state, userId) => {
        state.users = userId;
    },
};

export default mutations;