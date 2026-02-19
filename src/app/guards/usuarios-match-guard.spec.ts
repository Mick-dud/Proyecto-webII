import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { usuariosMatchGuard } from './usuarios-match-guard';

describe('usuariosMatchGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => usuariosMatchGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
