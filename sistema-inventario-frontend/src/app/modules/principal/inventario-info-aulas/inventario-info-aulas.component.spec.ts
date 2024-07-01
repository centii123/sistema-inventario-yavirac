import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioInfoAulasComponent } from './inventario-info-aulas.component';

describe('InventarioInfoAulasComponent', () => {
  let component: InventarioInfoAulasComponent;
  let fixture: ComponentFixture<InventarioInfoAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioInfoAulasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioInfoAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
