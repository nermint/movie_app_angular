import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styles: [`
        h2{
            color:green;
        }
    `]
})


export class MoviesComponent{
    title="Movie list";
    movies:Movie[];
    selectedMovie:Movie;

    constructor(private movieService:MovieService){
        
    }

    // constructordan sonra calisan method
    ngOnInit(): void {

        this.getMovies();
    }

    onSelect(movie:Movie):void{
        this.selectedMovie=movie;
    }

    getMovies():void{
        this.movieService.getMovies().subscribe(movies =>{
            this.movies=movies;
        });
    }

    add(name:string,imgUrl:string,description:string):void{
        this.movieService.add({
            name, imgUrl,description
        }as Movie).subscribe(movie=>this.movies.push(movie));
    }

    delete(movie:Movie):void{
        this.movies =this.movies.filter( m=> m!==movie);
        this.movieService.delete(movie).subscribe();
    }

}