<template>
  <div>
    <h1 class="mt-32">{{ datas.name }}</h1>
    <div>Votes Pour : {{ datas.forVotes }}</div>
    <div>Votes Contre : {{ datas.againstVotes }}</div>
    <div>Abstentions : {{ datas.absVotes }}</div>
    <div>Total des votes : {{ totalVotes }}</div>
  </div>
  <div>
    <button @click="startingVote">Début du vote</button>
  </div>
  <div>
    <button @click="stopVoting">Arrêt du vote</button>
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
      const res = await fetch(`http://localhost:8080/event/:${id}`, {
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
    startingVote() {
      if (!this.interval) {
        this.interval = setInterval(this.getVoteResult, 2000);
      }
    },
    stopVoting() {
      clearInterval(this.interval);
      this.interval = null;
    },
  },
};
</script>
