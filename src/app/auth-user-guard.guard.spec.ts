import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authUserGuardGuard } from './auth-user-guard.guard';

describe('authUserGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authUserGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
