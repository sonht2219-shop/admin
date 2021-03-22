<template>
    <product-form />
</template>

<script>
// import {CommonStatus} from "@/common/enums/statues";
// eslint-disable-next-line no-unused-vars
import CommonStatus from "@/common/enums/statues/common";
import ProductForm from "@/modules/products/Form/index";
// eslint-disable-next-line no-unused-vars
// import ProductStatus from "@/modules/products/enums/status";

export default {
    name: "Test",
    components: {ProductForm},
    data() {
        return {
            DAYOF: {
                monday: 'monday'
            }
        }
    },
    created() {
        console.log(CommonStatus.getValues(), CommonStatus.getKeys(), CommonStatus.getDescription(1));
        // console.log(ProductStatus.toOptions());
        // console.log(ProductStatus.getDescription(1));
    }
}
</script>

<style scoped>

</style>
