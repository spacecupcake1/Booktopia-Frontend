import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Award } from '../../data/award';
import { AwardService } from '../../service/award.service';
@Component({
  selector: 'app-awardform',
  templateUrl: './awardform.component.html',
  styleUrl: './awardform.component.css'
})
export class AwardformComponent implements OnInit {

  award = new Award();
  public awardForm: FormGroup;

  constructor(
    private awardService: AwardService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.awardForm = this.formBuilder.group({
      name: new FormControl(''),
      year: new FormControl(0)
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.awardService.getOne(+id).subscribe(award => {
        this.award = award;
        this.awardForm.patchValue(award);
      }, error => {
        console.error('Error fetching award', error);
      });
    } else {
      this.awardForm.patchValue(this.award);
    }
  }

  async back() {
    await this.router.navigate(['awardtable']);
  }

  async save(formData: any) {
    this.award = Object.assign(this.award, formData);

    if (this.award.id) {
      this.awardService.update(this.award).subscribe({
        next: () => {
          this.back();
        },
        error: (err) => {
          console.error('Error updating award', err);
        }
      });
    } else {
      this.awardService.save(this.award).subscribe({
        next: () => {
          this.back();
        },
        error: (err) => {
          console.error('Error saving award', err);
        }
      });
    }
  }

}
