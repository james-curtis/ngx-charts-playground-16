import { ComponentRef } from '@angular/core';
import { InjectionService } from '../../services/injection/injection.service';
import { OverlayComponent } from './overlay.component';
import * as ɵngcc0 from '@angular/core';
export declare class OverlayService {
    private injectionService;
    component: ComponentRef<OverlayComponent>;
    triggerComponents: any[];
    click: any;
    get instance(): OverlayComponent;
    constructor(injectionService: InjectionService);
    show(options?: any): ComponentRef<OverlayComponent>;
    hide(): void;
    destroy(): void;
    injectComponent(): ComponentRef<OverlayComponent>;
    onClick(): void;
    removeTriggerComponent(component: any): void;
    updateZIndex(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<OverlayService, never>;
}

//# sourceMappingURL=overlay.service.d.ts.map