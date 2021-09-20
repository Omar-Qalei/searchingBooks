import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from '../../../../environments/environment';
import { Books } from '../../models/books.interface';
@Injectable()
export class BooksService {
    apiKey: String;
    constructor(private _http: HttpClient) {
        this.apiKey = environment.apiKey;
    }
    getBooks(): Observable<Books> {
        // I use query because set history if he/she want to back to previous history
        const url = `https://www.googleapis.com/books/v1/volumes?q=:keyes&key=${this.apiKey}`;
        // I can use params in HTTP Params but need more complex
        return this._http.get<Books>(url).pipe(map((result: Books) => { return result; }));
    }
    // getBooksById(search): Observable<Books> {
    //     // I use query because set history if he/she want to back to previous history
    //     const url = `https://www.googleapis.com/books/v1/volumes?q=:keyes&key=${this.apiKey}`;
    //     // I can use params in HTTP Params but need more complex
    //     return this._http.get<Books>(url).pipe(map((result: Books) => { return result; }));
    // }
}
