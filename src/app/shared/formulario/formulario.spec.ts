import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { Pacientes } from './formulario';

describe('Pacientes Formulario', () => {
  let component: Pacientes;
  let fixture: ComponentFixture<Pacientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pacientes],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pacientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
