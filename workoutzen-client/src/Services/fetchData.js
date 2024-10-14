// const fetchData = async(url,options) => {
//     const response = await fetch(url,options);
//     const data = await response.json();
//     return data;
// }
// export default fetchData;

const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);
        if (response.status === 429) {
            throw new Error('Too Many Requests');
        }
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; // Re-throw the error to handle it in the calling function
    }
}

export default fetchData;