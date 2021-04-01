<template>
    <ValidationObserver ref="form">
        <a-row :gutter="[8,8]">
            <a-col :xs="24">
                <a-form-item>
                    <ValidationProvider name="Tài khoản" rules="required" v-slot="{ errors }">
                        <a-input v-model="form.username" placeholder="Nhập tài khoản">
                            <a-icon slot="prefix" type="user" :style="{ color: '#1890ff' }"/>
                        </a-input>
                        <validate-message v-if="errors.length">{{ errors[0] }}</validate-message>
                    </ValidationProvider>
                </a-form-item>
            </a-col>
            <a-col :xs="24">
                <a-form-item>
                    <ValidationProvider name="Mật khẩu" rules="required" v-slot="{ errors }">
                        <a-input type="password" v-model="form.password" placeholder="Nhập mật khẩu">
                            <a-icon slot="prefix" type="lock" :style="{ color: '#1890ff' }"/>
                        </a-input>
                        <validate-message v-if="errors.length">{{ errors[0] }}</validate-message>
                    </ValidationProvider>
                </a-form-item>
            </a-col>
            <a-col :xs="24">
                <a-form-item>
                    <a-button type="primary" @click="submit" block>Đăng nhập</a-button>
                </a-form-item>
            </a-col>
            <a-col :xs="24">
                <a-form-item>
                    <a class="float-left">Quên mật khẩu</a>
                    <router-link :to="{ name: 'register' }" class="float-right">Đăng ký</router-link>
                </a-form-item>
            </a-col>
        </a-row>
    </ValidationObserver>
</template>

<script>
import ValidateMessage from "@/common/components/ValidateMessage/index";
import { createNamespacedHelpers } from 'vuex';
import {LOGIN} from "@/modules/auth/store/action-type";
const { mapActions }  = createNamespacedHelpers('authStore');
const form = {
    username: undefined,
    password: undefined
}
export default {
    name: "Login",
    components: {ValidateMessage},
    data: () => ({
        form: { ...form }
    }),
    updated() {
        console.log('updated');
    },
    methods: {
        ...mapActions({
            login: LOGIN,
        }),
        resetForm() {
            this.form = { ...form };
        },
        submit() {
            this.$refs.form.validate(async valid => {
                if (!valid) return;
                try {
                    await this.login(this.form);
                    this.$message.success('Đăng nhập thành công, chuyển hướng về trang chủ');
                    this.$router.push({ name: 'dashboard' });
                } catch (e) {
                    this.$message.error(e?.response?.data?.message || "Đăng nhập thất bại");
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
</style>
