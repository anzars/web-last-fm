import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from './page.component';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Page', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render container section successfully', () => {
    expect(fixture.nativeElement.querySelector('#idcontainer'))
      .toBeDefined();
  });

  it('should render toolbar section successfully', () => {
    expect(fixture.nativeElement.querySelector('#idtoolbar'))
      .toBeDefined();
  });

  it('should render span title section successfully', () => {
    expect(fixture.nativeElement.querySelector('#idspan'))
      .toBeDefined();
  });

  it('should render share button successfully', () => {
    expect(fixture.nativeElement.querySelector('#idsharebutton'))
      .toBeDefined();
  });

  it('should render favourite button successfully', () => {
    expect(fixture.nativeElement.querySelector('#idfavouritebutton'))
      .toBeDefined();
  });

  it('should render footer successfully', () => {
    expect(fixture.nativeElement.querySelector('#idfooter'))
      .toBeDefined();
  });

  it('should render router-outlet successfully', () => {
    expect(fixture.nativeElement.querySelector('router-outlet'))
      .toBeDefined();
  });

  it('footer should render copyright info. successfully', () => {
    let footer = fixture.nativeElement.querySelector('#idfooter');

    expect(footer.textContent)
      .toContain('@Copyright info');
  });

  it('apan title should render toolbar title successfully', () => {
    let span = fixture.nativeElement.querySelector('#idspan');

    expect(span.textContent)
      .toContain('Last FM');
  });
  


});
