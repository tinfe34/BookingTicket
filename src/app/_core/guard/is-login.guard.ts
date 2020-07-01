import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import swal2 from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {

    //Khai bao đối tượng điều hướng trang
    constructor(private router:Router) {

    }
    
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //Kiểm tra điều kiện login
    if(localStorage.getItem('userLogin')){
      return true;
    }

    swal2.fire('Đăng nhập để xem thông tin !');
    //Chưa login chuyển hướng về login
    this.router.navigate(['/login'])
    return false;
  }
  
}
