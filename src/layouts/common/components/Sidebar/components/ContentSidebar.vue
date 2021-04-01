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
                    <a-menu-item :key="item.name" v-if="!item.children">
                        <router-link :to="{ name: item.name }">
                            <a-icon :type="item.icon" />
                            <span>{{ item.meta.title }}</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item :key="item.name" v-else-if="isOnlyShowParent(item)">
                        <router-link :to="{ name: $get(item, 'children[0].name') }">
                            <a-icon :type="item.icon" />
                            <span>{{ item.meta.title }}</span>
                        </router-link>
                    </a-menu-item>
                    <sub-menu v-else :key="item.name" :menu-info="item"/>
                </template>
            </a-menu>
        </div>
    </div>
</template>

<script>
import SubMenu from "@/layouts/common/components/Sidebar/components/SubMenu";
import { createNamespacedHelpers } from 'vuex';
import Logo from "@/layouts/common/components/Sidebar/components/Logo";
const { mapState } = createNamespacedHelpers('layoutStore');
export default {
    name: "ContentSidebar",
    components: {Logo, SubMenu},
    data: () => ({
        routes: [
            {
                path: '/user',
                name: 'user',
                meta: {
                    icon: 'user',
                    title: 'Quản lý user'
                },
                children: [
                    {
                        path: 'create',
                        name: 'createUser',
                        meta: {
                            icon: 'user',
                            title: 'Thêm user'
                        }
                    },
                    {
                        path: 'update',
                        name: 'updateUser',
                        meta: {
                            icon: 'user',
                            title: 'Sửa user'
                        }
                    },
                    {
                        path: 'list',
                        name: 'listUser',
                        meta: {
                            icon: 'user',
                            title: 'DS user'
                        },
                        children: [
                            {
                                path: 'list',
                                name: 'listUsers',
                                meta: {
                                    icon: 'user',
                                    title: 'Xóa user'
                                },
                            }
                        ]
                    },
                ]
            },
            {
                path: '/user',
                name: 'user1',
                meta: {
                    icon: 'user',
                    title: 'Trang chủ',
                    onlyShowParent: true
                },
                children: [
                    {
                        path: '',
                        name: 'createUser1',
                        meta: {
                            icon: 'user',
                            title: 'Thêm user'
                        }
                    }
                ]
            },
            {
                path: '/user',
                name: 'user2',
                meta: {
                    icon: 'user',
                    title: 'Trang chủ 2',
                },
                children: [
                    {
                        path: 'user2',
                        name: 'createUser2',
                        meta: {
                            icon: 'user',
                            title: 'Thêm user 2',
                            onlyShowParent: true
                        },
                        children: [
                            {
                                path: '',
                                name: 'createUser21',
                                meta: {
                                    icon: 'user',
                                    title: 'Thêm user 21'
                                },
                            }
                        ]
                    },
                    {
                        path: '',
                        name: 'createUser3',
                        meta: {
                            icon: 'user',
                            title: 'Thêm user 3'
                        },
                        children: [
                            {
                                path: '',
                                name: 'createUser31',
                                meta: {
                                    icon: 'user',
                                    title: 'Thêm user 31'
                                },
                            }
                        ]
                    }
                ]
            }
        ]
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
