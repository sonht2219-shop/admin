// eslint-disable-next-line no-unused-vars
import {freeze, translate} from "@/common/services/helper";
export default class EnumBase {
    constructor(val, des = null) {
        console.log('init');
        this.value = val;
        this.description = des;
        return freeze(this);
    }
    static getValues() {
        return Object.values(this).map(item => item.value);
    }
    static getKeys() {
        return Object.keys(this);
    }
    static getInstances() {
        return Object.values(this);
    }
    static getKeyOf(value) {
        // eslint-disable-next-line no-unused-vars
        const entryValid = Object.entries(this).find(([key, val]) => val.value === value);
        if (!entryValid) { return undefined; }
        return entryValid[0];
    }
    static getDescription(value) {
        const instance = Object.values(this).find(item => item.value === value);
        if (!instance)
            throw new Error("Value not valid");
        return instance.description ? instance.description : translate(`${this.name}.${this.getKeyOf(instance.value)}`);
    }
    static toOptions() {
        return Object.entries(this).map(([key, val]) => ({
            label: val.description ? val.description : translate(`${this.name}.${key}`),
            value: val.value
        }));
    }

    static _initEnum(val, des) {
        return new this(val, des);
    }
}
