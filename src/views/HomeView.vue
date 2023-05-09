<template>
    <div>
        <canvas ref="chart"></canvas>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default defineComponent({
    mounted() {
        fetch('http://localhost:3000/types')
            .then(response => response.json())
            .then(data => {
                const labels = data.map(type => type.name);
                const counts = data.map(type => type.count);

                const chartData = {
                    labels: labels,
                    datasets: [{
                        label: 'Type Counts',
                        data: counts,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            // Add more colors as needed
                        ],
                        borderWidth: 1,
                    }],
                };

                const chartOptions = {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Type Counts',
                        },
                    },
                };

                const ctx = this.$refs.chart.getContext('2d');
                const typeChart = new Chart(ctx, {
                    type: 'pie',
                    data: chartData,
                    options: chartOptions,
                });
            })
            .catch(error => console.error(error));
    },
});
</script>

<style setup></style>