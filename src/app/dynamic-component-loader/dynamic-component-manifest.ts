export interface DynamicComponentManifest {
  /** Unique identifier, used in the application to retrieve the Component from the Manifest. */
  componentId: string;

  /** Unique identifier, used in the application to retrieve a ComponentFactory. */
  componentName: string;

  /** Path to component. */
  loadComponent: string;
}
