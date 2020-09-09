import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { DynamicComponentManifest } from './dynamic-component-manifest';
import { italyManifest } from './../modules/countries/italy/italy-manifest';

export const manifestArray: DynamicComponentManifest[] = [
  ...italyManifest
];

@Injectable({
  providedIn: 'root',
})
export class DynamicComponentLoader {

  constructor() {
  }

  /** Retrieve a ComponentFactory, based on the specified componentId (defined in the DynamicComponentManifest array). */
  getComponentPath(componentId: string): Observable<DynamicComponentManifest> {
    // ComponentId Structure:
    // COUNTRY CODE follow by COMPONENT NAME -> NLD-MyComponentName
    // Otherwise, GLOBAL follow by COMPONENT NAME -> GLOBAL-MyComponentName
    const globalComponentId = this.getGlobalComponentScope(componentId);
    let manifest = manifestArray.find(m => m.componentId === componentId);

    if (!manifest) {
      // We have to use the GLOBAL id instead
      manifest = manifestArray.find(m => m.componentId === globalComponentId);
      if (!manifest) {
        // tslint:disable-next-line:max-line-length
        return throwError(`DynamicComponentLoader: Unknown componentId, we tried with "${componentId}" and "${globalComponentId}", please check the components manifest.`);
      }
    }

    return of(manifest);
  }

  getGlobalComponentScope(compName: string): string {
    const compScope = compName.substring(3);
    return 'GLOBAL' + compScope;
  }
}
