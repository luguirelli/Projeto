import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentosAlertaComponent } from './equipamentos-alerta.component';

describe('EquipamentosAlertaComponent', () => {
  let component: EquipamentosAlertaComponent;
  let fixture: ComponentFixture<EquipamentosAlertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentosAlertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipamentosAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
