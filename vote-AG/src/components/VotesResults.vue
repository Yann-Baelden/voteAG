<template>
  <div class="flex items-center w-full pt-32">
    <h1
      class="block text-5xl font-black text-brand-green-1 text-center mx-auto"
    >
      Résultats des votes
    </h1>
  </div>
  <div></div>

  <div
    v-for="vote in votes"
    :key="vote.event_id"
    class="flex flex-col items-center w-full"
  >
    <ul class="list-none pt-6">
      <button @click="goTo(vote)">
        <li
          class="block w-4/5 bg-brand-blue-1 rounded-2xl mx-auto mb-5 py-7 px-10 text-white text-2xl font-bold text-center"
        >
          {{ vote.nom }}
        </li>
      </button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VotesResults",

  data() {
    return {
      votes: [],
    };
  },
  async mounted() {
    const res = await fetch(import.meta.env.VITE_API_URL + "/votes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resDatas = await res.json();
    this.votes = resDatas.event;
  },
  methods: {
    goTo(vote) {
      this.$router.push({
        path: `/event/${vote.event_id}`,
        query: {
          name: vote.nom,
          forVotes: vote.nb_voix_pour,
          againstVotes: vote.nb_voix_contre,
          abstentionVotes: vote.nb_abstentions,
        },
      });
    },
  },
};
</script>
