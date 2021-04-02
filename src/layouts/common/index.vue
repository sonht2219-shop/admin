<template>
    <a-layout class="layout-common">
        <Sidebar />
        <a-layout>
            <Header />
            <a-layout-content>
                <content-page>
                    <router-view />
                </content-page>
            </a-layout-content>
            <Footer />
        </a-layout>
    </a-layout>
</template>

<script>
import Sidebar from "@/layouts/common/components/Sidebar/index";
import Header from "@/layouts/common/components/Header/index";
import Footer from "@/layouts/common/components/Footer/index";
import ContentPage from "@/layouts/common/components/Content/index";
export default {
name: "CommonLayout",
    components: {ContentPage, Footer, Sidebar, Header}
}
</script>

<style lang="less" scoped>
 .layout-common {
     display: flex;
     width: 100%;
     min-height: 100vh;
 }
</style>
