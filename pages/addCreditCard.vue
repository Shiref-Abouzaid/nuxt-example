<template>
    <div>
        <div class="page-title">
            <h1>Add Credit Card</h1>
        </div>

        <v-card>
            <AddCreditCardForm/>
        </v-card>
    </div>
</template>

<script setup lang="ts">
useHead(() => ({
  title: 'Add Credit Card',
}));
</script>

