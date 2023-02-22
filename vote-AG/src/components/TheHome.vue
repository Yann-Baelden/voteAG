<template>
  <div class="flex flex-col mt-36 w-full">
    <router-link
      to="incommingvotes"
      class="block w-4/5 bg-brand-yellow-1 rounded-2xl mx-auto mb-5 py-7 px-10 text-white text-3xl font-bold text-center"
    >
      Votes à venir
    </router-link>

    <router-link
      to="results"
      class="block w-4/5 bg-brand-blue-1 rounded-2xl mx-auto mb-5 py-7 px-10 text-white text-2xl font-bold text-center"
    >
      Résultats des derniers votes
    </router-link>

    <router-link
      to="votes"
      class="block w-4/5 bg-brand-green-1 rounded-2xl mx-auto mb-5 py-7 px-10 text-white text-3xl font-bold text-center"
    >
      Vote en cours
    </router-link>

    <router-link
      to="myaccount"
      class="block w-4/5 bg-brand-blue-2 rounded-2xl mx-auto mb-5 py-7 px-10 text-white text-3xl font-bold text-center"
    >
      Mon compte
    </router-link>

    <router-link
      to="admin"
      class="block w-4/5 bg-brand-blue-1 rounded-2xl mx-auto mb-5 py-7 px-10 text-white text-3xl font-bold text-center"
    >
      Admininistration
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TheHome",
};
</script>
