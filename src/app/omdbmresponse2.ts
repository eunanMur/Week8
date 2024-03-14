export interface IOMDBResponse2{
    Search:movieDetails[]; 
    totalResults:string;
    Error:string;
}

interface movieDetails{
    Title:string;
    Year:string;
    Director:string;
    Poster:string;
    Type:string;
    Error:string;
}