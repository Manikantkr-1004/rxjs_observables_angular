import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayComponentComponent } from './data-display-component.component';

describe('DataDisplayComponentComponent', () => {
  let component: DataDisplayComponentComponent;
  let fixture: ComponentFixture<DataDisplayComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataDisplayComponentComponent]
    });
    fixture = TestBed.createComponent(DataDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
