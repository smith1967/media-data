import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _70f6cf92 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _509755e0 = () => interopDefault(import('..\\pages\\media\\index.vue' /* webpackChunkName: "pages_media_index" */))
const _e8f74698 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */))
const _3b6dbe26 = () => interopDefault(import('..\\pages\\info\\about.vue' /* webpackChunkName: "pages_info_about" */))
const _ece65718 = () => interopDefault(import('..\\pages\\info\\history.vue' /* webpackChunkName: "pages_info_history" */))
const _c351ab90 = () => interopDefault(import('..\\pages\\info\\vision.vue' /* webpackChunkName: "pages_info_vision" */))
const _4d821e40 = () => interopDefault(import('..\\pages\\media\\info.vue' /* webpackChunkName: "pages_media_info" */))
const _4d01f3ec = () => interopDefault(import('..\\pages\\media\\_code.vue' /* webpackChunkName: "pages_media__code" */))
const _044615c0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'hash',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/login",
      component: _70f6cf92,
      name: "login"
    }, {
      path: "/media",
      component: _509755e0,
      name: "media"
    }, {
      path: "/test",
      component: _e8f74698,
      name: "test"
    }, {
      path: "/info/about",
      component: _3b6dbe26,
      name: "info-about"
    }, {
      path: "/info/history",
      component: _ece65718,
      name: "info-history"
    }, {
      path: "/info/vision",
      component: _c351ab90,
      name: "info-vision"
    }, {
      path: "/media/info",
      component: _4d821e40,
      name: "media-info"
    }, {
      path: "/media/:code",
      component: _4d01f3ec,
      name: "media-code"
    }, {
      path: "/",
      component: _044615c0,
      name: "index"
    }],

    fallback: false
  })
}
