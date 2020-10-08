import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ceb170c = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _05e2fba2 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _b60be7ce = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _27ce3a59 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _63392173 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _2488ca86 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _0e987da6 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _0ceb170c,
    children: [{
      path: "",
      component: _05e2fba2,
      name: "home"
    }, {
      path: "/login",
      component: _b60be7ce,
      name: "login"
    }, {
      path: "/register",
      component: _b60be7ce,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _27ce3a59,
      name: "profile"
    }, {
      path: "/settings",
      component: _63392173,
      name: "settings"
    }, {
      path: "/editor",
      component: _2488ca86,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _0e987da6,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
