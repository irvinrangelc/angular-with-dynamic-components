import { DynamicComponentManifest } from '../../../dynamic-component-loader/dynamic-component-manifest';

export const mexicoManifest: DynamicComponentManifest[] = [
  {
    componentId: 'MEX-lazy1',
    componentName: 'Lazy1Component',
    loadComponent: 'modules/countries/global/components/lazy1/lazy1.component'
  },
  {
    componentId: 'MEX-lazy2',
    componentName: 'Lazy2Component',
    loadComponent: 'modules/countries/global/components/lazy2/lazy2.component'
  }
];
