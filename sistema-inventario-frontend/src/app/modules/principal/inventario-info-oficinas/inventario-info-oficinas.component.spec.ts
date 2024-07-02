import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioInfoOficinasComponent } from './inventario-info-oficinas.component';

describe('InventarioInfoOficinasComponent', () => {
  let component: InventarioInfoOficinasComponent;
  let fixture: ComponentFixture<InventarioInfoOficinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioInfoOficinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioInfoOficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
