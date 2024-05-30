import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Award } from '../../data/award';
import { AwardService } from '../../service/award.service';

@Component({
  selector: 'app-awardtable',
  templateUrl: './awardtable.component.html',
  styleUrl: './awardtable.component.css'
})
export class AwardtableComponent implements OnInit, AfterViewInit {
  awarddata = new MatTableDataSource<Award>();
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private awardService: AwardService, private router: Router) {
    this.reloadData();
   }

  displayedColumns: string[] = ['id', 'name', 'year', 'actions'];

  ngOnInit() {
    this.reloadData();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.awarddata.paginator = this.paginator;
    }
  }

  reloadData() {
    this.awardService.getList().subscribe((awards) => {
      this.awarddata.data = awards;
    });
  }

  async edit(e: Award) {
    await this.router.navigate(['awardform', e.id]);
  }

  async add() {
    await this.router.navigate(['awardform']);
  }

  delete(e: Award) {

        this.awardService.delete(e.id).subscribe({
          next: response => {
            console.log(response)
            if (response.status === 204) {
              this.reloadData();
            } 
          }
        });
  }


}
