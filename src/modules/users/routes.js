import CommonLayout from '@/layouts/common'
const userRoutes = [
    {
        path: '/users',
        component: CommonLayout,
        name: 'user',
        meta: { title: 'Quản lý user', icon: 'user' },
        children: [
            {
                path: 'create',
                component: () => import('./Form'),
                name: 'userCreate',
                meta: { title: 'Tạo user' }
            },
            {
                path: 'list',
                component: () => import('./List'),
                name: 'userList',
                meta: { title: 'DS user' }
            },
            {
                path: 'update/:id',
                component: () => import('./Form'),
                props: true,
                name: 'userUpdate',
                meta: { title: 'Sửa user', hidden: true }
            },
        ]
    }
];

export default userRoutes;
