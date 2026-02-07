import { CanActivateFn } from '@angular/router';

export const authUserGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
