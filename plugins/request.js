/**
 * 基于 axios 封装的请求模块
 */

import axios from 'axios'

// 创建请求对象
export const request = axios.create({
	baseURL: "http://realworld.api.fed.lagounews.com"
	// baseURL: "https://conduit.productionready.io"
})

// 通过插件极致获取到上下文对象（query、params、req、res、app、store...）
export default ({ store }) => {
    // 请求拦截器
    // Add a request interceptor
    // 任何请求都要经过请求拦截器
    // 我们可以在请求拦截器中做一些公共的业务处理，例如统一设置 token
    request.interceptors.request.use(function (config) {
        // headers: {
        // 	Authorization: `Token`
        // }
        const { user } = store.state
        if(user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }
        
        return config
    },function (error) {
        // 如果请求失败（此时请求还没有发出来）就会进入这里
        return Promise.reject(error)
    })
}
