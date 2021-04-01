<template>
    <div>
        <div>
            <a-button @click="changeTest">Change Test</a-button>
        </div>
        <product-form v-if="test"/>
        <login v-else />
    </div>
</template>

<script>
// import {CommonStatus} from "@/common/enums/statues";
// eslint-disable-next-line no-unused-vars
import CommonStatus from "@/common/enums/statues/common";
import ProductForm from "@/modules/products/Form/index";
import Login from "@/modules/auth/Login/index";
// eslint-disable-next-line no-unused-vars
// import ProductStatus from "@/modules/products/enums/status";

export default {
    name: "Test",
    components: {Login, ProductForm},
    data() {
        return {
            DAYOF: {
                monday: 'monday'
            },
            test: true
        }
    },
    created() {
        console.log(CommonStatus.getValues(), CommonStatus.getKeys(), CommonStatus.getDescription(1));
        // console.log(ProductStatus.toOptions());
        // console.log(ProductStatus.getDescription(1));
    },
    methods: {
        changeTest() {
            this.test = !this.test;
        }
    }
}
</script>

<style scoped>

</style>
