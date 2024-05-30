import { Component, OnInit } from '@angular/core';
import { Author } from '../../data/author';
import { AuthorService } from '../../service/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-authorform',
  templateUrl: './authorform.component.html',
  styleUrl: './authorform.component.css'
})
export class AuthorformComponent implements OnInit{

  author = new Author();
  public authorForm = new UntypedFormGroup({
    firstname: new UntypedFormControl(''),
    lastname: new UntypedFormControl(''),
    birthdate: new UntypedFormControl(0),
  });

  constructor(private authorService: AuthorService, private formBuilder: UntypedFormBuilder, private router: Router, private route: ActivatedRoute,) {
   }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== null) {
      const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string);

      this.authorService.getOne(id).subscribe(authors => {
        this.author = authors;
        this.authorForm = this.formBuilder.group(authors);
      });
    } else {
      this.authorForm = this.formBuilder.group(this.author);
    }
  }

  async back() {
    await this.router.navigate(['author']);
  }

  async save(formData: any) {
    this.author = Object.assign(formData);

    if (this.author.id) {
      this.authorService.update(this.author).subscribe({
        next: () => {
          this.back();
        }
      });
    } else {
      this.authorService.save(this.author).subscribe({
        next: () => {
          this.back();
        }
      });
    }
  }


}
