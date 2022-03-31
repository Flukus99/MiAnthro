import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinasComponent } from './ninas.component';

describe('NinasComponent', () => {
  let component: NinasComponent;
  let fixture: ComponentFixture<NinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
