const apiUrl = 'http://localhost:9000/books';

export const GetBooksApiCall = async () =>
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());

export const BookApiCall = async (method, data) =>
    fetch(apiUrl, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());
