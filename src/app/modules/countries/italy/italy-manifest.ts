import { DynamicComponentManifest } from '../../../dynamic-component-loader/dynamic-component-manifest';

export const italyManifest: DynamicComponentManifest[] = [
  {
    componentId: 'ITA-lazy1',
    componentName: 'Lazy1Component',
    loadComponent: 'global/components/lazy1/lazy1.component'
  },
  {
    componentId: 'ITA-lazy2',
    componentName: 'Lazy2Component',
    loadComponent: 'global/components/lazy2/lazy2.component'
  }
];
