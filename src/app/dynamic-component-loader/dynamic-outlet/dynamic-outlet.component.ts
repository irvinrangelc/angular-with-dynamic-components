// tslint:disable-next-line:max-line-length
import { Component, OnInit, Input, ViewChild, ViewContainerRef, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy, ComponentFactoryResolver, Injector } from '@angular/core';
import { DynamicComponentLoader } from '../dynamic-component-loader.service';
import { DynamicComponentManifest } from '../dynamic-component-manifest';

@Component({
  selector: 'app-dynamic-outlet',
  templateUrl: './dynamic-outlet.component.html',
  styleUrls: ['./dynamic-outlet.component.scss']
})
export class DynamicOutletComponent implements OnInit, OnChanges, OnDestroy {
  // Define the container for dynamic components
  @ViewChild('componentOutlet', { read: ViewContainerRef, static: true }) componentOutlet: ViewContainerRef;

  @Input() dynamicComponent: string;
  @Input() inputData: any;
  @Output() saveData = new EventEmitter();

  // Dynamic Component Reference
  componentRef: any;
  dynamicComponentLoader$: any;

  constructor(
    private dynamicComponentLoader: DynamicComponentLoader,
    private cfr: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  ngOnInit(): void {
    this.loadDynamicComponent(this.dynamicComponent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.componentRef) { return; }
    this.componentRef.instance.data = this.inputData;
    if (this.componentRef.instance.ngOnChanges) {
      // Invoke ngOnChanges manually, with inputData changes
      this.componentRef.instance.ngOnChanges(changes);
    }
    this.componentRef.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    if (this.dynamicComponentLoader$) {
      this.dynamicComponentLoader$.unsubscribe();
    }
  }

  loadDynamicComponent(component: string): void {
    if (this.dynamicComponentLoader$) {
      this.dynamicComponentLoader$.unsubscribe();
    }
    this.dynamicComponentLoader$ = this.dynamicComponentLoader
      .getComponentPath(component)
      .subscribe(componentManifest => this.lazyComponent(componentManifest), error => console.warn(error));
  }

  private lazyComponent(componentManifest: DynamicComponentManifest): void {
    import(`./../../${componentManifest.loadComponent}`).then((lazyComponent) => {
      const componentFactory = this.cfr.resolveComponentFactory(lazyComponent[componentManifest.componentName]);

      this.componentOutlet.clear();
      this.componentRef = this.componentOutlet.createComponent(componentFactory, null, this.injector);

      // wire up the @Input() or plain variables
      this.componentRef.instance.data = this.inputData;

      // We need to manually subscribe to outputs/events
      if (this.componentRef.instance.saveData) {
        this.componentRef.instance.saveData.subscribe(data => {
          this.saveData.emit(data);
        });
      }

      // we need to manually trigger change detection on our in-memory component
      this.componentRef.changeDetectorRef.detectChanges();

    }).catch(error => console.warn(error));
  }

}
