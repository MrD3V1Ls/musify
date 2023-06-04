import API from '../../js/api';

export default {
    namespaced: true,
    state: {
        user: null,
        isLoading: true,
        experiments: null
    },
    mutations: {
        SET_IS_LOADING(state, isLoading) {
            state.isLoading = isLoading;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_USER_LOGIN(state, status) {
            state.user.isAuthenticated = status;
        },
        SET_EXPERIMENTS(state, experiments) {
            state.experiments = experiments;
        }
    },
    actions: {
        async getExperiments(context) {
            var experiments = await API.getExperiments();
            var keys = [];
            if (experiments.length > 0) {
                experiments.forEach((experiment) => {
                    keys.push({
                        name: Object.keys(experiment).join(),
                        experiment: experiment,
                        test: experiment[Object.keys(experiment).join()].env.test,
                        prod: experiment[Object.keys(experiment).join()].env.prod
                    });
                });
            }
            context.commit('SET_EXPERIMENTS', keys);
        },
        async getUser(context) {
            context.commit('SET_IS_LOADING', true);
            var user;
            user = await API.getUser();
            if (user && user.isAuthenticated) {
                context.commit('SET_USER', user);
            } else {
                context.commit('SET_USER', null);
            }
            context.commit('SET_IS_LOADING', false);
        },
        async setUser(context, data) {
            let { status } = data;
            try {
                if (!context.state.user) {
                    var user = await API.getUser();
                } else {
                    user = context.state.user;
                }
                if (user.isAuthenticated) {
                    context.commit('SET_USER', user);
                }
                else if (status == false && user.isAuthenticated) {
                    user.isAuthenticated = false;
                    context.commit('SET_USER', user);
                }
            }
            catch {
                user = null;
            }
        },
    },
    getters: {
        isAuthenticated(state) {
            if (state.user && state.user.isAuthenticated) {
                return true;
            }
            return false;
        },
        isLoading(state) {
            return state.isLoading;
        },
        user(state) {
            return state.user;
        },
        experiments(state) {
            if (state.experiments) {
                return state.experiments;
            } else {
                return [];
            }
        }
    }
}