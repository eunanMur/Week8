import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OmdbApiService } from './services/omdb-api.service';
import { IOMDBResponse } from './omdbresponse'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SearchtitleComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movie Finder';
  movieData: IOMDBResponse | undefined;
  errorMessage: any;

  constructor(private _omdbService: OmdbApiService) {}

  getMovieDetails(movieName: string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData = movieData;
        console.log("Director name : " + this.movieData.Director);
      }
    )
    return false;
  }
}
