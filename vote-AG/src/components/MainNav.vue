<template>
  <header class="fixed top-0 left-0 h-16 mb-10 w-full bg-white">
    <div
      class="mx-auto flex justify-between h-full flex-nowrap border-b border-solid"
    >
      <router-link to="/home" replace class="my-auto">
        <font-awesome-icon icon="fa-solid fa-house" class="text-4xl ml-8" />
      </router-link>

      <img
        src="@/assets/EC-LOGO CHARTRE GRAPHIQUE_Plan de travail 1 copie 22.jpg"
      />
      <router-link to="" class="my-auto">
        <font-awesome-icon
          icon="fa-solid fa-user-xmark"
          class="text-4xl mr-8"
          @click="disconnect"
        />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  methods: {
    disconnect() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>
