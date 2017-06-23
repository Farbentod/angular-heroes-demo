import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListSortableFilterableComponent } from './hero-list-sortable-filterable.component';

describe('HeroListSortableFilterableComponent', () => {
  let component: HeroListSortableFilterableComponent;
  let fixture: ComponentFixture<HeroListSortableFilterableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListSortableFilterableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListSortableFilterableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
