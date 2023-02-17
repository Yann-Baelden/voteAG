<template>
  <div>
    <Bar :data="data" :options="options" class="pt-40" />
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
  name: "ChartJS",
  components: { Bar },

  data() {
    return {
      data: {
        labels: ["Pour", "Contre", "Abstentions"],
        datasets: [
          {
            label: "My First Dataset",
            data: [55, 2, 10],
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
        plugins: {
          Legend: {
            position: "top",
          },
        },
      },
      loading: false,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.getEventById();
      },
      { immediate: true }
    );
  },
  methods: {
    async getEventById() {
      this.loading = true;
      const res = await fetch(
        `http://localhost:8080/event/:${this.$route.params.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const event = await res.json();
      console.log(" retour event : ", event);
    },
  },
};
</script>
