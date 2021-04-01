import EnumBase from "@/common/enums/base";

export class DeviceType extends EnumBase {
    static MOBILE = this._initEnum(1);
    static DESKTOP = this._initEnum(2);
}
