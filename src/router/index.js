import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: { name: 'dashboard' },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/Dashboard.vue'),
      meta: {
        pageTitle: 'Dashboard',
        breadcrumb: [
          {
            text: 'Dashboard',
            active: true,
          },
        ],
      },
    },
    {
      path: '/worker/list',
      name: 'worker-list',
      component: () => import('@/views/apps/invoice/invoice-list/InvoiceList.vue'),
      meta: {
        pageTitle: 'Worker',
        breadcrumb: [
          {
            text: 'Worker',
            active: true,
          },
        ],
      },
    },
    {
      path: '/worker/preview/:id',
      name: 'worker-preview',
      component: () => import('@/views/apps/invoice/invoice-preview/InvoicePreview.vue'),
    },
    {
      path: '/worker/add/',
      name: 'worker-add',
      component: () => import('@/views/apps/invoice/invoice-add/InvoiceAdd.vue'),
    },
    {
      path: '/worker/edit/:id',
      name: 'worker-edit',
      component: () => import('@/views/apps/invoice/invoice-edit/InvoiceEdit.vue'),
    },
    {
      path: '/rack/list',
      name: 'rack-list',
      component: () => import('@/views/rack/Rack.vue'),
      meta: {
        pageTitle: 'Rack',
        breadcrumb: [
          {
            text: 'Rack',
            active: true,
          },
        ],
      },
    },
    {
      path: '/rule',
      name: 'rule',
      component: () => import('@/views/rule/Rule.vue'),
      meta: {
        pageTitle: 'Rule',
        breadcrumb: [
          {
            text: 'Rule',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
