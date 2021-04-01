<template>
    <div>
        <a-drawer :placement="placement"
                  :closable="false"
                  :visible="!collapsedSidebar"
                  @close="onCloseSidebar"
                  :body-style="bodyStyle"
                  :drawer-style="drawerStyle"
                  width="208"
        >
            <content-sidebar />
        </a-drawer>
    </div>
</template>

<script>
import ContentSidebar from "@/layouts/common/components/Sidebar/components/ContentSidebar";
import { createNamespacedHelpers } from 'vuex';
import {TOGGLE_SIDEBAR} from "@/store/layout/types/action-types";
const { mapActions, mapState } = createNamespacedHelpers('layoutStore');
export default {
name: "MobileSidebar",
    components: {ContentSidebar},
    data: () => ({
        placement: 'left',
        bodyStyle: {
            padding: 0
        },
        drawerStyle: {
            background: "#001529"
        }
    }),
    computed: {
        ...mapState([
            'collapsedSidebar'
        ])
    },
    methods: {
        ...mapActions({
            toggleSidebar: TOGGLE_SIDEBAR
        }),
        onCloseSidebar() {
            this.toggleSidebar(true);
        }
    }
}
</script>

<style scoped>

</style>
