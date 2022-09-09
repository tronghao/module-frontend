<template>
  <div
    class="
      tw-relative tw-mt-[6.2rem] tw-flex tw-justify-center tw-px-[2rem] tw-font-hanSansJpMedium tw-text-[1.9rem] tw-text-[#23B6BC]
      md:tw-mx-auto md:tw-mt-[4.8rem] md:tw-max-w-[37.5rem] md:tw-text-[1.4rem]
    "
  >
    <div class="title-1 tw-absolute tw-top-[-3.1rem] tw-left-[50%] tw-translate-x-[-50%] md:tw-top-[-2.5rem]">メンテンス性</div>
    <div class="title-2 tw-absolute tw-top-[4.5rem] tw-right-[2.8rem] md:tw-top-[3rem] md:tw-right-[1.6rem]">PCスペック</div>
    <div class="title-3 tw-absolute tw-bottom-[4.7rem] tw-right-[2.8rem] md:tw-bottom-[3.3rem] md:tw-right-[1.6rem]">ロマン</div>
    <div class="title-4 tw-absolute tw-bottom-[-3.2rem] tw-left-[50%] tw-translate-x-[-50%] md:tw-bottom-[-2.2rem]">ケーブル整理</div>
    <div class="title-5 tw-absolute tw-bottom-[4.7rem] tw-left-[2.4rem] md:tw-bottom-[3.3rem] md:tw-left-[1.6rem]">作業領域</div>
    <div class="title-6 tw-absolute tw-top-[4.5rem] tw-left-[2.4rem] md:tw-left-[1.6rem] md:tw-top-[3rem]">収納力</div>
    <canvas
      id="radar-chart"
      class="tw-h-[40rem] tw-w-[40rem] 2lg:tw-h-[25rem] 2lg:tw-w-[25rem] md:tw-h-[28.348rem] md:tw-w-[28.498rem]"
      width="400"
      height="400"
    ></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'RadarChart',
  props: {
    labels: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      planetChartData: {
        type: 'radar',
        responsive: true,
        maintainAspectRatio: false,
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: 'rgba(35, 182, 188, 0.5)',
              borderColor: '#23B6BC',
              borderWidth: 2,
              data: this.data,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          scale: {
            angleLines: {
              color: '#707070',
            },
            gridLines: {
              color: '#707070',
            },
            pointLabels: {
              display: false,
              fontColor: '#23B6BC',
              fontFamily: 'Source Han Sans JP Medium',
              fontSize: 19,
            },
            ticks: {
              display: false,
              color: 'transparent',
              backdropColor: 'transparent',
              beginAtZero: false,
              min: 0,
              max: 5,
              stepSize: 1,
            },
          },
          legend: {
            display: false,
          },
          tooltips: {
            enabled: false,
          },
        },
      },
    };
  },
  mounted() {
    const ctx = document.getElementById('radar-chart');
    new Chart(ctx, this.planetChartData);
  },
};
</script>
<style lang="scss">
@import '@fe/styles/components/radar-chart';
</style>
