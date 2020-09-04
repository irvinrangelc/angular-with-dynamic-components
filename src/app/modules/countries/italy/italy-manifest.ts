import { DynamicComponentManifest } from '../../../dynamic-component-loader/dynamic-component-manifest';

export const italyManifest: DynamicComponentManifest[] = [
  {
    componentId: 'ITA-lazy1',
    componentName: 'Lazy1Component',
    path: 'italy-lazy1',
    loadChildren: './modules/countries/global/global.module#GlobalModule',
    loadComponent: 'modules/countries/global/components/lazy1/lazy1.component'
  },
  {
    componentId: 'ITA-lazy2',
    componentName: 'Lazy2Component',
    path: 'italy-lazy2',
    loadChildren: './modules/countries/global/global.module#GlobalModule',
    loadComponent: 'modules/countries/global/components/lazy2/lazy2.component'
  }
];
