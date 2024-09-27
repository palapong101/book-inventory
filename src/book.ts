// src/book.ts

export enum Genre {
    Fiction,
    NonFiction,
    Science,
    History,
  }
  
  export interface Book {
    id: number;
    title: string;
    author: string;
    genre: Genre;
    publishedYear: number;
    status: 'available' | 'checked out'; // ใช้ type union
  }
  