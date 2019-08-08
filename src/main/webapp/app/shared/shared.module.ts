import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GatewarySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GatewarySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GatewarySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewarySharedModule {
  static forRoot() {
    return {
      ngModule: GatewarySharedModule
    };
  }
}
