import Vue from 'vue'
import Router from 'vue-router'

// const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/login',
  //   name: 'login',
  //   hidden: true
  // },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard/dashboard'
  },
  { path: '/login', component: () => import('@/views/login'), name: 'login', hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  // 报表
  {
    path: '/dashboard',
    component: Layout,
    meta: { title: 'dashboard', icon: 'dashboard', roles: ['admin'] },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/dashboard'),
        meta: { title: 'dashboard', icon: 'dashboard', roles: ['admin'] }
      }
    ]
  },
  // 统计图
  {
    path: '/Charts',
    component: Layout,
    redirect: '/Charts/index',
    meta: { title: 'Charts', icon: 'heatmapChart', roles: ['admin'] },
    children: [
      {
        path: 'index',
        name: 'Charts',
        component: () => import('@/views/Charts/index'),
        meta: { title: 'Charts', icon: 'heatmapChart' }
      }
    ]
  },
  // 主页
  {
    path: '/home',
    component: Layout,
    hidden: true,
    meta: { title: 'home', icon: 'home' },
    children: [
      {
        path: 'index',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: { title: 'home', icon: 'home' }
      },
      {
        path: 'search',
        name: 'search',
        hidden: true,
        component: () => import('@/views/home/search'),
        meta: { title: 'Search' }
      },
      {
        path: 'mistake/:id',
        name: 'mistake',
        hidden: true,
        component: () => import('@/views/home/mistake'),
        meta: { title: 'Mistake' }
      },
      {
        path: 'question_details/:id',
        name: 'question_details',
        hidden: true,
        component: () => import('@/views/home/question_details'),
        meta: { title: 'Question_Details' }
      }
    ]
  },
  // todo
  {
    path: '/addQues',
    component: Layout,
    redirect: '/addQues/index',
    meta: {
      title: 'SQu',
      icon: 'camera3'
    },
    children: [
      {
        path: 'index',
        name: 'addQues',
        component: () => import('@/views/todo/addQues'),
        meta: { title: 'addQues', icon: 'camera3' }
      }

    ]
  },
  // 语音
  // {
  //   path: '/Voice',
  //   component: Layout,
  //   redirect: '/Voice/index',
  //   hidden: true,
  //   meta: {
  //     title: 'Voice',
  //     icon: 'voice'
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Voice',
  //       component: () => import('@/views/todo/voice'),
  //       meta: { title: 'Voice', icon: 'voice' }
  //     }

  //   ]
  // },
  // 用户
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    meta: { title: 'user', icon: 'me' },
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'user',
        component: () => import('@/views/user/index'),
        meta: { title: 'user', icon: 'me' }
      },
      {
        path: 'fans/:id',
        name: 'fans',
        component: () => import('@/views/user/fans'),
        meta: { title: 'Fans', icon: 'me' }
      },
      {
        path: 'others/:id',
        name: 'others',
        component: () => import('@/views/user/others'),
        meta: { title: 'Others' }
      }
    ]
  },

  // todo
  {
    path: '/todo',
    component: Layout,
    redirect: '/todo/voice',
    meta: {
      title: 'ToDo',
      icon: 'edit'
    },
    hidden: true,
    children: [
      {
        path: 'speech',
        name: 'speech',
        component: () => import('@/views/todo/speech'),
        meta: { title: 'Speech' }
      },
      {
        path: 'edit',
        name: 'edit',
        hidden: true,
        component: () => import('@/views/todo/edit'),
        meta: { title: 'Edit', icon: 'edit' }
      }
      // {
      //   path: 'addMistake',
      //   name: 'addMistake',
      //   hidden: true,
      //   component: () => import('@/views/todo/addMistake'),
      //   meta: { title: 'addMistake' }
      // }
      // {
      //   path: 'voice',
      //   name: 'voice',
      //   component: () => import('@/views/todo/voice'),
      //   meta: { title: 'Voice' }
      // }
      // {
      //   path: 'ocr',
      //   name: 'ocr',
      //   hidden: true,
      //   component: () => import('@/views/todo/ocr'),
      //   meta: { title: 'OCR' }
      // },

    ]
  },
  // 笔记
  {
    path: '/tonote',
    component: Layout,
    redirect: '/tonote/notes',
    meta: {
      title: 'ToNote',
      icon: 'form'
    },
    children: [
      {
        path: 'noteList',
        name: 'noteList',
        component: () => import('@/views/tonote/noteList'),
        meta: { title: 'NoteList' }
      },
      {
        path: 'note_type',
        name: 'note_type',
        component: () => import('@/views/tonote/note_type'),
        meta: { title: 'Note_type' }
      },
      {
        path: 'note_detail/:id',
        name: 'note_detail',
        hidden: true,
        component: () => import('@/views/tonote/note_detail'),
        meta: { title: 'Note_detail' }
      },
      {
        path: 'note_edit/:id',
        name: 'note_edit',
        hidden: true,
        component: () => import('@/views/tonote/note_edit'),
        meta: { title: 'Note_edit' }
      }
    ]
  },
  // 错题
  {
    path: '/toques',
    component: Layout,
    redirect: '/toques/my_ques',
    meta: {
      title: 'ToQues',
      icon: 'cuoti'
    },
    children: [
      {
        path: 'collect',
        name: 'collect',
        component: () => import('@/views/toques/collect'),
        meta: { title: 'Collect' }
      },
      {
        path: 'mistake_type',
        name: 'mistake_type',
        component: () => import('@/views/toques/mistake_type'),
        meta: { title: 'Mistake_type' }
      },
      {
        path: 'quesList',
        name: 'quesList',
        component: () => import('@/views/toques/quesList'),
        meta: { title: 'QuesList' }
      }
    ]
  },

  // 表格
  {
    path: '/School',
    component: Layout,
    redirect: '/School/index',
    name: 'table',
    meta: {
      title: 'Table',
      icon: 'component'
    },
    children: [
      {
        path: 'index',
        name: 'SchoolList',
        component: () => import('@/views/School/index'),
        meta: { title: 'SchoolList', icon: 'component' }
      }

    ]
  },
  // // 第三方网站
  // {
  //   path: '/other',
  //   component: Layout,
  //   redirect: '/more/index',
  //   hidden: true,
  //   meta: { title: 'Other', icon: 'baidumap' },
  //   children: [
  //     {
  //       path: 'open/:id',
  //       name: 'open',
  //       component: () => import('@/views/other/open'),
  //       meta: { title: 'Open' }
  //     }
  //   ]
  // },
  // 关于 帮助
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    meta: { title: 'about', icon: 'international' },
    children: [
      {
        path: 'index',
        name: 'about',
        component: () => import('@/views/about/index'),
        meta: { title: 'about', icon: 'international' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
export const asyncRouterMap = [

]
