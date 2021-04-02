<template>
    <div>
        <div class="sidebar-logo">
            <a href="/">
                <logo />
                <h1 v-show="!collapsedSidebar">Admin Pro</h1>
            </a>
        </div>
        <div class="sidebar-menu">
            <a-menu
                :default-selected-keys="['1']"
                :default-open-keys="['sub1']"
                mode="inline"
                theme="dark"
            >
                <template v-for="item in routes">
                    <template v-if="!$get(item, 'meta.hidden')">
                        <a-menu-item :key="item.name" v-if="!item.children">
                            <router-link :to="{ name: item.name }">
                                <a-icon :type="item.icon" />
                                <span>{{ item.meta.title }}</span>
                            </router-link>
                        </a-menu-item>
                        <a-menu-item :key="item.name" v-else-if="isOnlyShowParent(item)">
                            <router-link :to="{ name: $get(item, 'children[0].name') }">
                                <a-icon :type="item.meta.icon" />
                                <span>{{ item.meta.title }}</span>
                            </router-link>
                        </a-menu-item>
                        <sub-menu v-else :key="item.name" :menu-info="item"/>
                    </template>
                </template>
            </a-menu>
        </div>
    </div>
</template>

<script>
import SubMenu from "@/layouts/common/components/Sidebar/components/SubMenu";
import { createNamespacedHelpers } from 'vuex';
import Logo from "@/layouts/common/components/Sidebar/components/Logo";
import {routes} from "@/router";
const { mapState } = createNamespacedHelpers('layoutStore');
export default {
    name: "ContentSidebar",
    components: {Logo, SubMenu},
    data: () => ({
        routes: routes
    }),
    computed: {
        ...mapState([
            'collapsedSidebar'
        ]),
    },
    methods: {
        isOnlyShowParent(item) {
            return (item.children && item.meta.onlyShowParent);
        }
    }
}
</script>

<style lang="less" scoped>
    .ant-layout-sider-collapsed .sidebar-logo {
        padding: 16px 8px;
    }
    .sidebar-logo {
        position: relative;
        display: flex;
        align-items: center;
        padding: 16px 16px;
        line-height: 32px;
        cursor: pointer;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 32px;

            /deep/ img, h1 {
                display: inline-block;
                height: 32px;
                vertical-align: middle;
            }

            h1 {
                margin: 0 0 0 12px;
                overflow: hidden;
                color: #fff;
                font-weight: 600;
                font-size: 18px;
                line-height: 32px;
                -webkit-animation: fade-in;
                animation: fade-in;
                -webkit-animation-duration: .2s;
                animation-duration: .2s;
            }
        }
    }
</style>
