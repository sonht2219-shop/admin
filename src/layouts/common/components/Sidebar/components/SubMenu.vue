<template functional>
    <a-sub-menu :key="props.menuInfo.name" >
        <span slot="title">
            <a-icon :type="props.menuInfo.meta.icon"/>
            <span>{{ props.menuInfo.meta.title }}</span>
        </span>
        <template v-for="item in props.menuInfo.children">
            <template v-if="!item.meta.hidden">
                <a-menu-item :key="item.name" v-if="!item.children || !item.children.length">
                    <router-link :to="{ name: item.name }">
                        <a-icon :type="item.meta.icon" />
                        <span>{{ item.meta.title }}</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item :key="item.name" v-else-if="item.meta && item.meta.onlyShowParent">
                    <router-link :to="{ name: item.children[0].name }">
                        <a-icon :type="item.meta.icon" />
                        <span>{{ item.meta.title }}</span>
                    </router-link>
                </a-menu-item>
                <sub-menu :key="item.key" v-else :menu-info="item"></sub-menu>
            </template>
        </template>
    </a-sub-menu>
</template>

<script>
export default {
    props: {
        menuInfo: Object
    },
    name: "SubMenu"
}
</script>

<style scoped>

</style>
