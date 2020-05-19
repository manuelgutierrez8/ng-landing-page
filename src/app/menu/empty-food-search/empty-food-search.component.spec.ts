import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyFoodSearchComponent } from './empty-food-search.component';

describe('EmptyFoodSearchComponent', () => {
  let component: EmptyFoodSearchComponent;
  let fixture: ComponentFixture<EmptyFoodSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyFoodSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyFoodSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
