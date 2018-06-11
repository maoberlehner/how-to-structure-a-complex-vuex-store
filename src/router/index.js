import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const PageCustomer = () =>
  import(/* webpackChunkName: "page-personal-data" */ `../components/page/PageCustomer`);
const PageShippingAddress = () =>
  import(/* webpackChunkName: "page-shipping-address" */ `../components/page/PageShippingAddress`);
const PageAbout = () =>
  import(/* webpackChunkName: "page-about" */ `../components/page/PageAbout`);

export default new Router({
  routes: [
    {
      path: `/`,
      name: `customer`,
      component: PageCustomer,
    },
    {
      path: `/shipping-address`,
      name: `shipping-address`,
      component: PageShippingAddress,
    },
    {
      path: `/about`,
      name: `about`,
      component: PageAbout,
    },
  ],
  mode: `history`,
});
