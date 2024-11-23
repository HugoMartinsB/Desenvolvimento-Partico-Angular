import { Component } from '@angular/core';
import { RickAndMortyService } from './rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rick and Morty App';
  name: string = '';  
  character: any;  
  errorMessage: string = '';  

  constructor(private rickAndMortyService: RickAndMortyService) {}

  searchCharacter() {
    this.rickAndMortyService.getCharacterByName(this.name).subscribe(
      (data) => {
        this.character = data.results[0];  
        this.errorMessage = '';  
      },
      (error) => {
        this.errorMessage = 'Personagem não encontrado!';
        this.character = null;  
      }
    );
  }
}
