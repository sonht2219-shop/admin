<template>
    <component :is="componentRender"/>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import ConstantMixin from "@/common/services/mixins/constant";
import DesktopSidebar from "@/layouts/common/components/Sidebar/components/DesktopSidebar";
import MobileSidebar from "@/layouts/common/components/Sidebar/components/MobileSidebar";
const { mapState } = createNamespacedHelpers('layoutStore');
export default {
name: "Sidebar",
    components: {MobileSidebar, DesktopSidebar},
    mixins: [ConstantMixin],
    computed: {
        ...mapState([
            'device'
        ]),
        componentRender() {
            return this.device === this.DeviceType.DESKTOP.value ? 'DesktopSidebar' : 'MobileSidebar';
        }
    },
}
</script>

<style scoped>

</style>
