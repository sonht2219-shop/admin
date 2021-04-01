import {
    FORMAT_DATE,
    FORMAT_DATE_TIME
} from '@/common/constants'
import {DeviceType} from "@/common/enums/types";

const ConstantMixin = {
    data: () => ({
        FORMAT_DATE,
        FORMAT_DATE_TIME,
        DeviceType: DeviceType
    })
}
export default ConstantMixin
