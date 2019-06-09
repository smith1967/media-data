import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1beadf47 = () => interopDefault(import('..\\pages\\camera.vue' /* webpackChunkName: "pages_camera" */))
const _b83aea04 = () => interopDefault(import('..\\pages\\index-01.vue' /* webpackChunkName: "pages_index-01" */))
const _3a0d6860 = () => interopDefault(import('..\\pages\\list-03.vue' /* webpackChunkName: "pages_list-03" */))
const _70f6cf92 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _1659ce8c = () => interopDefault(import('..\\pages\\login.1.vue' /* webpackChunkName: "pages_login.1" */))
const _b3744876 = () => interopDefault(import('..\\pages\\media_\\index.vue' /* webpackChunkName: "pages_media__index" */))
const _60d20544 = () => interopDefault(import('..\\pages\\signin.vue' /* webpackChunkName: "pages_signin" */))
const _e8f74698 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */))
const _10bc0594 = () => interopDefault(import('..\\pages\\test-computed.vue' /* webpackChunkName: "pages_test-computed" */))
const _3b6dbe26 = () => interopDefault(import('..\\pages\\info\\about.vue' /* webpackChunkName: "pages_info_about" */))
const _ece65718 = () => interopDefault(import('..\\pages\\info\\history.vue' /* webpackChunkName: "pages_info_history" */))
const _c351ab90 = () => interopDefault(import('..\\pages\\info\\vision.vue' /* webpackChunkName: "pages_info_vision" */))
const _19b73f8b = () => interopDefault(import('..\\pages\\media_\\info.vue' /* webpackChunkName: "pages_media__info" */))
const _afdee682 = () => interopDefault(import('..\\pages\\media_\\_code.vue' /* webpackChunkName: "pages_media___code" */))
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
      path: "/camera",
      component: _1beadf47,
      name: "camera"
    }, {
      path: "/index-01",
      component: _b83aea04,
      name: "index-01"
    }, {
      path: "/list-03",
      component: _3a0d6860,
      name: "list-03"
    }, {
      path: "/login",
      component: _70f6cf92,
      name: "login"
    }, {
      path: "/login.1",
      component: _1659ce8c,
      name: "login.1"
    }, {
      path: "/media_",
      component: _b3744876,
      name: "media_"
    }, {
      path: "/signin",
      component: _60d20544,
      name: "signin"
    }, {
      path: "/test",
      component: _e8f74698,
      name: "test"
    }, {
      path: "/test-computed",
      component: _10bc0594,
      name: "test-computed"
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
      path: "/media_/info",
      component: _19b73f8b,
      name: "media_-info"
    }, {
      path: "/media_/:code",
      component: _afdee682,
      name: "media_-code"
    }, {
      path: "/",
      component: _044615c0,
      name: "index"
    }],

    fallback: false
  })
}
