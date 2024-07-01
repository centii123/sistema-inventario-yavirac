import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioInfoLaboratorioComponent } from './inventario-info-laboratorio.component';

describe('InventarioInfoLaboratorioComponent', () => {
  let component: InventarioInfoLaboratorioComponent;
  let fixture: ComponentFixture<InventarioInfoLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioInfoLaboratorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioInfoLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
