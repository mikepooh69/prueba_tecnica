<template>
  <q-list class="q-px-sm" >
    <q-item
    style="height:34px!important;min-height:34px!important;border-radius:4px"
    clickable
    tag="a"
    :to="link"
      active-class="my-menu-link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label >{{ title }}</q-item-label>
      <!-- <q-item-label caption class="caption">
        {{ caption }}
      </q-item-label> -->
    </q-item-section>
  </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.my-menu-link{
  color: white;
  background: #ff4f23f5;
  font-weight: 500

}
.my-menu-link .caption{
  color: white !important
}
</style>
