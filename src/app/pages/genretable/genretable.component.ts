import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Genre } from '../../data/genre';
import { GenreService } from '../../service/genre.service';

@Component({
  selector: 'app-genretable',
  templateUrl: './genretable.component.html',
  styleUrl: './genretable.component.css'
})
export class GenretableComponent implements OnInit, AfterViewInit {
  genredata = new MatTableDataSource<Genre>();
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private genreService: GenreService, private router: Router) {
    this.reloadData();
   }

  displayedColumns: string[] = ['id', 'name', 'actions'];

  ngOnInit() {
    this.reloadData();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.genredata.paginator = this.paginator;
    }
  }

  reloadData() {
    this.genreService.getList().subscribe((genres) => {
      this.genredata.data = genres;
    });
  }

  async edit(e: Genre) {
    await this.router.navigate(['genreform', e.id]);
  }

  async add() {
    await this.router.navigate(['genreform']);
  }

  delete(e: Genre) {

        this.genreService.delete(e.id).subscribe({
          next: response => {
            console.log(response)
            if (response.status === 204) {
              this.reloadData();
            } 
          }
        });
  }


}
