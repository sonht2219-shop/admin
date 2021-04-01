import { get } from 'lodash';
import i18n from '@/common/langs';
import {appLocalStorage} from "@/common/services/storage";
import {AUTHENTICATION_KEY} from "@/common/constants";
const freeze = (obj) => Object.freeze(obj);
const translate = (path) => i18n.t(path);
const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
const buildRequestHeaders = () => ({
    'Authorization': `Bearer ${appLocalStorage.getItem(AUTHENTICATION_KEY)}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
const getProp = (obj, path, defaultVal) => get(obj, path, defaultVal);
export {
    freeze,
    translate,
    getBase64,
    buildRequestHeaders,
    getProp
}
