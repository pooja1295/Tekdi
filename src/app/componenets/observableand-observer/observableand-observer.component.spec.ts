import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableandObserverComponent } from './observableand-observer.component';

describe('ObservableandObserverComponent', () => {
  let component: ObservableandObserverComponent;
  let fixture: ComponentFixture<ObservableandObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableandObserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableandObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
