<template>
  <div class="flex items-center w-full pt-32">
    <h1
      class="block text-5xl font-black text-brand-green-1 text-center mx-auto"
    >
      Résultats des votes
    </h1>
  </div>
  <div></div>

  <div class="flex flex-col items-center w-full">
    <ul v-for="vote in votes" :key="vote.event_id" class="list-none pt-6">
      <li
        class="block w-4/5 bg-brand-blue-1 rounded-2xl mx-auto mb-5 py-7 px-10 text-white text-2xl font-bold text-center"
      >
        {{ vote.nom }}
      </li>
      <Bar :data="data" :options="options" />
    </ul>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default {
  name: "VotesResults",
  components: {
    Bar,
  },
  data() {
    return {
      votes: {},
      data: {
        labels: ["Pour", "Contre", "Abstention"],
        datasets: [
          {
            barThickness: "flex",
            label: "Résultats",
            data: [42, 0, 6],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
  async mounted() {
    const res = await fetch("http://localhost:8080/votes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resDatas = await res.json();
    this.votes = resDatas.event;
  },
};
</script>
