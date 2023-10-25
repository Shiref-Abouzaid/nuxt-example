<template>
    <v-form class="my-4" validate-on="lazy" @submit.prevent="submit" v-model="valid">
        <v-row class="d-flex justify-center">
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

                <v-text-field :rules="cardNumberRules" counter="16" :maxlength="16" v-model="cardNumber" label="Card Number" >
                    <template #append-inner>
                        <v-img :src="cardIcon" alt="My Icon" width="50" height="50"></v-img>
                    </template>
                </v-text-field>

                <v-row>
                    <v-col>
                        <v-text-field v-model="expiryDate" :rules="expireyDateRules" label="Expiration Date"
                            @keyup="formateExpireDate" :maxlength="5" append-inner-icon="mdi-calendar-blank" />
                    </v-col>

                    <v-col>
                        <v-text-field :rules="cvvRules" v-model="cvv" label="CVV" :maxlength="3" />
                    </v-col>
                </v-row>

                <div class="d-flex justify-end">
                    <v-btn color="primary" variant="elevated" type="submit">Add Credit Card</v-btn>
                </div>

                <div>
                    <v-alert color="error" type="error" closable v-if="errorMessage">{{ errorMessage }}</v-alert>
                </div>
            </v-col>
        </v-row>
    </v-form>
</template>

<script setup lang="ts">
import VisaIcon from '~/assets/svg/icons/icons-visa.svg';
import MasterCardIcon from '~/assets/svg/icons/icons-mastercard.svg';
import unKownCardIcon from '~/assets/svg/icons/icons-unknown-card.svg';
import { validateCard } from '~/api/addCreditCard'

const cardHolder = ref<string>('');
const expiryDate = ref<string>('');
const cardNumber = ref<string>('');
const cvv = ref<string>('');
const valid = ref<boolean>(false);
const errorMessage = ref<string>('');


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

    (value: string) => /^\d{3}$/.test(value) || 'CVV must be a 3-digit number'
]);

const expireyDateRules = ref([
    (value: string) => {
        if (value) return true
        return 'Expire date is required.'
    },

    (value: string) => {
        if (Number(`${value[0]}${value[1]}`) < 13) return true
        return 'invalid month'
    }
])

const cardIcon = computed(() => {
    if (cardNumber.value.startsWith('4')) {
        return VisaIcon;
    } else if (cardNumber.value.startsWith('5') || cardNumber.value.startsWith('2')) {
        return MasterCardIcon;
    } else {
        return unKownCardIcon;
    }

})


async function submit() {
    if (!valid.value) return;

    let cardBody = {
        primaryAccountNumber: cardNumber.value,
        acquirerCountryCode: "682",
        acquiringBin: cardNumber.value.slice(0, 6),
        cardExpiryDate: expiryDate.value,
    }

    try {
        const validationResult = await validateCard(cardBody);
        console.log(validationResult);
    } catch (error: any) {
        console.error("Failed to validate card:", error.message);
    }

}

function formateExpireDate(event: KeyboardEvent) {
    if (expiryDate.value.length == 2 && event.key != 'Backspace') {
        expiryDate.value += "/"
    }

}
</script>