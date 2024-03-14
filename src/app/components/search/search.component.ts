import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IOMDBResponse2 } from '../../omdbmresponse2';
import { OmdbApiService } from '../../services/omdb-api.service'; // Ensure this path is correct

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  movieData: IOMDBResponse2 | undefined;
  currentPage = 1;
  maxPages = 0;
  errorMessage: any;

  constructor(private _omdbService: OmdbApiService) {}

  getMovieDetails(movieName: string): boolean {
    this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData = movieData;
      },
      error => this.errorMessage = error
    );
    return false;
  }

  getNextPage(movieName: string): boolean {
    this.currentPage++;
    this.getMovieDetails(movieName); 
    return false;
  }

  getPreviousPage(movieName: string): boolean {
    this.currentPage--;
    if (this.currentPage < 1) this.currentPage = 1;
    this.getMovieDetails(movieName); 
    return false;
  }
}
