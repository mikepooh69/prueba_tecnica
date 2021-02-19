<template>
  <q-page >
    <q-toolbar class="">
      <q-btn flat round dense icon="movie" />
      <q-toolbar-title>
        {{$route.name}}
      </q-toolbar-title>
      <q-btn normal unelevated color="orange-10" size="md" icon="add" class="q-mr-xs" label="Agregar" @click="addDialog = !addDialog" />
    </q-toolbar>
     <div class="q-pa-md">
      <q-table
        class="no-shadow"
        title="Lista de peliculas"
        :data="data"
        :columns="columns"
        row-key="name"
        :loading="loading"
      >
        <template v-slot:body-cell-clasificacion="props">
          <q-td :props="props">
            {{findClasification(props.row.clasification)[0].name}}
          </q-td>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn dense round color="grey-9" flat icon="edit" @click="openDialog(props)"></q-btn>
            <q-btn dense round color="red" flat icon="delete" @click="dele(props)"></q-btn>
          </q-td>
        </template>
      </q-table>
     </div>
    <q-dialog v-model="addDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6" v-if="!edit">Agregar película</div>
          <div class="text-h6" v-else>Editar película</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="name" autofocus label="Nombre" />
          <br>
          <q-input dense v-model="director" label="Director" />
          <br>
          <q-select v-model="clasification" :options="clasifications" label="Clasificación"  map-options  option-value="_id"
          option-label="name" emit-value />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat color="grey-10" label="Cancelar" @click="reset" v-close-popup />
          <q-btn flat color="orange-10" label="Agregar" v-if="!edit"  @click="add" :loading="loading" />
          <q-btn flat color="orange-10" label="Editar"  v-else @click="update" :loading="loading" />
        </q-card-actions>
      </q-card>
    </q-dialog>

     <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alerta</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          ¿Estas seguro que desea realizar esta acción?
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Eliminar" color="orange-10" @click="deleteMovie" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'PageMovies',
  data () {
    return {
      loading: false,
      addDialog: false,
      alert: false,
      columns: [
        { name: 'name', align: 'left', label: 'Nombre', field: 'name', sortable: true },
        { name: 'director', align: 'left', label: 'Director', field: 'director', sortable: true },
        { name: 'clasificacion', align: 'center', label: 'Clasificación', field: 'clasificacion' },
        { name: 'actions', align: 'right', label: '', field: '' }
      ],
      data: [],
      edit: false,
      name: '',
      director: '',
      clasification: '',
      clasifications: [],
      id: null
    }
  },
  mounted () {
    this.getMovies()
    this.get()
  },
  methods: {
    findClasification (id) {
      return this.clasifications.filter(val => {
        return val._id === id
      })
    },
    getMovies () {
      this.loading = true
      this.$axios.get('http://localhost:3000/api/peliculas').then(res => {
        this.data = res.data
        this.loading = false
      })
    },
    get () {
      this.$axios.get('http://localhost:3000/api/clasificaciones').then(res => {
        this.clasifications = res.data
      })
    },
    update () {
      this.loading = true
      this.$axios.put(`http://localhost:3000/api/pelicula/${this.id}`, {
        name: this.name,
        director: this.director,
        clasification: this.clasification
      }).then(() => {
        this.loading = false
        this.addDialog = false
        this.getMovies()
      })
    },
    add () {
      this.loading = true
      this.$axios.post('http://localhost:3000/api/peliculas', {
        name: this.name,
        director: this.director,
        clasification: this.clasification
      }).then(() => {
        this.loading = false
        this.addDialog = false
        this.getMovies()
      })
    },
    deleteMovie () {
      this.loading = true
      this.$axios.delete(`http://localhost:3000/api/pelicula/${this.id}`).then(() => {
        this.getMovies()
        this.reset()
      })
    },
    dele (val) {
      this.id = val.row._id
      this.alert = true
    },
    reset () {
      this.edit = false
      this.name = ''
      this.director = ''
      this.clasification = ''
      this.id = null
    },
    openDialog (val) {
      this.id = val.row._id
      this.name = val.row.name
      this.director = val.row.director
      this.clasification = val.row.clasification
      this.edit = true
      this.addDialog = true
    }
  }
}
</script>
