<template>
    <a-row type="flex" justify="center">
        <a-col :md="12">
            <ValidationObserver ref="form">
                <a-row :gutter="[8,8]">
                    <a-col :xs="24" :md="12">
                        <a-form-item label="Tên sản phẩm">
                            <ValidationProvider name="Tên" rules="required|min:6" v-slot="{ errors }">
                                <a-input v-model="form.name" />
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </a-form-item>
                    </a-col>
                    <a-col :xs="24" :md="12">
                        <a-form-item label="Giá sản phẩm">
                            <ValidationProvider name="Giá" rules="required|numeric" v-slot="{ errors }">
                                <a-input-number v-model="form.price" style="width: 100%;"/>
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </a-form-item>
                    </a-col>
                    <a-col :xs="24">
                        <a-form-item label="Mô tả sản phẩm">
                            <ValidationProvider name="Mô tả" rules="required" v-slot="{ errors }">
                                <a-textarea v-model="form.description" style="width: 100%;"/>
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </a-form-item>
                    </a-col>
                    <a-col :xs="24">
                        <a-form-item label="Ảnh">
                            <ValidationProvider name="Ảnh" rules="required" v-slot="{ errors }">
                                <upload-image v-model="form.images" folder="products" :limit="2"/>
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[8,8]">
                    <template v-for="(option, i) in form.options">
                        <a-col :xs="24" :key="i">
                            <a-row :gutter="[8,8]">
                                <a-col :md="8">
                                    <a-form-item label="Màu">
                                        <ValidationProvider :vid="`color-${i}`" :name="`Màu sắc`" rules="required|numeric" v-slot="{ errors }">
                                            <a-input-number v-model="option.color_id" style="width: 100%;"/>
                                            <span>{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </a-form-item>
                                </a-col>
                                <a-col :md="8">
                                    <a-form-item label="Kích cỡ">
                                        <ValidationProvider :vid="`size-${i}`" :name="`Kích cỡ`" rules="required|numeric" v-slot="{ errors }">
                                            <a-input-number v-model="option.size_id" style="width: 100%;"/>
                                            <span>{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </a-form-item>
                                </a-col>
                                <a-col :md="i > 0 ? 7 : 8">
                                    <a-form-item label="Số lượng">
                                        <ValidationProvider :vid="`quantity-${i}`" name="Số lượng" rules="required|numeric|min_value:1" v-slot="{ errors }">
                                            <a-input-number v-model="option.quantity" style="width: 100%;"/>
                                            <span>{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </a-form-item>
                                </a-col>
                                <a-col :md="1" v-if="i > 0">
                                    <a-form-item>
                                        <a-icon
                                            class="dynamic-delete-button"
                                            type="minus-circle-o"
                                            @click="removeOption(i)"
                                        />
                                    </a-form-item>
                                </a-col>
                            </a-row>
                        </a-col>
                    </template>
                </a-row>
                <a-button @click="addOption">Thêm tùy chọn</a-button>
                <a-row style="margin-top: 30px">
                    <a-button type="primary" @click="submit">Lưu</a-button>
                </a-row>
            </ValidationObserver>
        </a-col>
    </a-row>
</template>

<script>
import UploadImage from "@/common/components/UploadImage/index";
const option = {
    size_id: undefined,
    color_id: undefined,
    quantity: undefined
}
const form = {
    name: undefined,
    price: undefined,
    description: undefined,
    category_id: undefined,
    images: undefined,
    options: [
        { ...option }
    ]
}
export default {
    name: "ProductForm",
    components: {UploadImage},
    data: () => ({
       form: { ...form }
    }),
    created() {
    },
    methods: {
        addOption() {
            this.form.options.push({ ...option });
        },
        removeOption(index) {
            this.form.options.splice(index, 1);
        },
        submit() {
            this.$refs.form.validate().then(valid => {
                if (!valid) { return; }
                this.$message.success('Hợp lệ');
            })
        }
    }
}
</script>

<style scoped>
.dynamic-delete-button {
    cursor: pointer;
    position: relative;
    top: 42px;
    font-size: 20px;
    color: #999;
    transition: all 0.3s;
}
.dynamic-delete-button:hover {
    color: #777;
}
.dynamic-delete-button[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
}
</style>
