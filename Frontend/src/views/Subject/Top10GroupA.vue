<template>
    <div class="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Top 10 Thí Sinh Khối A (Toán - Lý - Hóa)</h1>
  
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm text-left text-gray-700 border">
          <thead class="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th class="px-4 py-3">#</th>
              <th class="px-4 py-3">Số báo danh</th>
              <th class="px-4 py-3">Toán</th>
              <th class="px-4 py-3">Vật Lí</th>
              <th class="px-4 py-3">Hóa Học</th>
                <th class="px-4 py-3">Mã Ngoại Ngữ</th>
              <th class="px-4 py-3 text-right">Tổng</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(student, index) in top10"
              :key="student.registrationNumber"
              class="border-b hover:bg-gray-50 transition"
            >
              <td class="px-4 py-3 font-medium text-gray-800">{{ index + 1 }}</td>
              <td class="px-4 py-3">{{ student.registrationNumber }}</td>
              <td class="px-4 py-3">{{ student.toan }}</td>
              <td class="px-4 py-3">{{ student.vatLi }}</td>
              <td class="px-4 py-3">{{ student.hoaHoc }}</td>
              <td class="px-4 py-3">{{ student.maNgoaiNgu }}</td>
              <td class="px-4 py-3 text-right font-semibold text-blue-600">
                {{ getTotal(student).toFixed(2) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import api from '@/services/api';
  import type { StudentScore } from '@/types/StudentScore';
  
  const top10 = ref<StudentScore[]>([]);
  
  onMounted(async () => {
    const res = await api.get('/scores/top10/groupA');
    top10.value = res.data;
  });
  
  function getTotal(student: StudentScore): number {
    return (student.toan ?? 0) + (student.vatLi ?? 0) + (student.hoaHoc ?? 0);
  }
  </script>
  