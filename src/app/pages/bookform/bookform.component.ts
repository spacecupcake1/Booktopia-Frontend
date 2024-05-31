import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Book } from '../../data/book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrl: './bookform.component.css'
})
export class BookformComponent implements OnInit {

  book = new Book();
  bookForm!: FormGroup;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getOne(+id).subscribe(
        book => {
          this.book = book;
          this.initForm();
        },
        error => console.error('Error fetching book', error)
      );
    } else {
      this.initForm();
    }
  }

  initForm(): void {
    this.bookForm = this.formBuilder.group({
      name: new FormControl(this.book.name),
      series: new FormControl(this.book.series),
      page: new FormControl(this.book.page),
      releaseDate: new FormControl(this.book.releaseDate),
      description: new FormControl(this.book.description),
      author: this.formBuilder.group({
        firstName: new FormControl(this.book.author.firstname),
        lastName: new FormControl(this.book.author.lastname),
        birthdate: new FormControl(this.book.author.birthdate),
      }),
      award: this.formBuilder.group({
        name: new FormControl(this.book.award.name),
        year: new FormControl(this.book.award.year)
      }),
      genre: this.formBuilder.group({
        name: new FormControl(this.book.genre.name)
      })
    });
  }

  async back() {
    await this.router.navigate(['booktable']);
  }

  async save(formData: any) {
    this.book = Object.assign(this.book, formData);

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