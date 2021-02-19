<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevateds>
      <q-toolbar class="bg-grey-10">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <img  src="~assets/movie.svg" width="32" class="q-ml-md">
        <q-toolbar-title>
          Movies Test
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg"
      :width="260"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          <span style="font-weight:500">Menu de opciones</span>
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Dashboard',
    caption: 'Ver, crear, modificar y borrar',
    icon: 'dashboard',
    link: '/dashboard'
  },
  {
    title: 'Películas',
    caption: 'Ver, crear, modificar y borrar',
    icon: 'movie',
    link: '/movies'
  },
  {
    title: 'Clasificaciones',
    caption: 'Ver, crear, modificar y borrar',
    icon: 'category',
    link: '/classifications'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
<style>
.bg{
  background: #fafafa;
}
button[normal]{
  height: 34px !important
}
</style>
