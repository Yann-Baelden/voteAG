<template>
  <div class="pt-16">
    <h1 class="font-bold text-brand-blue-1 text-5xl text-center">
      {{ datas.name }}
    </h1>
    <div class="flex flex-col pt-14 w-full">
      <button
        name="pour"
        class="block w-4/5 bg-brand-green-1 mx-auto mb-12 py-7 px-10 text-white text-3xl font-bold text-center rounded-full"
        :class="classObject"
        @click="updateVote(datas.id, $event.target.name)"
      >
        Pour
      </button>

      <button
        name="contre"
        class="block w-4/5 bg-red-700 mx-auto mb-12 py-7 px-10 text-white text-3xl font-bold text-center rounded-full"
        :class="classObject"
        @click="updateVote(datas.id, $event.target.name)"
      >
        Contre
      </button>

      <button
        name="abstention"
        class="block w-4/5 bg-brand-blue-2 mx-auto mb-12 py-7 px-10 text-white text-3xl font-bold text-center rounded-full"
        :class="classObject"
        @click="updateVote(datas.id, $event.target.name)"
      >
        Abstention
      </button>
    </div>
    <the-modal v-if="isModalVisible" @close="isModalVisible = false">
      <h1>Votre vote a bien été pris en compte</h1>
    </the-modal>
  </div>
</template>

<script>
import TheModal from "./TheModal.vue";
export default {
  name: "CurrentVote",
  components: {
    TheModal,
  },
  data() {
    return {
      datas: {},
      isModalVisible: false,
    };
  },
  computed: {
    classObject() {
      return {
        "cursor-not-allowed": !this.datas.isOpen,
      };
    },
  },
  created() {
    this.datas = {
      name: this.$route.query.data,
      id: this.$route.query.id,
      isOpen: this.$route.query.isOpen,
    };
  },
  methods: {
    async updateVote(id, name) {
      if (this.datas.isOpen) {
        let currentUser = JSON.parse(localStorage.getItem("user"));
        let nbVoix = currentUser.nbvoix;
        console.log(nbVoix);
        console.log(JSON.stringify({ name, nbVoix }));
        const res = await fetch(`http://localhost:8080/vote/${id}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, nbVoix }),
        });
        const data = await res.json();

        if (data) {
          this.isModalVisible = true;
        } else {
          alert("Oups, un problème a eu lieu !");
        }
      }
      const resGet = await fetch(`http://localhost:8080/event/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const datas = await resGet.json();
      const usefullDatas = JSON.parse(datas.voteResults);
      console.log(usefullDatas);
      this.datas.isOpen = usefullDatas.isopen;
      console.log(this.datas);
    },
  },
};
</script>
