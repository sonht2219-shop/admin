<template>
    <div>
        <a-upload
            :action="action"
            list-type="picture-card"
            :file-list="fileList"
            :headers="headers"
            :data="params"
            @preview="handlePreview"
            @change="handleChange"
        >
            <div v-if="fileList.length < limit">
                <a-icon type="plus" />
                <div class="ant-upload-text">
                    Upload
                </div>
            </div>
        </a-upload>
        <a-modal :visible="previewVisible"
                 :footer="null"
                 @cancel="previewVisible = false"
                 :width="650">
            <img :src="previewImage" alt=""/>
        </a-modal>
    </div>
</template>

<script>
import {getBase64} from "@/common/services/helper";

export default {
    name: "UploadImage",
    model: {
        prop: 'images',
        event: 'change'
    },
    props: {
        folder: String,
        limit: Number,
    },
    data: () => ({
        fileList: [],
        headers: {

        },
        action: `${process.env.VUE_APP_BASE_API}v1/upload/by-file`,
        previewVisible: false,
        previewImage: ''
    }),
    methods: {
        async handlePreview(file) {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj);
            }
            this.previewImage = file.url || file.preview;
            this.previewVisible = true;
        },
        handleChange(changed) {
            console.log(changed);
            const {fileList, file} = changed;
            this.fileList = fileList;
            if (['done', 'removed'].includes(file.status)) {
                this.emitChange(changed);
            }
        },
        emitChange({fileList}) {
            const result = fileList.map((file) => file.url ? file.name : file.response?.data?.path)
                ?.join(',');
            this.$emit('change', result);
        },
        pathToUrl(path) {
            return `${process.env.VUE_APP_BASE_URL}upload/${path}`;
        }
    },
    watch: {
        onImagesChange: {
            immediate: true,
            handler: function (val) {
                const value = val ? val.split(',').map((item, index) => ({
                    uid: (-index).toString(),
                    name: item,
                    status: 'done',
                    url: this.pathToUrl?.(item) ?? item
                })) : [];
                this.fileList = value;
            }
        }
    },
    computed: {
        params() {
            return {
                folder: this.folder
            }
        }
    }
}
</script>

<style scoped>

</style>
