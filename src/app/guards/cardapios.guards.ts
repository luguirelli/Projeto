import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class CardapiosGuard implements CanActivateChild{''

    	canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log('Guarda de rota filha');

            return true;
        }

}