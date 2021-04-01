import {AUTH_SUCCESS, AUTH_FAIL, AUTH_START, AUTH_END} from "@/modules/auth/store/mutation-type";
import {LOGIN, REGISTER} from "@/modules/auth/store/action-type";
import {login, register} from "@/modules/auth/services";
import {appLocalStorage} from "@/common/services/storage";
import {AUTHENTICATION_KEY} from "@/common/constants";

const authStore = {
    namespaced: true,
    state: () => ({
        user: undefined,
        token: undefined,
        loading: false
    }),
    mutations: {
        [AUTH_START] (state) {
            state.loading = true;
        },
        [AUTH_END] (state) {
            state.loading = false;
        },
        [AUTH_SUCCESS] (state, payload) {
            state.user = payload.user;
            state.token = payload.token;
            appLocalStorage.setItem(AUTHENTICATION_KEY, payload.token);
        },
        [AUTH_FAIL] (state) {
            state.user = undefined;
            state.token = undefined;
            appLocalStorage.removeItem(AUTHENTICATION_KEY);
        }
    },
    actions: {
        async [LOGIN] ({ commit }, payload) {
            try {
                commit(AUTH_START);
                const { data } = await login(payload);
                commit(AUTH_SUCCESS, data.data);
            } catch (e) {
                commit(AUTH_FAIL)
                return Promise.reject(e);
            } finally {
                commit(AUTH_END);
            }
        },
        async [REGISTER] ({ commit }, payload) {
            try {
                commit(AUTH_START);
                const { data } = await register(payload);
                commit(AUTH_SUCCESS, data.data);
            } catch (e) {
                commit(AUTH_FAIL);
                return Promise.reject(e);
            } finally {
                commit(AUTH_END);
            }
        }
    }
}

export default authStore
