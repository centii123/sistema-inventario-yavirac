import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioOficinasComponent } from './inventario-oficinas.component';

describe('InventarioOficinasComponent', () => {
  let component: InventarioOficinasComponent;
  let fixture: ComponentFixture<InventarioOficinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioOficinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioOficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
