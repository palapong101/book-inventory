// src/main.ts

import { Book, Genre } from './book';
import { Library } from './library';

const myLibrary = new Library();

const newBook1: Book = {
  id: 1,
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  genre: Genre.Fiction,
  publishedYear: 1960,
  status: 'available',
};

const newBook2: Book = {
  id: 2,
  title: "1984",
  author: "George Orwell",
  genre: Genre.Fiction,
  publishedYear: 1949,
  status: 'available',
};

const newBook3: Book = {
  id: 3,
  title: "LaMelo Ball: The Rise of a Star",
  author: "John Doe",
  genre: Genre.NonFiction,
  publishedYear: 2020,
  status: 'available',
};
const newbook4: Book = {
  id: 4,
  title: "Lebronjame the goat",
  author: "John Doe",
  genre: Genre.NonFiction,
  publishedYear: 2020,
  status: 'available',
};
const newBook5: Book = {
  id: 5,
  title: "curry the greatest",
  author: "John Doe",
  genre: Genre.NonFiction,
  publishedYear: 2020,
  status: 'available',
};
const newBook6: Book = {
  id: 6,
  title: "kevendurant the aline",
  author: "John Doe",
  genre: Genre.NonFiction,
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
