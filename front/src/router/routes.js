
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Dashboard', component: () => import('pages/Index.vue') },
      { path: '/dashboard', name: 'Dashboard', component: () => import('pages/Index.vue') },
      { path: '/movies', name: 'Películas', component: () => import('pages/Movies.vue') },
      { path: '/classifications', name: 'Clasificaciones', component: () => import('pages/Classifications.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
