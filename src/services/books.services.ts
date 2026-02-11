import { Book } from "../types/books.insterface";
const book:Book[]=[{
    id:1,
    title:"clean code",
    author:"Robert C. Martin",
    status:"available",
    pages:656
},
{
    id:2,
    title:"Software Archtecture",
    author:"Kyle Sompson",
    status:"borrowed"
}];

export function getBooks():Book[]{
    return book;
}
export function getBookById(id:number):Book|undefined{
    return book.find((bk=>bk.id===id));
};

export function borrowBook(id:number):Book| string{
    const bk=book.find(b=>b.id===id);

    if(!bk)return "book is not availble";
    if(bk.status==="borrowed")return "Book is Already borrowned";
    bk.status="borrowed";
    return bk;
    
}
export function addBook(bk:Book):Book{
    book.push(bk);
    return bk;
}
export function deleteBook(id: number): Book | string {
    const index = book.findIndex(b => b.id === id);

    if (index === -1) return "this book is not found";

    const deletedbk = book[index] as Book;
    book.splice(index, 1);

    return deletedbk;

    
}
