import CommonLayout from '@/layouts/common'
const dashBoardRoutes = [
    {
        path: '/dashboard',
        component: CommonLayout,
        name: 'home',
        meta: { title: 'Trang chủ', icon: 'dashboard', onlyShowParent: true },
        children: [
            {
                path: '',
                component: () => import('./index.vue'),
                name: 'dashboard',
                meta: { title: 'Trang chủ' }
            }
        ]
    }
]

export default dashBoardRoutes;
