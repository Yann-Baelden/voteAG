<template>
  <div class="flex flex-col mt-36 w-full">
    <router-link
      to="/incomming-votes"
      class="block w-4/5 bg-brand-yellow-1 rounded-2xl mx-auto mb-5 py-7 px-10 text-white text-3xl font-bold text-center"
    >
      Votes à venir
    </router-link>

    <router-link
      to="/incomming-votes"
      class="block w-4/5 bg-brand-blue-1 rounded-2xl mx-auto mb-5 py-7 px-10 text-white text-2xl font-bold text-center"
    >
      Résultats des derniers votes
    </router-link>

    <router-link
      to="/incomming-votes"
      class="block w-4/5 bg-brand-green-1 rounded-2xl mx-auto mb-5 py-7 px-10 text-white text-3xl font-bold text-center"
    >
      Vote en cours
    </router-link>

    <router-link
      to="/incomming-votes"
      class="block w-4/5 bg-brand-blue-2 rounded-2xl mx-auto mb-5 py-7 px-10 text-white text-3xl font-bold text-center"
    >
      Mon compte
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
