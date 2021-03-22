import i18n from '@/common/langs';
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
export {
    freeze,
    translate,
    getBase64
}
