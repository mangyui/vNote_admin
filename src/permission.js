import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
// import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth' // 验权
import {
  setTitle
} from '@/utils/util' // 设置浏览器头部标题

// permission judge function
// function hasPermission(roles, permissionRoles) {
//   if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
//   if (!permissionRoles) return true
//   return roles.some(role => permissionRoles.indexOf(role) >= 0)
// }

// const whiteList = ['/login',
//   '/',
//   '/home/index', // 主页
//   '/SQu/index', // 拍照搜题
//   '/more/index', // 更多
//   '/merchant/index', // 商家
//   '/about/index', // 关于帮助
//   '/home/search', // 搜索页
//   '/todo/edit', // 笔记添加
//   '/home/question_details/', // 题目详情 有id的加上/
//   '/home/mistake/', // 题目详情 有id的加上/
//   '/home/other_answer/' // 题友解答
// ] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  // store.dispatch('LogOut')
  // console.log(store.getters.user.Id)
  // if (!store.getters.user.Id) {
  //   if (whiteList.indexOf(to.path.replace(/\d+/g, '')) !== -1) {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // } else {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //   } else {
  //     next()
  //   }
  // }
  next()
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
  setTimeout(() => {
    const browserHeaderTitle = store.getters.browserHeaderTitle
    setTitle(browserHeaderTitle)
  }, 0)
})
