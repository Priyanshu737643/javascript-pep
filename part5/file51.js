//! fetching API

const url = "https://jsonplaceholder.typicode.com/users";

async function fetchData() {
    const response = await fetch(url)  //? this will always return string
    const result = await response.json()  //? converting to json format
    //* both fetch(url) and response.json() return promise
    console.log(result);
}

fetchData();


