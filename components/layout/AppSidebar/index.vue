<template>
    <div>
        <v-layout>
            <v-navigation-drawer :rail="rail" >
                <v-list class="d-flex  flex-column">
                    <v-btn variant="text" class="ms-1" icon="mdi-menu"  @click.stop="rail = !rail"></v-btn>
                    <v-list-item  prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams"
                        subtitle="sandra_a88@gmailcom"></v-list-item>



                </v-list>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-account" active-color="#4DBB7E" to="/">Profile</v-list-item>
                    <v-list-item prepend-icon="mdi-credit-card" active-color="#4DBB7E" to="/addCreditCard">Add Credit Card</v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: 250px"></v-main>
        </v-layout>
    </div>
</template>
<script setup lang="ts">
const rail = ref<boolean>(true);

</script>