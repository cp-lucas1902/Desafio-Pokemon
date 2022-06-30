import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PokemonMo } from './pokemon.model';

import { retry, catchError } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'http://localhost:3000/results'

  constructor(private httpClient: HttpClient) { 
    
  }
  

  public getPokemon(): Observable<PokemonMo[]>{
    return this.httpClient.get<PokemonMo[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }
 
  public getPokemonId(national_number:string):Promise<PokemonMo>{
    return this.httpClient.get(`${this.url}/results?national_number=${national_number}`)
      .toPromise()
      .then((resposta: any) => resposta.json()[0])
  }

  

  
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
