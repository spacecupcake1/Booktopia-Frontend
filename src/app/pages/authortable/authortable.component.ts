import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthorService } from '../../service/author.service';
import { Author } from '../../data/author';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-authortable',
  templateUrl: './authortable.component.html',
  styleUrl: './authortable.component.css'
})
export class AuthortableComponent implements OnInit, AfterViewInit {
  authordata = new MatTableDataSource<Author>();
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private authorService: AuthorService, private router: Router) {
    this.reloadData();
   }

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'birthdate', 'actions'];

  async ngOnInit() {
    await this.reloadData();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.authordata.paginator = this.paginator;
    }
  }

  reloadData() {
    this.authorService.getList().subscribe((authors) => {
      this.authordata.data = authors;
    });
  }

  async edit(e: Author) {
    await this.router.navigate(['author', e.id]);
  }

  async add() {
    await this.router.navigate(['author']);
  }

  delete(e: Author) {

        this.authorService.delete(e.id).subscribe({
          next: response => {
            if (response.status === 200) {
              this.reloadData();
            } 
          }
        });
  }


}
