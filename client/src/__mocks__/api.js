let booksId = 3;

let books = [
    {
        id: 1,
        title: 'Harry Potter',
        author: 'J. K. Rowling',
        description: 'Story about wizards and witches',
    },
    {
        id: 2,
        title: 'Unknown Soldier',
        author: 'Väinö Linna',
        description: 'Story about the Winter War',
    },
];

export const GetBooksApiCall = async () => books;

export const BookApiCall = async (method, data) => {
    if (method === 'POST') {
        if (data.title.length > 0) {
            const bookToAdd = { ...data, id: booksId };
            booksId += 1;
            books.push(bookToAdd);
            return bookToAdd;
        }
    } else if (method === 'PUT') {
        const foundBook = books.find(
            (currentBook) => currentBook.id === data.id
        );
        if (foundBook && data.title.length > 0) {
            books = books.filter((currentBook) => currentBook.id !== data.id);
            books.push(data);
        }
    } else if (method === 'DELETE') {
        const foundBook = books.find(
            (currentBook) => currentBook.id === data.id
        );
        if (foundBook) {
            books = books.filter((currentBook) => currentBook.id !== data.id);
        }
    }

    return true;
};
