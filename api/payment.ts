
//this API data is sensitive information so we prefer to send this data encrypted!

// this url for this external service , we can set our default url globaly in nuxt.config.ts

export const validateCard = async (number: any) => {
    const response = await useFetch(`https://lookup.binlist.net/${number}`, {
        method: 'GET'
    });


    if (response.error && response.error.value) {
        throw new Error(response.error.value.message || 'Error validating the card.');
    }


    return response.data;
}
