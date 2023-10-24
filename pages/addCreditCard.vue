<template>
    <div>
        <div class="page-title">
            <h1>Add Credit Card</h1>
        </div>

        <v-card>
            <v-form class="my-4" validate-on="lazy" @submit.prevent="submit"  v-model="valid">
                <v-row class="d-flex justify-center" >
                    <v-col sm="6" class="d-flex flex-column gap-3">
                        <v-text-field :rules="cardHolderRules" v-model="cardHolder" label="Card Holder">
                            <template #append-inner>
                                <div>
                                    <v-icon color="primary">mdi-help-circle</v-icon>
                                    <v-tooltip activator="parent" location="top">
                                        Card Holder Name
                                    </v-tooltip>
                                </div>
                            </template>
                        </v-text-field>

                        <v-text-field :rules="cardNumberRules"  v-model="cardNumber"  label="Card Number" type="number">
                            <template #append-inner>
                                <v-img :src="cardIcon" alt="My Icon" width="50" height="50"></v-img>
                            </template>
                        </v-text-field>

                        <v-row>
                            <v-col>
                                <v-text-field v-model="expiryDate" v-expire-date label="Expiration Date"
                                    append-inner-icon="mdi-calendar-blank" />
                            </v-col>

                            <v-col>
                                <v-text-field :rules="cvvRules" v-model="cvv" type="number" label="CVV" maxlength="3" />
                            </v-col>
                        </v-row>

                        <div class="d-flex justify-end">
                            <v-btn color="primary" variant="elevated" type="submit">Add Credit Card</v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import VisaIcon from '~/assets/svg/icons/icons-visa.svg';
import MasterCardIcon from '~/assets/svg/icons/icons-mastercard.svg';
import unKownCardIcon from '~/assets/svg/icons/icons-unknown-card.svg';

const cardHolder = ref<string>('');
const expiryDate = ref<string>('');
const cardNumber = ref<string>('');
const cvv = ref<string>('');
const valid = ref<boolean>(false);

const cardHolderRules = ref([
    (value: string) => {
        if (value) return true
        return 'Card Holder is required.'
    },
    
    (value: string) => {
        if (value?.length < 22) return true
        return 'Name must be less than 22 characters.'
    },
]);

const cardNumberRules = ref([
    (value: string) => {
        if (value) return true
        return 'Card Number is required.'
    },
    
    (value: string) => {
        if (value?.length == 16) return true
        return 'Card Number must be 16 characters.'
    },
]);

const cvvRules = ref([
    (value: string) => {
        if (value) return true
        return 'CVV is required.'
    },
    
    (value: string) => {
        if (value?.length == 3) return true
        return 'CVV must be 3 characters.'
    },
]);
const cardIcon = computed(() => {
    if (cardNumber.value.startsWith('4')) {
        return VisaIcon;
    } else if (cardNumber.value.startsWith('5') || cardNumber.value.startsWith('2')) {
        return MasterCardIcon;
    } else {
        return unKownCardIcon;
    }

})


function submit() {
    if(!valid.value) return;
    alert('submit')
}
</script>
