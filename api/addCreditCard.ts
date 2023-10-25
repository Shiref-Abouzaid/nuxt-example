

//sure this API data is sensitive information so we prefer to send this data encrypted!

// this url for this external service , we can set our default url globaly in nuxt.config.ts

export const validateCard = async (body: any) => {
    const response = await useFetch(`https://sandbox.api.visa.com/pav/v1/cardvalidation/`, {
        method: 'POST',
        body
    });

    // Check if the response is not successful
    if (!response.ok) {
        // If the response is a JSON, we can extract the message (this depends on the API's error structure)
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error validating the card.');
    }

    return await response.json();
}
