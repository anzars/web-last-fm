import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Country } from 'src/Models/country-model';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class ControlServiceService {

  constructor(private _apiService: ApiCallService) {}

  getCountries(){
   
   return  this._apiService.getData('http://localhost:3462/api/getCountries').pipe(
      map((data: any)=>{ 
       return this.getsortedCountries(data);
       //
      })
    );

    
  }
  getArtists(){
   
    return  this._apiService.getData('http://localhost:3462/api/Artists?country=India').pipe(
       map((data: any)=>{ 
        return data;
        //
       })
     );
 
     
   }

  getsortedCountries(data){
    let countries: Array<Country> = [];
    let sortedcountries:Array<string>=[];
    let prevletter:string ='';
    data.forEach(function (value) {
      sortedcountries.push(value.name);
     console.log('letter='+prevletter);
    });
    sortedcountries.sort().forEach(function (value){
    if(!(prevletter==value.charAt(0))){
       countries.push({name:[value] , letter:value.charAt(0)});
    }
    else{
      countries[countries.length-1].name.push(value);
     }
    prevletter=value.charAt(0);
    });
   
    return countries;
   
  }
}
