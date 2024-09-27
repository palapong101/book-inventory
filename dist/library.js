"use strict";
// src/library.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.inventory = [];
    }
    // ฟังก์ชันสำหรับเพิ่มหนังสือ
    add(book) {
        this.inventory.push(book);
        console.log(`Added book:`, book);
    }
    // ฟังก์ชันสำหรับแสดงรายการหนังสือทั้งหมด
    list() {
        if (this.inventory.length === 0) {
            console.log("No books in inventory.");
            return;
        }
        console.log("Books in Inventory:");
        for (const book of this.inventory) {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Published Year: ${book.publishedYear}, Status: ${book.status}`);
        }
    }
    // ฟังก์ชันสำหรับค้นหาหนังสือตามคุณสมบัติ
    search(key, value) {
        return this.inventory.filter(book => book[key] === value);
    }
    // ฟังก์ชันสำหรับอัปเดตข้อมูลหนังสือ
    update(id, updates) {
        const bookIndex = this.inventory.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            console.log(`Book with ID ${id} not found.`);
            return;
        }
        this.inventory[bookIndex] = Object.assign(Object.assign({}, this.inventory[bookIndex]), updates);
        console.log(`Updated book with ID ${id}:`, this.inventory[bookIndex]);
    }
    // ฟังก์ชันสำหรับลบหนังสือโดย ID
    delete(id) {
        const bookIndex = this.inventory.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            console.log(`Book with ID ${id} not found.`);
            return;
        }
        this.inventory.splice(bookIndex, 1);
        console.log(`Deleted book with ID ${id}.`);
    }
    // ฟังก์ชันสำหรับอัปเดตสถานะหนังสือ
    updateStatus(id, status) {
        const bookIndex = this.inventory.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            console.log(`Book with ID ${id} not found.`);
            return;
        }
        this.inventory[bookIndex].status = status; // อัปเดตสถานะ
        console.log(`Updated status for book with ID ${id}:`, this.inventory[bookIndex]);
    }
}
exports.Library = Library;
