"use strict";
// src/main.ts
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./book");
const library_1 = require("./library");
const myLibrary = new library_1.Library();
const newBook1 = {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: book_1.Genre.Fiction,
    publishedYear: 1960,
    status: 'available',
};
const newBook2 = {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: book_1.Genre.Fiction,
    publishedYear: 1949,
    status: 'available',
};
const newBook3 = {
    id: 3,
    title: "LaMelo Ball: The Rise of a Star",
    author: "John Doe",
    genre: book_1.Genre.NonFiction,
    publishedYear: 2020,
    status: 'available',
};
const newbook4 = {
    id: 4,
    title: "Lebronjame the goat",
    author: "John Doe",
    genre: book_1.Genre.NonFiction,
    publishedYear: 2020,
    status: 'available',
};
const newBook5 = {
    id: 5,
    title: "curry the greatest",
    author: "John Doe",
    genre: book_1.Genre.NonFiction,
    publishedYear: 2020,
    status: 'available',
};
const newBook6 = {
    id: 6,
    title: "kevendurant the aline",
    author: "John Doe",
    genre: book_1.Genre.NonFiction,
    publishedYear: 2020,
    status: 'available',
};
// เพิ่มหนังสือไปยังคลัง
myLibrary.add(newBook1);
myLibrary.add(newBook2);
myLibrary.add(newBook3);
myLibrary.add(newbook4);
myLibrary.add(newBook5);
myLibrary.add(newBook6);
// แสดงรายการหนังสือทั้งหมด
myLibrary.list();
// ค้นหาหนังสือ
const searchedBooksByTitle = myLibrary.search('title', "1984");
console.log("Searched Books by Title:", searchedBooksByTitle);
// อัปเดตสถานะหนังสือ
myLibrary.updateStatus(1, 'checked out');
// ลบหนังสือ
myLibrary.delete(3);
myLibrary.delete(6);
myLibrary.delete(1);
// แสดงรายการหนังสือทั้งหมดหลังจากการดำเนินการ
myLibrary.list();
