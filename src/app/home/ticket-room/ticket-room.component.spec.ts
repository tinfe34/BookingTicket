import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketRoomComponent } from './ticket-room.component';

describe('TicketRoomComponent', () => {
  let component: TicketRoomComponent;
  let fixture: ComponentFixture<TicketRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
