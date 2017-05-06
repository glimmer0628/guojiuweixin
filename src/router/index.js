import Vue from 'vue';
import Router from 'vue-router';
import productdetail from '../page/ProductDetail/ProductDetail.vue';
import shoppingcar from '../page/ShoppingCar/ShoppingCar.vue';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/productdetail',
      name: 'productdetail',
      component: productdetail
    },
    {
      path: '/shoppingcar',
      name: 'shoppingcar',
      component: shoppingcar
    }
  ]
});
