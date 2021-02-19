<template>
  <q-page>
      <q-toolbar class="">
      <q-btn flat round dense icon="dashboard" />
      <q-toolbar-title>
        {{$route.name}}
      </q-toolbar-title>
    </q-toolbar>
    <div class="q-pa-md">
      <div>
        <div class="flex flex-center">
          <!-- <img
            class="q-mx-auto"
            width="80px"
            alt="Quasar logo"
            src="~assets/movie.svg"
          > -->
        </div>
        <h5 class="q-ma-sm text-center">
          Bienvenidos a Movies Test
        </h5>
        <p class="text-center">Desde este panel administrativo puede ver, crear, modificar y eliminar tanto peliculas como clasificaciones</p>
      </div>
      <br>
      <div class="row q-col-gutter-md">
        <div class="col" v-for="i in 2" :key="i">
          <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-h5 q-mt-sm q-mb-xs" v-if="i == 1">Películas</div>
                <div class="text-h5 q-mt-sm q-mb-xs" v-else>Clasificaciones</div>
                <h6 class="q-ma-none text-body text-grey-10" v-if="i == 1">
                  {{movies.length}}
                </h6>
                <h6 class="q-ma-none text-body text-grey-10" v-else>
                  {{clasifications.length}}
                </h6>
              </q-card-section>

              <q-card-section class="q-ml-auto q-mr-md flex flex-center">
                <q-icon name="movie" v-if="i == 1" size="xl" />
                <q-icon name="category" v-else size="xl" />
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn normal unelevated to="/movies"  color="orange-10" v-if="i == 1">
                Ir a preliculas
              </q-btn>
              <q-btn normal unelevated to="/classifications"  color="orange-10" v-else>
                Ir a clasificaciones
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      movies: [],
      clasifications: []
    }
  },
  mounted () {
    this.get()
    this.getMovies()
  },
  methods: {
    getMovies () {
      this.$axios.get('http://localhost:3000/api/peliculas').then(res => {
        this.movies = res.data
      })
    },
    get () {
      this.$axios.get('http://localhost:3000/api/clasificaciones').then(res => {
        this.clasifications = res.data
      })
    }
  }
}
</script>
