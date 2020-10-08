const cookieparser = process.server ? require('cookieparser') : undefined
// 在服务端渲染期间运行都是同一个实例
// 为了防止数据冲突，务必要把state定义成一个函数，返回数据对象
export const state = () => {
	return {
		foo: 'bar'
	}
}

export const mutations = {
	setUser (state, data) {
		state.user = data
	}
}

export const actions = {
	// nuxtServerInit是一个特殊的 action 方法
	// 这个 action 会在服务端渲染期间自动调用
	// 作用：初始化容器数据，传递数据给客户端使用
	nuxtServerInit ({ commit }, { req }) {
		let user = null
		// 如果请求头中有cookie
    if (req.headers.cookie) {
			// 使用 cookieparser 把 cookie 字符串转为 js 对象
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setUser', user)
  }
}