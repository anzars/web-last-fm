import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiCallService } from './api-call.service';


describe('StudentsService', () => {
  let injector: TestBed;
  let service: ApiCallService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiCallService],
    });

    

    injector = getTestBed();
    service = injector.get(ApiCallService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });  


  const dummyResponse = {
    data: [
      
    ],
  };  
  
  it('getData() should return data', () => {
      service.getData('').subscribe((res) => {
        expect(res).toEqual(dummyResponse);
      });
  
      const req = httpMock.expectOne('');
      expect(req.request.method).toBe('GET');
      req.flush(dummyResponse);
    });
});