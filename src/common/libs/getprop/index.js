import Vue from 'vue';
import { getProp } from '@/common/services/helper';
const getPropPlugin = {
    install(Vue) {
        Vue.prototype.$get = function (obj, path, defaultVal) {
            return getProp(obj, path, defaultVal);
        }
    }
}

Vue.use(getPropPlugin)


