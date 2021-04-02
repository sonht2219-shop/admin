<template>
    <a-layout-header id="layout-common-header">
        <div class="header-content">
            <div class="logo" v-if="showLogo">
                <a><logo /></a>
            </div>
            <div class="collapse-button">
                <a-icon
                    class="trigger"
                    :type="collapsedSidebar ? 'menu-unfold' : 'menu-fold'"
                    @click="toggleSidebar"
                />
            </div>
            <div style="flex: 1 1 0%;"></div>
            <div class="float-right">
                <a-dropdown :trigger="['hover']" class="dropdown-list">
                    <span @click="e => e.preventDefault()">
                        <a-avatar class="avatar" size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <span class="name">Hoang Son</span>
                    </span>
                    <a-menu slot="overlay">
                        <a-menu-item key="0">
                            <a href="#">Đăng xuất</a>
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
            </div>
        </div>
    </a-layout-header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import {TOGGLE_SIDEBAR} from "@/store/layout/types/action-types";
import Logo from "@/layouts/common/components/Sidebar/components/Logo";
import {DeviceType} from "@/common/enums/types";
const { mapActions, mapState } = createNamespacedHelpers('layoutStore');
export default {
    name: "Header",
    components: {Logo},
    computed: {
        ...mapState([
            'collapsedSidebar',
            'device'
        ]),
        showLogo() {
            return this.device === DeviceType.MOBILE.value
        }
    },
    methods: {
        ...mapActions({
            toggleSidebar: TOGGLE_SIDEBAR
        })
    }
}
</script>

<style lang="less" scoped>
#layout-common-header {
    padding: 0px;
    height: 48px;
    line-height: 48px;
    width: 100%;
    z-index: 9;

    .header-content {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 16px;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

        &>* {
            height: 100%;
        }

        .logo {
            position: relative;
            overflow: hidden;

            a {
                display: flex;
                align-items: center;
                height: 100%;
                /deep/ img {
                    height: 28px;
                }
            }
        }

        .collapse-button {
            display: flex;
            align-items: center;
            margin-left: 16px;
            font-size: 20px;
            .anticon {
                cursor: pointer;
            }
        }

        .dropdown-list {
            display: inline-block;
            height: 48px;
            line-height: 48px;
            vertical-align: top;
            cursor: pointer;
            color: inherit;
            padding: 0 12px;

            &:hover {
                background-color: rgba(0,0,0,0.025);
            }

            .avatar {
                margin: 12px 8px 12px 0;
            }

            .name {
                display: inline-block;
                color: inherit;
                font-style: normal;
                line-height: 0;
                text-align: center;
                text-transform: none;
                vertical-align: -.125em;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
            }
        }
    }
}
</style>
