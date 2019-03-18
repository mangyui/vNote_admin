import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    code: 0,
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://avatars3.githubusercontent.com/u/39995618?s=460&v=4',
    name: 'MANGYU'
  },
  editor: {
    code: 0,
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  },
  mangyu: {
    ret: 200,
    roles: ['mangyu'],
    token: 'mangyu'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => {
    return {
      code: 0,
      Message: 'success'
    }
  }
}
