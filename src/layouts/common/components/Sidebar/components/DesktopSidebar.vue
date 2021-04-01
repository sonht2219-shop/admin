<template>
    <a-layout-sider v-model="collapsedSidebar" :trigger="null" collapsible :collapsedWidth="48">
        <content-sidebar />
    </a-layout-sider>
</template>

<script>
import ContentSidebar from "@/layouts/common/components/Sidebar/components/ContentSidebar";
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('layoutStore');
export default {
    name: "DesktopSidebar",
    components: {ContentSidebar},
    computed: {
        ...mapState([
            'collapsedSidebar'
        ])
    }
}
</script>

<style scoped>

</style>
