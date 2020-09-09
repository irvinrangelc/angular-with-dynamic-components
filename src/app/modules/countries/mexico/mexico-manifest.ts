import { DynamicComponentManifest } from '../../../dynamic-component-loader/dynamic-component-manifest';

export const italyManifest: DynamicComponentManifest[] = [
  {
    componentId: 'MEX-lazy1',
    componentName: 'Lazy1Component',
    path: 'mexico-lazy1',
    loadChildren: './modules/countries/global/global.module#GlobalModule',
    loadComponent: 'modules/countries/global/components/lazy1/lazy1.component'
  },
  {
    componentId: 'MEX-lazy2',
    componentName: 'Lazy2Component',
    path: 'mexico-lazy2',
    loadChildren: './modules/countries/global/global.module#GlobalModule',
    loadComponent: 'modules/countries/global/components/lazy2/lazy2.component'
  }
];
