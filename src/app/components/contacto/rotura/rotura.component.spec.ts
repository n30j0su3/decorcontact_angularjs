import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoturaComponent } from './rotura.component';

describe('RoturaComponent', () => {
  let component: RoturaComponent;
  let fixture: ComponentFixture<RoturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
