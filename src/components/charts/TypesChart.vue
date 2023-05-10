<template>
   
 <canvas ref="chart"></canvas>
  
  
</template>

<script>
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  data() {
    return {
      chart: null,
      chartData: {
        labels: [],
        datasets: [{
          label: 'Card Counts',
          data: [],
          backgroundColor: [
            'rgba(59, 130, 246, 1)',
            'rgba(107, 114, 128, 1)',
             'rgba(17, 24, 39, 1)',
             'rgba(239, 68, 68, 1)',
             'rgba(55, 65, 81, 1)',
            // Add more colors as needed
          ],
          borderWidth: 1,
        }],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Card Counts by Type',
          },
        },
      },
    };
  },
  mounted() {
    fetch('http://localhost:3000/cards')
      .then(response => response.json())
      .then(data => {
        const countsByType = data.reduce((accumulator, card) => {
          const typeName = card.type.name;
          if (!accumulator[typeName]) {
            accumulator[typeName] = 0;
          }
          accumulator[typeName]++;
          return accumulator;
        }, {});

        const labels = Object.keys(countsByType);
        const counts = Object.values(countsByType);

        this.chartData.labels = labels;
        this.chartData.datasets[0].data = counts;

        const ctx = this.$refs.chart.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'pie',
          data: this.chartData,
          options: this.chartOptions,
        });
      })
      .catch(error => console.error(error));
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
};
</script>

<style scoped></style>