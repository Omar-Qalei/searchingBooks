import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/shared/services/books/books.service';
import { Subscription } from 'rxjs';
import { Books } from 'src/app/shared/models/books.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  busy: Subscription;
  books: any[];
  orignalBooks: any[];
  selectedSortBy: String;
  constructor(private booksService: BooksService) {
    this.books = [];
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.busy = this.booksService.getBooks().subscribe((result: Books) => {
      console.log(result.items);
      this.books = result.items;
      this.orignalBooks = result.items;
    });
  }

  goTo(link) {
    window.open(link, '_blank');
  }

  onSearchBook(searchOnBook) {
    this.books = this.orignalBooks.filter(element => element.volumeInfo.title.includes(searchOnBook))
  }

  sortByAuthor() {
    // this.books = this.orignalBooks.sort((a, b) => a.volumeInfo['title'] > b.volumeInfo['title'] && 1 || -1);
    this.books = this.orignalBooks.sort((a, b) => a.volumeInfo['authors'] > b.volumeInfo['authors'] && 1 || -1);
  }

  sortByTitle() {
    this.books = this.orignalBooks.sort((a, b) => a.volumeInfo['title'] > b.volumeInfo['title'] && 1 || -1);
  }

  ngOnDestroy() {
    if (this.busy) {
      this.busy.unsubscribe();
    }
  }
}
