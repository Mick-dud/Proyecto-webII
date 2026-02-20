import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosGestion } from './usuarios-gestion';

describe('UsuariosGestion', () => {
  let component: UsuariosGestion;
  let fixture: ComponentFixture<UsuariosGestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosGestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosGestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
