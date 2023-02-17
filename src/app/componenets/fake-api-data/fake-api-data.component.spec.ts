import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeApiDataComponent } from './fake-api-data.component';

describe('FakeApiDataComponent', () => {
  let component: FakeApiDataComponent;
  let fixture: ComponentFixture<FakeApiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeApiDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
