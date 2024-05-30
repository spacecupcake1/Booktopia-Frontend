import { Component, OnInit } from '@angular/core';
import { Author } from '../../data/author';
import { AuthorService } from '../../service/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-authorform',
  templateUrl: './authorform.component.html',
  styleUrl: './authorform.component.css'
})
export class AuthorformComponent implements OnInit {

  author = new Author();
  public authorForm: FormGroup;

  constructor(
    private authorService: AuthorService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.authorForm = this.formBuilder.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      birthdate: new FormControl(''),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.authorService.getOne(+id).subscribe(author => {
        this.author = author;
        this.authorForm.patchValue(author);
      }, error => {
        console.error('Error fetching author', error);
      });
    } else {
      this.authorForm.patchValue(this.author);
    }
  }

  async back() {
    await this.router.navigate(['authortable']);
  }

  async save(formData: any) {
    this.author = Object.assign(this.author, formData);

    if (this.author.id) {
      this.authorService.update(this.author).subscribe({
        next: () => {
          this.back();
        },
        error: (err) => {
          console.error('Error updating author', err);
        }
      });
    } else {
      this.authorService.save(this.author).subscribe({
        next: () => {
          this.back();
        },
        error: (err) => {
          console.error('Error saving author', err);
        }
      });
    }
  }

}