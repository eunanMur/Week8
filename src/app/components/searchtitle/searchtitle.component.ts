import { Component } from '@angular/core';
import { IOMDBResponse } from '../../omdbresponse'; 
import { OmdbApiService } from '../../services/omdb-api.service';

@Component({
  selector: 'app-search-title',
  standalone: true,

  templateUrl: './searchtitle.component.html',
  styleUrls: './search-title.component.css'
export class SearchtitleComponent { 
  movieData: any;
  errorMessage: any;

  constructor(private _omdbService: OmdbApiService) {}

  getMovieDetails(movieName: string): void {
    this._omdbService.getMovieData(movieName).subscribe( 
      movieData => {
        this.movieData = movieData; 
        
        console.log("Director name : " + this.movieData.Director); 
        
      },
      error => this.errorMessage = error
    );
  }
}
