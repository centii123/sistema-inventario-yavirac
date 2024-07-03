import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesNewComponent } from './docentes-new.component';

describe('DocentesNewComponent', () => {
  let component: DocentesNewComponent;
  let fixture: ComponentFixture<DocentesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocentesNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
