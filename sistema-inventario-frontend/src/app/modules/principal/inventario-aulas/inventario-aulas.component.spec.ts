import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioAulasComponent } from './inventario-aulas.component';

describe('InventarioAulasComponent', () => {
  let component: InventarioAulasComponent;
  let fixture: ComponentFixture<InventarioAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioAulasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
