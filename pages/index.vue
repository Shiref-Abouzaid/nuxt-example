<template>
  <div>
    <div class="page-title">
      <h1>Profile</h1>
    </div>
  </div>

  <v-card class="pa-4">
    <ProfileCard/>
  </v-card>
</template>
<script setup lang="ts">

useHead(() => ({
  title: 'Profile',
}));
</script>
