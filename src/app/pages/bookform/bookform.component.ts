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
  public bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bookForm = this.formBuilder.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      birthdate: new FormControl(''),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.bookService.getOne(+id).subscribe(book => {
        this.book = book;
        this.bookForm.patchValue(book);
      }, error => {
        console.error('Error fetching book', error);
      });
    } else {
      this.bookForm.patchValue(this.book);
    }
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
