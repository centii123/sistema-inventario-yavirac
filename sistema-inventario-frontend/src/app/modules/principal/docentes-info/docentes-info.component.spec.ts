import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesInfoComponent } from './docentes-info.component';

describe('DocentesInfoComponent', () => {
  let component: DocentesInfoComponent;
  let fixture: ComponentFixture<DocentesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocentesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
