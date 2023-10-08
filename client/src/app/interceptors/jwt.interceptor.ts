import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    this.authService.user$.pipe(take(1)).subscribe({
      next: (user) => {
        if (user) {
          request = request.clone({
            setHeaders: {
              Authorization: 'Bearer ' + user.token,
            },
          });
        }
      },
    });

    return next.handle(request);
  }
}
