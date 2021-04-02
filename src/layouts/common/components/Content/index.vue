<template>
    <div class="h-100">
        <a-page-header
            style="background-color: rgb(255, 255, 255)"
            :title="title"
            @back="() => null"
        >
        </a-page-header>
        <div class="content-page-wrap">
            <a-card :body-style="bodyStyle">
                <slot></slot>
            </a-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentPage",
    data: () => ({
        title: "",
        bodyStyle: {
            height: '100%'
        }
    }),
    watch: {
        "$route": {
            immediate: true,
            handler: function (val) {
                this.title = val?.meta?.title;
            }
        }
    }
}
</script>

<style scoped>
    .content-page-wrap {
        margin: 24px 24px 0;
    }
</style>
