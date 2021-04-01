<template>
    <ValidationObserver ref="form">
        <a-row :gutter="[8,8]">
            <a-col :xs="24">
                <a-form-item>
                    <ValidationProvider name="Email" rules="required|email|min:6" v-slot="{ errors }">
                        <a-input placeholder="Nhập địa chỉ email" v-model="form.email">
                            <a-icon type="user" slot="prefix" :style="{ color: '#1890ff' }" />
                        </a-input>
                        <validate-message v-if="errors.length">{{ errors[0] }}</validate-message>
                    </ValidationProvider>
                </a-form-item>
            </a-col>
            <a-col :xs="24">
                <a-form-item>
                    <ValidationProvider name="Mật khẩu" rules="required|min:6" v-slot="{ errors }">
                        <a-input type="password" placeholder="Nhập mật khẩu" v-model="form.password">
                            <a-icon type="lock" slot="prefix" :style="{ color: '#1890ff' }" />
                        </a-input>
                        <validate-message v-if="errors.length">{{ errors[0] }}</validate-message>
                    </ValidationProvider>
                </a-form-item>
            </a-col>
            <a-col :xs="24">
                <a-form-item>
                    <ValidationProvider name="Họ tên" rules="required|min:4" v-slot="{ errors }">
                        <a-input placeholder="Nhập họ tên" v-model="form.name">
                            <a-icon type="user" slot="prefix" :style="{ color: '#1890ff' }" />
                        </a-input>
                        <validate-message v-if="errors.length">{{ errors[0] }}</validate-message>
                    </ValidationProvider>
                </a-form-item>
            </a-col>
            <a-col :xs="24">
                <a-form-item>
                    <ValidationProvider name="Ngày sinh" v-slot="{ errors }">
                        <millisecond-date-picker placeholder="Chọn ngày sinh" v-model="form.birthday"/>
                        <validate-message v-if="errors.length">{{ errors[0] }}</validate-message>
                    </ValidationProvider>
                </a-form-item>
            </a-col>
            <a-col :xs="24">
                <a-form-item>
                    <a-button type="primary" @click="submit" :loading="loading" block>Đăng ký</a-button>
                </a-form-item>
            </a-col>
            <a-col :xs="24">
                <a-form-item>
                    <router-link :to="{ name: 'login' }" class="float-right">Đăng nhập</router-link>
                </a-form-item>
            </a-col>
        </a-row>
    </ValidationObserver>
</template>

<script>
import ValidateMessage from "@/common/components/ValidateMessage/index";
import MillisecondDatePicker from "@/common/components/MillisecondDatePicker/index";
import { createNamespacedHelpers } from 'vuex';
import {REGISTER} from "@/modules/auth/store/action-type";
const { mapActions, mapState } = createNamespacedHelpers('authStore');
const form = {
    email: undefined,
    password: undefined,
    name: undefined,
    birthday: undefined
}
export default {
    name: "Register",
    components: {MillisecondDatePicker, ValidateMessage},
    data: () => ({
        form: { ...form }
    }),
    computed: {
        ...mapState([
            'loading'
        ])
    },
    methods: {
        ...mapActions({
            register: REGISTER
        }),
        resetForm() {
            this.form = { ...form };
        },
        submit() {
            this.$refs.form.validate().then(async (valid) => {
                console.log(valid);
                if (!valid) return ;
                try {
                    await this.register(this.form);
                    this.$message.success('Đăng ký thành công');
                } catch (e) {
                    this.$message.error(e?.response?.data?.message || 'Đăng ký thất bại');
                }
            })
        }
    }
}
</script>

<style scoped>

</style>
