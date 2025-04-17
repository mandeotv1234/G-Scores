<template>
  <div class="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow space-y-6">
    <h1 class="text-2xl font-bold text-gray-800 text-center">Tra cứu điểm thi</h1>

    <!-- Input -->
    <div class="flex items-center space-x-2">
      <input
        v-model="regNumber"
        type="text"
        class="flex-1 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-xl px-4 py-2"
        placeholder="Nhập số báo danh"
      />
      <button
        @click="search"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition"
      >
        Tìm kiếm
      </button>
    </div>

    <!-- Result -->
    <div v-if="score" class="mt-4 space-y-4">
      <div class="bg-gray-50 p-4 rounded-xl shadow-sm">
        <h2 class="text-xl font-semibold text-blue-700 mb-2">Mã Ngoại Ngữ: {{ score.maNgoaiNgu }}</h2>
        <div class="grid grid-cols-2 gap-4 text-gray-700">
          <div v-for="(value, key) in subjectLabels" :key="key" class="flex justify-between">
            <span>{{ value }}:</span>
            <span class="font-medium">{{ (score as Record<string, any>)[key] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import api from '@/services/api';
import type { StudentScore } from '@/types/StudentScore';

const regNumber = ref('');
const score = ref<StudentScore | null>(null);

const subjectLabels: Record<string, string> = {
  toan: 'Toán',
  nguVan: 'Ngữ Văn',
  ngoaiNgu: 'Ngoại Ngữ',
  vatLi: 'Vật Lí',
  hoaHoc: 'Hóa Học',
  sinhHoc: 'Sinh Học',
  lichSu: 'Lịch Sử',
  diaLi: 'Địa Lí',
  gdcd: 'GDCD',
};

async function search() {
  try {
    const res = await api.get(`/scores/${regNumber.value}`);
    score.value = res.data;
  } catch (err) {
    score.value = null;
    alert("Không tìm thấy học sinh!");
  }
}
</script>
