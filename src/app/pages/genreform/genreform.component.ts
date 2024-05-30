import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Genre } from '../../data/genre';
import { GenreService } from '../../service/genre.service';

@Component({
  selector: 'app-genreform',
  templateUrl: './genreform.component.html',
  styleUrl: './genreform.component.css'
})
export class GenreformComponent implements OnInit {

  genre = new Genre();
  public genreForm: FormGroup;

  constructor(
    private genreService: GenreService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.genreForm = this.formBuilder.group({
      name: new FormControl('')
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.genreService.getOne(+id).subscribe(genre => {
        this.genre = genre;
        this.genreForm.patchValue(genre);
      }, error => {
        console.error('Error fetching genre', error);
      });
    } else {
      this.genreForm.patchValue(this.genre);
    }
  }

  async back() {
    await this.router.navigate(['genretable']);
  }

  async save(formData: any) {
    this.genre = Object.assign(this.genre, formData);

    if (this.genre.id) {
      this.genreService.update(this.genre).subscribe({
        next: () => {
          this.back();
        },
        error: (err) => {
          console.error('Error updating genre', err);
        }
      });
    } else {
      this.genreService.save(this.genre).subscribe({
        next: () => {
          this.back();
        },
        error: (err) => {
          console.error('Error saving genre', err);
        }
      });
    }
  }

}
