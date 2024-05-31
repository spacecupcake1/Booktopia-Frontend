import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl} from '@angular/forms';
import { Book } from '../../data/book';
import { BookService } from '../../service/book.service';
import { Author } from '../../data/author';
import { AuthorService } from '../../service/author.service';
import { Award } from '../../data/award';
import { Genre } from '../../data/genre';
import { AwardService } from '../../service/award.service';
import { GenreService } from '../../service/genre.service';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrl: './bookform.component.css'
})
export class BookformComponent implements OnInit {

  book = new Book();
  authors: Author[] = [];
  awards: Award[] = [];
  genres: Genre[] = [];
  public bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private awardService: AwardService,
    private genreService:  GenreService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bookForm = this.formBuilder.group({
      name: new UntypedFormControl(''),
      series: new UntypedFormControl(''),
      page: new UntypedFormControl(0),
      releaseDate: new UntypedFormControl(''),
      description: new UntypedFormControl(''),
      authorId: new UntypedFormControl(''),
      awardId: new UntypedFormControl(''),
      genreId: new UntypedFormControl('')
    });
  }

  ngOnInit(): void {

    this.authorService.getList().subscribe(obj => {
      this.authors = obj;
    });
    this.awardService.getList().subscribe(obj => {
      this.awards = obj;
    });
    this.genreService.getList().subscribe(obj => {
      this.genres = obj;
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.bookService.getOne(+id).subscribe(book => {
        this.book = book;
        //this.bookForm.patchValue(book);
        this.bookForm = this.formBuilder.group(book);
        this.bookForm.addControl('authorId', new UntypedFormControl(book.author.id));
      }, error => {
        console.error('Error fetching book', error);
      });
    } else {
      //this.bookForm.patchValue(this.book);
      //this.bookForm.addControl('authorId', new UntypedFormControl(this.book.author.id));
    }
  }

  async back() {
    await this.router.navigate(['booktable']);
  }

  async save(formData: any) {
    this.book = Object.assign(formData);

    if (this.book.id) {
      this.bookService.update(this.book).subscribe({
        next: () => {
          this.back();
        },
        error: (err) => {
          console.error('Error updating book', err);
        }
      });
    } else {
      this.bookService.save(this.book).subscribe({
        next: () => {
          this.back();
        },
        error: (err) => {
          console.error('Error saving book', err);
        }
      });
    }
  }

}
