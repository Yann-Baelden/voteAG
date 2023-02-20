<template>
  <div class="mt-32">
    <Bar :data="data" :options="options" />
  </div>
  <div>
    {{ voteResult.nom }}
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
      voteResult: null,
      data: {
        labels: ["Pour", "Contre", "Abstentions"],
        datasets: [
          {
            label: "Votes",
            data: [52, 10, 16],
            backgroundColor: "rgb(0, 159, 227)",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "left",
          },
          title: {
            display: true,
            text: this.voteResult.nom,
            padding: {
              top: 10,
              bottom: 30,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
      loading: false,
    };
  },

  async created() {
    //this.loading = true;
    console.log(this.$route.params.id);
    const res = await fetch(
      `http://localhost:8080/event/:${this.$route.params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("res : ", await res);
    const datas = await res.json();
    this.voteResult = JSON.parse(datas.voteResults);
    console.log("datas : ", datas);
    console.log("datas.voteResults parsé : ", JSON.parse(datas.voteResults));
    console.log("voteResult : ", this.voteResult);
  },
};
</script>
