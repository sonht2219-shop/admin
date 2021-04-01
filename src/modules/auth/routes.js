import AuthLayout from '@/layouts/auth'

const authRoutes = [
    {
        path: '/authentication',
        component: AuthLayout,
        name: 'auth',
        meta: { title: 'Đăng ký/Đăng nhập', hidden: true },
        children: [
            {
                path: 'login',
                component: () => import('./Login'),
                name: 'login',
                meta: { title: 'Đăng nhập' }
            },
            {
                path: 'register',
                component: () => import('./Register'),
                name: 'register',
                meta: { title: 'Đăng ký' }
            }
        ]
    }
]
export default authRoutes
