import { Author } from "./author";
import { Award } from "./award";
import { Genre } from "./genre";

export class Book {
    public id!: number;
    public name = '';
    public series = '';
    public page = 0;
    public releaseDate = new Date();
    public description = '';
    public author = new Author();
    public award = new Award();
    public genre = new Genre();
}

