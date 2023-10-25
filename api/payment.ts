
//this API data is sensitive information so we prefer to send this data encrypted!

// this url for this external service , we can set our default url globaly in nuxt.config.ts

export const validateCard = async (body: any) => {
    const response = await useFetch(`https://sandbox.api.visa.com/pav/v1/cardvalidation/`, {
        method: 'POST',
        body
    });


    if (response.error && response.error.value) {
        throw new Error(response.error.value.message || 'Error validating the card.');
    }


    return response.data;

    // here we got CORS Error because we are using sandbox api and we are not using the real api
}
