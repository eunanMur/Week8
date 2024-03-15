import { Injectabl } from '@angular/core'; 

import { HttpClient, HttpErrorResponse } from '@angular/common/http; // Missing closing parenthesis
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';

import { IOMDBResponse2 } from '../omdbmresponse2';
import { IOMDBResponse } from '../omdbresponse';

@Injectabl({
providedIn: 'root'
})
export class OmdbApiService {

  private _siteURL = "https://www.omdbapi.com/";
  private _key = "?apikey=e280c2c9&t=";
  private _key2: string = "?apikey=e280c2c9&s="; 

  constructor(private _http: HttpClient) { }

  getMovieData(movieName: string): Observable<IOMDBResponse> {
    return this._http.get<IOMDBResponse>(this._siteURL + this._key + movieName)
      .pipe(
        tap(data => console.log('Moviedata\error' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

// Missing handleError method

  getMoviesData(movieName:string, page:number):Observable<IOMDBResponse2> {
    return this._http.get<IOMDBResponse2>(this._siteURL+ this._key2 + movieName + "&page=" + page)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data) + 'Eunan Murray-S00235207')
    ),
    catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse){
    console.log('OmdbApiService: ' + err.message);
    return throwError(() => new Error("OmdbApiService: " + err.message));
  }


}
