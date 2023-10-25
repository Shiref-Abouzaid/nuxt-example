<template>
    <v-row>
      <v-col sm="3" class="d-flex justify-center">
        <v-avatar color="surface-variant" size="200" :image="profileData.image"
          variant="outlined"></v-avatar>
      </v-col>

      <v-col sm="9" class="d-flex flex-column gap-3">
        <h2>
          {{ `${profileData.firstName} ${profileData.lastName}` }} 
        </h2>

        <p>
          <span>Birth of date: </span>
          06/12/1994
        </p>

        <p>
          <span>Age: </span>
          {{ profileData.age }}
        </p>

        <p>
          <span>Gender:</span>
          {{ profileData.gender }}
        </p>

        <v-btn width="200" variant="elevated" color="primary" @click="updateProfile" :loading="updateProfileLoading">
          Update Data
        </v-btn>

      </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { getProfileData } from '~/api/profile';

const updateProfileLoading = ref<boolean>(false);
const profileData = ref<any>({
    age:29,
    gender:'female',
    image:'https://randomuser.me/api/portraits/women/85.jpg',
    firstName:'Sandra',
    lastName:'Adams'
    
});

async function updateProfile() {
    updateProfileLoading.value = true;
    const randomUserId = Math.floor(Math.random() * 30) + 1;
    const response = await getProfileData(String(randomUserId));
    updateProfileLoading.value = false;
    profileData.value = response.value;

}

</script>

<style scoped lang="scss">
h2 {
  color: $gray;
}

p {
  color: $gray-light;

  span {
    color: $primary
  }
}</style>