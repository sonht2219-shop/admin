import { createNamespacedHelpers } from 'vuex'
import {RESIZE_WINDOW} from "@/store/layout/types/action-types"
const { mapActions } = createNamespacedHelpers('layoutStore');

const ResizeWindowMixin = {
    beforeMount() {
        window.addEventListener('resize', this.resizeHandler);
    },
    mounted() {
        this.resizeHandler();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeHandler);
    },
    methods: {
        ...mapActions({
            resizeWindow: RESIZE_WINDOW
        }),
        resizeHandler() {
            if (!document.hidden) {
                const rect = document.body.getBoundingClientRect();
                this.resizeWindow(rect.width);
            }
        }
    },

}

export default ResizeWindowMixin;
