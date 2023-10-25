<template>
  <div>
    <div class="page-title">
      <h1>Profile</h1>
    </div>
  </div>

  <v-card class="pa-4">
    <v-row>
      <v-col sm="3" class="d-flex justify-center">
        <v-avatar color="surface-variant" size="200" image="https://randomuser.me/api/portraits/women/85.jpg" variant="outlined"></v-avatar>
      </v-col>

      <v-col sm="9" class="d-flex flex-column gap-3">
        <h2>
          Sandra Adams
        </h2>

        <p>
          <span>Birth of date: </span>
          06/12/1994
        </p>

        <p>
          <span>Age: </span>
          29
        </p>
        
        <p>
          <span>Gender:</span>          
          Female
        </p>

        <v-btn width="200" variant="elevated" color="primary">
          Update Data
        </v-btn>

      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss">
h2 {
  color: $gray;
}
p {
  color:$gray-light;
  span {
    color:$primary
  }
}
</style>