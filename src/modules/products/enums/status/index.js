import EnumBase from "@/common/enums/base";

export default class ProductStatus extends EnumBase {
    static SOLD = this._initEnum(1);
    static STOCK = this._initEnum(2);
}
