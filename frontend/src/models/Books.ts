import { Author } from "./Author";

export interface Book {
    id: number;
    title: string;
    releaseDate: string;
    description: string;
    pages: number;
    createdAt: string;
    updatedAt: string;
    author: Author
}

export interface BookDTO {
    id: number;
    title: string;
    releaseDate: string;
    description: string;
    pages: number;
    createdAt: string;
    updatedAt: string;
    author: string
}

export interface BookFormDTO {
    id: number;
    title: string;
    releaseDate: string;
    description: string;
    pages: number;
    createdAt: string;
    updatedAt: string;
    author?: number
}