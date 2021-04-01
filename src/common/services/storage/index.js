export class AppStorage {
    constructor(storage) {
        this.storage = storage || window.localStorage;

        /** Is storage is supported or not */
        if (!this.isSupported()) {
            throw new Error('Storage is not supported by browser!')
        }
    }

    setItem(key, value) {
        if (typeof value === 'object') {
            this.storage.setItem(key, JSON.stringify(value));
        } else {
            this.storage.setItem(key, value);
        }
    }

    getItem(key) {
        let result;
        try {
            result = JSON.parse(this.storage.getItem(key))
        } catch (e) {
            result = this.storage.getItem(key);
        }
        return result;
    }

    removeItem(key) {
        this.storage.removeItem(key)
    }

    clear() {
        this.storage.clear()
    }

    isSupported() {
        let supported = true;
        if (!this.storage)
            supported = false;
        if (!(this.storage instanceof Storage))
            supported = false;
        return supported
    }
}

const appLocalStorage = new AppStorage();
export { appLocalStorage }
