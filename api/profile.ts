//based on out backend API endpoint and we can create type for incoming user data and map for this

export const getProfileData = async (id: string) => {
    const response = await useFetch(`https://dummyjson.com/users/${id}`, {
        method: 'GET'
    });

    if (response.error && response.error.value) {
        throw new Error(response.error.value.message || 'Error getting the profile data.');
    }

    return  response.data;
}