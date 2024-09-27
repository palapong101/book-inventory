"use strict";
// src/book.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genre = void 0;
var Genre;
(function (Genre) {
    Genre[Genre["Fiction"] = 0] = "Fiction";
    Genre[Genre["NonFiction"] = 1] = "NonFiction";
    Genre[Genre["Science"] = 2] = "Science";
    Genre[Genre["History"] = 3] = "History";
})(Genre || (exports.Genre = Genre = {}));
