import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IOMDBResponse } from '../../omdbresponse';
import { OmdbApiService } from '../../services/omdb-api.service';

@Component({
  selector: 'app-search-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searchtitle.component.html',
  styleUrls: ['./searchtitle.component.css']
})
export class SearchtitleComponent {
  movieData: IOMDBResponse | undefined;
  errorMessage: any;

  constructor(private _omdbService: OmdbApiService) {}

  getMovieDetails(movieName: string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData = movieData;
        console.log("Director name : " + this.movieData.Director);
      },
      error => this.errorMessage = error
    );
    return false;
  }
}
