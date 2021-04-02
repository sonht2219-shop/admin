<template>
    <a-row type="flex" justify="center">
        <a-col :md="12">
            <ValidationObserver ref="form">
                <a-row :gutter="[8,8]">
                    <a-col :xs="24" :md="12">
                        <a-form-item label="Họ tên">
                            <ValidationProvider name="Họ tên" rules="required|min:4" v-slot="{ errors }">
                                <a-input v-model="form.name" />
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </a-form-item>
                    </a-col>
                    <a-col :xs="24" :md="12">
                        <a-form-item label="Email">
                            <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                                <a-input v-model="form.email"/>
                                <validate-message v-if="errors.length">{{ errors[0] }}</validate-message>
                            </ValidationProvider>
                        </a-form-item>
                    </a-col>
                    <a-col :xs="24">
                        <a-form-item label="Mật khẩu">
                            <ValidationProvider name="Mật khẩu" rules="required" v-slot="{ errors }">
                                <a-input-password v-model="form.password" />
                                <validate-message v-if="errors.length">{{ errors[0] }}</validate-message>
                            </ValidationProvider>
                        </a-form-item>
                    </a-col>
                    <a-col :xs="24">
                        <a-form-item label="Ngày sinh">
                            <ValidationProvider name="Ngày sinh" rules="required" v-slot="{ errors }">
                                <millisecond-date-picker v-model="form.birthday"/>
                                <validate-message v-if="errors.length">{{ errors[0] }}</validate-message>
                            </ValidationProvider>
                        </a-form-item>
                    </a-col>
                    <a-col :xs="24">
                        <a-form-item label="Ảnh đại diện">
                            <ValidationProvider name="Ảnh đại diện" rules="required" v-slot="{ errors }">
                                <upload-image v-model="form.avatar" folder="users" :limit="1"/>
                                <validate-message v-if="errors.length">{{ errors[0] }}</validate-message>
                            </ValidationProvider>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row style="margin-top: 30px">
                    <a-button type="primary" @click="submit" block>Lưu</a-button>
                </a-row>
            </ValidationObserver>
        </a-col>
    </a-row>
</template>

<script>
import ValidateMessage from "@/common/components/ValidateMessage/index";
import UploadImage from "@/common/components/UploadImage/index";
import MillisecondDatePicker from "@/common/components/MillisecondDatePicker/index";
const form = {
    name: undefined,
    email: undefined,
    password: undefined,
    birthday: undefined,
    avatar: undefined
}
export default {
    name: "UserForm",
    components: {MillisecondDatePicker, UploadImage, ValidateMessage},
    data: () => ({
        form: { ...form }
    }),
    methods: {
        submit() {
            this.$refs.form.validate().then((valid) => {
                if (!valid) return ;
                alert("Submit");
            })
        }
    }
}
</script>

<style scoped>

</style>
