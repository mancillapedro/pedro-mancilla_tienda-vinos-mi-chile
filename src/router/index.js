import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

const fetchToApi = async (path) => {
  try {
    const response = await fetch(path);
    if (!response.ok) throw "Error en API";
    const json = await response.json();
    return json.productos
  } catch (error) {
    console.log(error);
  }
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vinos',
    name: 'vinos',
    component: () => import(/* webpackChunkName: "vinos" */ '../views/VinosView.vue')
  },
  {
    path: '/promocion',
    name: 'vinosEnPromocion',
    props: { getProducts: async () => await fetchToApi('/promocion.json') },
    component: () => import(/* webpackChunkName: "vinosEnPromocion" */ '../views/VinosEnPromocionView.vue')
  },
  {
    path: '/accesorios',
    name: 'accesorios',
    component: () => import(/* webpackChunkName: "accesorios" */ '../views/AccesoriosView.vue')
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
