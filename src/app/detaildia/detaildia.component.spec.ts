import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildiaComponent } from './detaildia.component';

describe('DetaildiaComponent', () => {
  let component: DetaildiaComponent;
  let fixture: ComponentFixture<DetaildiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaildiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaildiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
