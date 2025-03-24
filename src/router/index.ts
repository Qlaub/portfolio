import { defineRouter } from '#q-app/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';
import { i18n } from 'src/boot/i18n';
import type { MessageLanguages } from 'src/boot/i18n';

const supportedLocales: MessageLanguages[] = ['en-US', 'es-US'];

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    const localeInPath = to.params.locale as MessageLanguages;

    // Always set the i18n locale from the URL if available
    if (supportedLocales.includes(localeInPath)) {
      i18n.global.locale.value = localeInPath;
      return next();
    }

    // If user is on root (/) and prefers Spanish, redirect to /es-US
    if (to.path === '/' && i18n.global.locale.value === 'es-US') {
      return next({ path: '/es-US' });
    }

    // Don't modify routes if i18n is set to en-US or they're not on root
    return next();
  });

  return Router;
});
