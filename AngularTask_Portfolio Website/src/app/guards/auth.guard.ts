import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Example: Check local storage for a key "isAuthenticated"
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    alert('You must be authenticated to view this page.');
    router.navigate(['/']);
    return false;
  }
  
  return true;
};
