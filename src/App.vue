<template>
  <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders content">
    <q-drawer
      class="sidebar"
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
    >
      <q-list padding class="menu-list">
        <router-link :to="{ name: 'Home' }">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> HOME...... </q-item-section>
          </q-item>
        </router-link>

        <router-link :to="{ name: 'About' }">
          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="groups" />
            </q-item-section>

            <q-item-section> ABOUT US </q-item-section>
          </q-item>
        </router-link>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      drawer: ref(false),
    };
  },
};
</script>

<style>
.content {
  background-color: #eeffea;
  font-family: "DB Adman X";
}
.sidebar {
  background-color: #2c6975;
  font-size: 23px;
}
a {
  text-decoration: none;
  color: #fefbea;
}
.menu-list .q-item {
  border-radius: 0 32px 32px 0;
}
</style>