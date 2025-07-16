import { createRouter, createWebHistory } from "vue-router";
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/stores/userStore";
const Login = () => import('@/views/Login/index.vue')
const Layout = () => import('@/views/Layout/index.vue')
const Home = () => import('@/views/Home/index.vue')
const Category = () => import('@/views/Category/index.vue')
const SubCategory = () => import('@/views/SubCategory/index.vue')
const Detail = () => import('@/views/Detail/index.vue')
const CartList = () => import('@/views/CartList/index.vue')
const Checkout = () => import('@/views/Checkout/index.vue')
const Pay = () => import('@/views/Pay/index.vue')
const PayBack = () => import('@/views/Pay/PayBack.vue')
const Member = () => import('@/views/Member/index.vue')
const UserInfo = () => import('@/views/Member/components/userInfo.vue')
const UserOrder = () => import('@/views/Member/components/userOrder.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系位置
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home
        }, {
          path: "category/:id",
          component: Category
        }, {
          path: "category/sub/:id",
          component: SubCategory
        },
        {
          path: "detail/:id",
          component: Detail,
        },
        {
          path: "cartlist",
          component: CartList,
        },
        {
          path: "checkout",
          component: Checkout
        },
        {
          path: "pay",
          component: Pay
        },
        {
          path: "paycallback",
          component: PayBack
        },
        {
          path: "member",
          component: Member,
          // 三级路由
          children: [
            {
              path: '',
              component: UserInfo
            }, {
              path: 'userOrder',
              component: UserOrder
            }
          ]
        }
      ]
    }, {
      path: "/login",
      component: Login,
    },
  ],
  // 路由切换时，自动滚动
  scrollBehavior(to, from, savedPosition) {
    // 阻止category路由跳转回顶部
    if (to.path.startsWith('/category/')) {
      return false
    }
    // 始终滚动到顶部
    return { top: 0 }
  }
})

// 创建数组存储权限页
const logUrl = ['/Checkout', '/pay']

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  // 如果访问的权限页
  if (logUrl.includes(to.path)) {
    // 如果访问权限页的同时存在token
    if (userStore.userInfo.token) {
      // 放行
      next()
    } else {
      ElMessage({
        type: "warning",
        message: '请先登录！',
      })
      // 如果没登录且访问的不是登录页，跳转到登录
      next('/login')
    }
  } else {
    // 放行
    next()
  }
})

export default router
