import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ControlServiceService } from './control-service.service';



describe('StudentsService', () => {
  let injector: TestBed;
  let service: ControlServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ControlServiceService],
    });

    

    injector = getTestBed();
    service = injector.get(ControlServiceService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });  


  const dummyResponse = {
    data: [
      
    ],
  };  
  
  it('getArtists should return data', () => {
   service.getCountries().subscribe(res =>{
     expect(res.length).toBeGreaterThan(0);
   });
   const req = httpMock.expectOne('/api/getCountries');
   expect(req.request.method).toBe('GET');
   req.flush([{name:'India'},{name:'Australia'}]);
    });

    it('getCountries should return data', () => {
      service.getCountries().subscribe(res =>{
        expect(res.length).toBeGreaterThan(0);
      });
      const req = httpMock.expectOne('/api/getCountries');
      expect(req.request.method).toBe('GET');
      req.flush([{name:'India'},{name:'CAustralia'}]);
       });

       it('getTopTracks should return data', () => {
        service.getTopTracks('Arjit').subscribe(res =>{
          expect(res.length).toBeGreaterThan(0);
        });
        const req = httpMock.expectOne('/api/TopTracks?artist=Arjit');
        expect(req.request.method).toBe('GET');
        req.flush({result:[{name:'hello'},{name:'CAustralia'}]});
         });
 
         it('getArtists should return data', () => {
          service.getArtists('India').subscribe(res =>{
            expect(res.length).toBeGreaterThan(0);
          });
          const req = httpMock.expectOne('/api/Artists?country=India');
          expect(req.request.method).toBe('GET');
          req.flush({artist:[{name:'Arjit',image:[{'#text':'abcd'}]}]});
           });
  

        
});