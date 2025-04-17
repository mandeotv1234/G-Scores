<template>
  <div class="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow">
    <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Thống kê điểm theo môn thi tốt nghiệp</h2>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, type ChartOptions } from 'chart.js';
import { ref, onMounted } from 'vue';
import api from '@/services/api';

interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string;
}

interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const chartData = ref<ChartData>({
  labels: [],
  datasets: [],
});

// ✅ Định nghĩa options chuẩn type
const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top', // không phải string tự do nữa
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: { stacked: true },
    y: { stacked: true },
  },
};

onMounted(async () => {
  const res = await api.get('/scores/report/subject-distribution');
  const raw = res.data;

  const subjectNames: Record<string, string> = {
    toan: "Toán",
    nguVan: "Ngữ văn",
    ngoaiNgu: "Tiếng Anh",
    vatLi: "Vật lý",
    hoaHoc: "Hóa học",
    sinhHoc: "Sinh học",
    lichSu: "Lịch sử",
    diaLi: "Địa lý",
    gdcd: "Giáo dục công dân",
  };

  const ranges = [">=8", "6-8", "4-6", "<4"];
  const colors: Record<string, string> = {
    ">=8": "#3b82f6",
    "6-8": "#10b981",
    "4-6": "#f59e0b",
    "<4": "#ef4444",
  };

  const subjectKeys = Object.keys(raw);
  const labels = subjectKeys.map(key => subjectNames[key] || key);

  chartData.value = {
    labels,
    datasets: ranges.map((range) => ({
      label: range,
      data: subjectKeys.map(subject => raw[subject]?.[range] ?? 0),
      backgroundColor: colors[range],
    })),
  };
});
</script>
