import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { LoadingService } from "@app/services/loading.service";
import { finalize } from "rxjs";

 
export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const loadingService = inject(LoadingService);

  loadingService.showLoading()

  const jwtToken = getJwtToken();
  console.log('JWT Token:', jwtToken);

  if (jwtToken) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    return next(cloned).pipe(
      finalize(() => loadingService.hideLoading())
    );
  }
  return next(req);
};

function getJwtToken(): string | null {
  return localStorage.getItem('JWT_TOKEN');
}