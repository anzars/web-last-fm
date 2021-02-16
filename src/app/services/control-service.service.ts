import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { artist } from 'src/Models/artist-model';
import { Country } from 'src/Models/country-model';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class ControlServiceService {
  searchSubject = new Subject<string>();
  constructor(private _apiService: ApiCallService ) {}

  getCountries(){
   
   return  this._apiService.getData('/api/getCountries').pipe(
      map((data: any)=>{ 
       return this.getsortedCountries(data);
       //
      })
    );

    
  }
  getArtists(country:string){
    let artists:Array<artist>=[];
    return  this._apiService.getData('/api/Artists?country='+country).pipe(
       map((data: any)=>{ 
        data.artist.forEach((value) =>{
          artists.push({name: value.name, thumbnails: value.image[0]['#text']});
        });
        return artists;
       })
     );
 
     
   }
   getTopTracks(artist:string){
    let toptracks:Array<string>=[];
    return  this._apiService.getData('/api/TopTracks?artist='+artist).pipe(
       map((data: any)=>{ 
        data.result.forEach((value) =>{
          toptracks.push(value.name);
        });
        return toptracks;
       })
     );
 
     
   }


   generateSearch(country:string){
    this.searchSubject.next(country);
   }

  getsortedCountries(data){
    let countries: Array<Country> = [];
    let sortedcountries:Array<string>=[];
    let prevletter:string ='';
    data.forEach((value) => {
      sortedcountries.push(value.name);
     console.log('letter='+prevletter);
    });
    sortedcountries.sort().forEach( (value) =>{
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
