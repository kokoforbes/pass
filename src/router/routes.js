const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/dashboard",
        component: () => import("pages/Dashboard.vue"),
      },

      {
        path: "/activity",
        component: () => import("pages/Activity.vue"),
      },
      {
        path: "/wallet",
        component: () => import("pages/Wallet.vue"),
      },
      {
        path: "/help",
        component: () => import("pages/Help.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
