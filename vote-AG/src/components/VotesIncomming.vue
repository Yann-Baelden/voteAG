<template>
  <div class="flex items-center w-full pt-32">
    <h1 class="block text-5xl font-black text-brand-blue-1 text-center mx-auto">
      Liste des Votes
    </h1>
  </div>

  <div class="flex flex-col items-center w-full">
    <ul
      v-for="vote in votes"
      :key="vote.event_id"
      class="list-none pt-3 text-2xl"
    >
      <li>
        <button
          class="block w-4/5 bg-brand-blue-1 rounded-2xl mx-auto mb-5 py-7 px-10 text-white text-2xl font-bold text-center"
          @click="getVote(vote)"
        >
          {{ vote.nom }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VotesIncomming",
  data() {
    return {
      votes: {},
    };
  },
  async mounted() {
    const res = await fetch(import.meta.env.VITE_API_URL + "/votes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const datas = await res.json();
    this.votes = datas.event;
  },

  methods: {
    getVote(vote) {
      this.$router.push({
        path: "/votes",
        query: { data: vote.nom, id: vote.event_id, isOpen: vote.isOpen },
      });
    },
  },
};
</script>
