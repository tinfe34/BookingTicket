import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingDetailComponent } from './showing-detail.component';

describe('ShowingDetailComponent', () => {
  let component: ShowingDetailComponent;
  let fixture: ComponentFixture<ShowingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
