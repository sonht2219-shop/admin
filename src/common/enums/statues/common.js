import EnumBase from "@/common/enums/base";

export default class CommonStatus extends EnumBase{
    static ACTIVE = this._initEnum(1, "ACTIVE");
    static INACTIVE = this._initEnum(2, "INACTIVE");
}
