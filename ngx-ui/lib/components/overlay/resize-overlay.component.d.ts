import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { HotkeysService } from '../hotkeys/hotkeys.service';
import * as ɵngcc0 from '@angular/core';
export declare class ResizeOverlayComponent implements OnInit, OnDestroy {
    private breakpointObserver;
    private hotkeysService;
    private cdr;
    combo: string;
    get query(): string;
    set query(value: string);
    set disabled(value: boolean);
    get disabled(): boolean;
    visible$: Observable<boolean>;
    private _disabled;
    private _query;
    get keys(): string[];
    constructor(breakpointObserver: BreakpointObserver, hotkeysService: HotkeysService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(ev: KeyboardEvent): void;
    toggle(): void;
    private _buildObservable;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ResizeOverlayComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ResizeOverlayComponent, "ngx-resize-overlay", ["ngxResizeOverlay"], { "combo": "combo"; "query": "query"; "disabled": "disabled"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=resize-overlay.component.d.ts.map