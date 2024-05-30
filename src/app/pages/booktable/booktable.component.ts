import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Book } from '../../data/book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrl: './booktable.component.css'
})
export class BooktableComponent implements OnInit, AfterViewInit {
  bookdata = new MatTableDataSource<Book>();
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private bookService: BookService, private router: Router) {
    this.reloadData();
   }

  displayedColumns: string[] = ['id', 'name', 'author', 'series', 'page', 'releaseDate', 'author', 'award', 'actions'];

  ngOnInit() {
    this.reloadData();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.bookdata.paginator = this.paginator;
    }
  }

  reloadData() {
    this.bookService.getList().subscribe((books) => {
      this.bookdata.data = books;
    });
  }

  async edit(e: Book) {
    await this.router.navigate(['bookform', e.id]);
  }

  async add() {
    await this.router.navigate(['bookform']);
  }

  delete(e: Book) {
        this.bookService.delete(e.id).subscribe({
          next: response => {
            console.log(response)
            if (response.status === 200) {
              this.reloadData();
            } 
          }
        });
  }


}

