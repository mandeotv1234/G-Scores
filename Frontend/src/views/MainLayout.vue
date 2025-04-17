<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="bg-blue-600 text-white p-4 flex items-center justify-center">
      <h1 class="text-2xl font-bold">G-Scores</h1>
    </header>

    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="w-64 bg-gradient-to-b from-yellow-400 to-green-400 p-4 text-black">
        <nav class="flex flex-col space-y-4">
          <button @click="activePage = 'Dashboard'" class="text-left hover:font-bold">Dashboard</button>
          <button @click="activePage = 'SearchStudent'" class="text-left hover:font-bold">Search Scores</button>
          <button @click="activePage = 'SubjectReport'" class="text-left hover:font-bold">Reports</button>
          <button @click="activePage = 'Settings'" class="text-left hover:font-bold">Settings</button>
        </nav>
      </aside>

      <!-- Main content -->
      <main class="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <component :is="currentComponent" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Import các trang
import SearchStudent from '../views/Subject/SearchStudent.vue'
import SubjectReport from '../views/Subject/SubjectReport.vue'
import Top10GroupA from '../views/Subject/Top10GroupA.vue'

// Điều hướng
const activePage = ref('SearchStudent')

const currentComponent = computed(() => {
  switch (activePage.value) {
    case 'SearchStudent':
      return SearchStudent
    case 'SubjectReport':
      return SubjectReport
    case 'Dashboard':
      return Top10GroupA
    case 'Settings':
      return {
        template: `<div><h2 class="text-2xl font-bold">Settings Page</h2><p>Settings coming soon...</p></div>`
      }
    default:
      return {
        template: `<div><h2>404 - Page not found</h2></div>`
      }
  }
})
</script>
