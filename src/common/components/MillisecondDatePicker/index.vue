<template>
    <a-date-picker
        :format="FORMAT_DATE"
        :placeholder="placeholder"
        :value="valMoment"
        @change="onChange"
        class="w-100"
    />
</template>

<script>
import ConstantMixin from "@/common/services/mixins/constant";
import moment from 'moment';

export default {
    name: "MillisecondDatePicker",
    mixins: [ConstantMixin],
    props: {
        placeholder: String,
        value: Number
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    computed: {
        valMoment() {
            return this.value ? moment(this.value) : undefined;
        }
    },
    methods: {
        onChange(val) {
            const valMillisecond = val ? val.valueOf() : undefined;
            this.$emit('change', valMillisecond);
        }
    }
}
</script>

<style scoped>

</style>
