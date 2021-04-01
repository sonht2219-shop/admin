import { SET_COLLAPSED_SIDEBAR, SET_DEVICE } from "@/store/layout/types/mutation-types";
import {RESIZE_WINDOW, TOGGLE_SIDEBAR} from "@/store/layout/types/action-types";
import {WIDTH_MOBILE} from "@/common/constants";
import {DeviceType} from "@/common/enums/types";

const layoutStore = {
    namespaced: true,
    state: () => ({
        device: undefined,
        collapsedSidebar: false
    }),
    mutations: {
        [SET_DEVICE] (state, payload) {
            state.device = payload;
        },
        [SET_COLLAPSED_SIDEBAR] (state, payload) {
            state.collapsedSidebar = payload;
        }
    },
    actions: {
        [RESIZE_WINDOW] ({ commit }, widthWindow) {
            if (widthWindow - 1 < WIDTH_MOBILE)
                commit(SET_DEVICE, DeviceType.MOBILE.value);
            else
                commit(SET_DEVICE, DeviceType.DESKTOP.value);
        },
        [TOGGLE_SIDEBAR] ({ commit, state }, payload = undefined) {
            if (payload instanceof Boolean)
                commit(SET_COLLAPSED_SIDEBAR, payload);
            else
                commit(SET_COLLAPSED_SIDEBAR, !state.collapsedSidebar);
        }
    }
}

export default layoutStore;
