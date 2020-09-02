import { DynamicComponentManifest } from '../../../dynamic-component-loader/dynamic-component-manifest';

export const italyManifest: DynamicComponentManifest[] = [
  {
    componentId: 'ITA-lazy1',
    componentName: 'Lazy1Component',
    path: 'italy-lazy1',
    loadChildren: './modules/countries/global/global.module#GlobalModule',
    loadComponent: 'modules/countries/global/lazy1/lazy1.component'
  }
];
