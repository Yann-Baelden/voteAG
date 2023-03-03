<template>
  <div class="pt-16">
    <h1 class="font-bold text-brand-blue-1 text-5xl text-center">
      {{ datas.name }}
    </h1>
    <div class="flex items-center">
      <table class="table-auto shadow-lg bg-white mx-auto my-6">
        <thead>
          <tr>
            <th class="bg-blue-100 border text-left px-8 py-4">Vote</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Nbr de voix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-8 py-4">Pour</td>
            <td class="border px-8 py-4">{{ datas.forVotes }}</td>
          </tr>
          <tr>
            <td class="border px-8 py-4">Contre</td>
            <td class="border px-8 py-4">{{ datas.againstVotes }}</td>
          </tr>
          <tr>
            <td class="border px-8 py-4">Abstention</td>
            <td class="border px-8 py-4">{{ datas.absVotes }}</td>
          </tr>
          <tr>
            <td class="border px-8 py-4">Total des votes</td>
            <td class="border px-8 py-4">{{ totalVotes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div>
    <button
      class="block w-4/5 bg-brand-green-1 mx-auto mb-12 py-7 px-10 text-white text-3xl font-bold text-center rounded-full"
      @click="startingVote"
    >
      Début du vote
    </button>
  </div>
  <div>
    <button
      class="block w-4/5 bg-red-700 mx-auto mb-12 py-7 px-10 text-white text-3xl font-bold text-center rounded-full"
      @click="stopingVote"
    >
      Arrêt du vote
    </button>
  </div>
</template>

<script>
export default {
  name: "VotingResult",
  data() {
    return {
      datas: {},
      interval: null,
    };
  },

  computed: {
    totalVotes() {
      return (
        parseInt(this.datas.forVotes) +
        parseInt(this.datas.againstVotes) +
        parseInt(this.datas.absVotes)
      );
    },
  } /*
  created() {
    this.datas = {
      name: this.$route.query.name,
      forVotes: this.$route.query.forVotes,
      againstVotes: this.$route.query.againstVotes,
      absVotes: this.$route.query.abstentionVotes,
    };
  },*/,
  methods: {
    async getVoteResult() {
      let id = this.$route.params.id;
      const res = await fetch(`${import.meta.env.VITE_API_URL}/event/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const resDatas = await res.json();
      const usefullDatas = JSON.parse(resDatas.voteResults);
      this.datas = {
        name: usefullDatas.nom,
        forVotes: usefullDatas.nb_voix_pour,
        againstVotes: usefullDatas.nb_voix_contre,
        absVotes: usefullDatas.nb_abstentions,
      };
      console.log(this.datas);
    },
    async startingVote() {
      let id = this.$route.params.id;
      if (!this.interval) {
        this.interval = setInterval(this.getVoteResult, 2000);
      }
      const res = await fetch(`${import.meta.env.VITE_API_URL}/vote/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isOpen: true }),
      });
      const resDatas = await res.json();
      console.log(resDatas);
    },
    async stopingVote() {
      clearInterval(this.interval);
      this.interval = null;
      let id = this.$route.params.id;
      const res = await fetch(`${import.meta.env.VITE_API_URL}/vote/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isOpen: false }),
      });
      const resDatas = await res.json();
      console.log(resDatas);
    },
  },
};
</script>
