import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot } from '@angular/router'
import { MetaService } from './meta.service'

@Injectable()
export class MetaGuard {

  constructor (private meta: MetaService) { }

  canActivate (route: ActivatedRouteSnapshot): boolean {
    const metaSettings = route.data?.meta

    if (metaSettings) {
      this.meta.update(metaSettings)
    }

    return true
  }

  canActivateChild (route: ActivatedRouteSnapshot): boolean {
    return this.canActivate(route)
  }
}
