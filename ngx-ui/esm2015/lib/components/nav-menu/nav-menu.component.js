import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export class NavMenuComponent {
    constructor() {
        this._expanded = false;
    }
    get expanded() {
        return this._expanded;
    }
    set expanded(expanded) {
        this._expanded = coerceBooleanProperty(expanded);
    }
}
NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(); };
NavMenuComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NavMenuComponent, selectors: [["ngx-nav-menu"]], hostAttrs: [1, "ngx-nav-menu"], hostVars: 2, hostBindings: function NavMenuComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("expanded", ctx.expanded);
    } }, inputs: { expanded: "expanded" }, exportAs: ["ngxNavMenu"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "nav-menu"]], template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: ["ngx-nav-menu{width:60px;height:100%;background:#1c2029;padding:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}ngx-nav-menu .nav-menu{width:100%;display:flex;flex-direction:column;overflow:hidden}ngx-nav-menu .expand-icon{font-size:12px;cursor:pointer;margin-top:2px;position:absolute;left:23px}ngx-nav-menu .expand-icon svg{fill:#72819f}ngx-nav-menu .expand-icon.bottom{bottom:5px}ngx-nav-menu .expand-icon:hover svg{fill:#1483ff}.nav-popover,ngx-nav-menu.expanded{width:255px}.nav-popover .nav-items .nav-item .nav-label,.nav-popover .nav-items .nav-item .toggle-icon,ngx-nav-menu.expanded .nav-items .nav-item .nav-label,ngx-nav-menu.expanded .nav-items .nav-item .toggle-icon{display:inline}.nav-popover .sub-nav,ngx-nav-menu.expanded .sub-nav{display:block}.nav-popover .nav-logo .logo-text,ngx-nav-menu.expanded .nav-logo .logo-text{display:inline}.nav-popover .nav-logo:hover .logo-image,ngx-nav-menu.expanded .nav-logo:hover .logo-image{opacity:1}.nav-popover .nav-logo .expand-icon,ngx-nav-menu.expanded .nav-logo .expand-icon{display:inline}.nav-popover .expand-icon,ngx-nav-menu.expanded .expand-icon{right:10px;left:auto}.nav-items{text-align:left;max-height:calc(100vh - 100px);overflow:auto}.nav-items .nav-item-container{background:#262c38}.nav-items .nav-item{display:block;margin:1px 0;background:#262c38;width:100%;color:#fff;border-left:3px solid #262c38;padding:13px 0 14px;cursor:pointer}.nav-items .nav-item ngx-icon{width:20px;height:20px;margin-left:17px;vertical-align:middle;font-size:20px;line-height:20px;color:#818fa9}.nav-items .nav-item ngx-icon svg{fill:none;stroke:none;filter:saturate(0)}.nav-items .nav-item .nav-label{display:none;text-transform:uppercase;margin-left:15px;font-size:14px;color:#818fa9;font-weight:600}.nav-items .nav-item .toggle-icon{display:none;float:right;color:#818fa9;font-size:12px;margin-top:5px;margin-right:10px}.nav-items .nav-item:focus{outline:none}.nav-items .nav-item.active,.nav-items .nav-item:hover{-o-border-image:linear-gradient(180deg,#02aaff 0,#00fff4) 1 100%;border-image:linear-gradient(180deg,#02aaff 0,#00fff4) 1 100%;border-color:#1483ff}.nav-items .nav-item.active ngx-icon,.nav-items .nav-item:hover ngx-icon{color:#ebedf2}.nav-items .nav-item.active ngx-icon svg,.nav-items .nav-item:hover ngx-icon svg{filter:none;opacity:1}.sub-nav{display:none;padding-left:0;margin:0;max-height:263px;overflow:auto;background:#1c2029}.sub-nav .sub-nav-item{display:block;background:#1c2029;margin-bottom:0;padding:16px 18px;font-size:.9rem;color:#818fa9;cursor:pointer}.sub-nav .sub-nav-item .active-indicator{display:none;float:right;margin-top:4px;color:#1483ff}.sub-nav .sub-nav-item:focus{outline:none}.sub-nav .sub-nav-item.active .active-indicator,.sub-nav .sub-nav-item:hover .active-indicator{display:inline}.sub-nav .sub-nav-item:not(:first-child){border-top:1px solid #262c38}.nav-logo{background:#07080b;height:50px;position:relative}.nav-logo:focus{outline:none}.nav-logo .logo-image{transition:opacity .25s ease-in-out}.nav-logo .logo-image svg{width:35px;height:35px;position:relative;top:50%;left:13px;transform:translateY(-50%)}.nav-logo .logo-text{display:none;height:20px;margin-left:25px}.nav-logo:hover .logo-image{opacity:0}.nav-logo:hover .expand-icon{display:inline}.nav-logo .expand-icon{display:none;top:50%;transform:translateY(-50%)}.nav-popover{width:200px;background:#262c38!important;margin-top:7px;box-shadow:none!important;padding:0!important;transition:opacity .3s,transform 0s!important}.nav-popover .sub-nav{max-height:300px;overflow:auto}.nav-popover .sub-nav-item{margin:0 1px 1px}.nav-popover .title{height:50px;background:#262c38;padding:15px 0 14px 15px;text-transform:uppercase;margin-left:-1px;font-size:14px;color:#818fa9;font-weight:600}"], encapsulation: 2, changeDetection: 0 });
NavMenuComponent.propDecorators = {
    expanded: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NavMenuComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxNavMenu',
                selector: 'ngx-nav-menu',
                template: "<div class=\"nav-menu\">\n  <ng-content></ng-content>\n</div>\n",
                host: {
                    class: 'ngx-nav-menu',
                    '[class.expanded]': 'expanded'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["ngx-nav-menu{width:60px;height:100%;background:#1c2029;padding:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}ngx-nav-menu .nav-menu{width:100%;display:flex;flex-direction:column;overflow:hidden}ngx-nav-menu .expand-icon{font-size:12px;cursor:pointer;margin-top:2px;position:absolute;left:23px}ngx-nav-menu .expand-icon svg{fill:#72819f}ngx-nav-menu .expand-icon.bottom{bottom:5px}ngx-nav-menu .expand-icon:hover svg{fill:#1483ff}.nav-popover,ngx-nav-menu.expanded{width:255px}.nav-popover .nav-items .nav-item .nav-label,.nav-popover .nav-items .nav-item .toggle-icon,ngx-nav-menu.expanded .nav-items .nav-item .nav-label,ngx-nav-menu.expanded .nav-items .nav-item .toggle-icon{display:inline}.nav-popover .sub-nav,ngx-nav-menu.expanded .sub-nav{display:block}.nav-popover .nav-logo .logo-text,ngx-nav-menu.expanded .nav-logo .logo-text{display:inline}.nav-popover .nav-logo:hover .logo-image,ngx-nav-menu.expanded .nav-logo:hover .logo-image{opacity:1}.nav-popover .nav-logo .expand-icon,ngx-nav-menu.expanded .nav-logo .expand-icon{display:inline}.nav-popover .expand-icon,ngx-nav-menu.expanded .expand-icon{right:10px;left:auto}.nav-items{text-align:left;max-height:calc(100vh - 100px);overflow:auto}.nav-items .nav-item-container{background:#262c38}.nav-items .nav-item{display:block;margin:1px 0;background:#262c38;width:100%;color:#fff;border-left:3px solid #262c38;padding:13px 0 14px;cursor:pointer}.nav-items .nav-item ngx-icon{width:20px;height:20px;margin-left:17px;vertical-align:middle;font-size:20px;line-height:20px;color:#818fa9}.nav-items .nav-item ngx-icon svg{fill:none;stroke:none;filter:saturate(0)}.nav-items .nav-item .nav-label{display:none;text-transform:uppercase;margin-left:15px;font-size:14px;color:#818fa9;font-weight:600}.nav-items .nav-item .toggle-icon{display:none;float:right;color:#818fa9;font-size:12px;margin-top:5px;margin-right:10px}.nav-items .nav-item:focus{outline:none}.nav-items .nav-item.active,.nav-items .nav-item:hover{-o-border-image:linear-gradient(180deg,#02aaff 0,#00fff4) 1 100%;border-image:linear-gradient(180deg,#02aaff 0,#00fff4) 1 100%;border-color:#1483ff}.nav-items .nav-item.active ngx-icon,.nav-items .nav-item:hover ngx-icon{color:#ebedf2}.nav-items .nav-item.active ngx-icon svg,.nav-items .nav-item:hover ngx-icon svg{filter:none;opacity:1}.sub-nav{display:none;padding-left:0;margin:0;max-height:263px;overflow:auto;background:#1c2029}.sub-nav .sub-nav-item{display:block;background:#1c2029;margin-bottom:0;padding:16px 18px;font-size:.9rem;color:#818fa9;cursor:pointer}.sub-nav .sub-nav-item .active-indicator{display:none;float:right;margin-top:4px;color:#1483ff}.sub-nav .sub-nav-item:focus{outline:none}.sub-nav .sub-nav-item.active .active-indicator,.sub-nav .sub-nav-item:hover .active-indicator{display:inline}.sub-nav .sub-nav-item:not(:first-child){border-top:1px solid #262c38}.nav-logo{background:#07080b;height:50px;position:relative}.nav-logo:focus{outline:none}.nav-logo .logo-image{transition:opacity .25s ease-in-out}.nav-logo .logo-image svg{width:35px;height:35px;position:relative;top:50%;left:13px;transform:translateY(-50%)}.nav-logo .logo-text{display:none;height:20px;margin-left:25px}.nav-logo:hover .logo-image{opacity:0}.nav-logo:hover .expand-icon{display:inline}.nav-logo .expand-icon{display:none;top:50%;transform:translateY(-50%)}.nav-popover{width:200px;background:#262c38!important;margin-top:7px;box-shadow:none!important;padding:0!important;transition:opacity .3s,transform 0s!important}.nav-popover .sub-nav{max-height:300px;overflow:auto}.nav-popover .sub-nav-item{margin:0 1px 1px}.nav-popover .title{height:50px;background:#262c38;padding:15px 0 14px 15px;text-transform:uppercase;margin-left:-1px;font-size:14px;color:#818fa9;font-weight:600}"]
            }]
    }], function () { return []; }, { expanded: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQWM5RCxNQUFNLE9BQU8sZ0JBQWdCO0FBQzdCLElBYkE7QUFDRyxRQW1CTyxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzVCLElBQUEsQ0FBQztBQUNELElBVEUsSUFDSSxRQUFRO0FBQ2QsUUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLFFBQVEsQ0FBQyxRQUFRO0FBQ3ZCLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyRCxJQUFFLENBQUM7QUFDSDs0Q0FwQkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsY0FBYyxrQkFDeEIsMkVBQXdDLGtCQUV4QyxJQUFJLEVBQUUsc0JBQ0osS0FBSyxFQUFFLGNBQWMsc0JBQ3JCLGtCQUFrQixFQUFFO1NBQVUsa0JBQy9CLGtCQUNEO0lBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Ozs7bStHQUNoRCxxUkFDSTtBQUFDO0FBQ0ksdUJBQVAsS0FBSztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICduZ3hOYXZNZW51JyxcbiAgc2VsZWN0b3I6ICduZ3gtbmF2LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtbWVudS5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZ3gtbmF2LW1lbnUnLFxuICAgICdbY2xhc3MuZXhwYW5kZWRdJzogJ2V4cGFuZGVkJ1xuICB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZ2V0IGV4cGFuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmRlZDtcbiAgfVxuICBzZXQgZXhwYW5kZWQoZXhwYW5kZWQpIHtcbiAgICB0aGlzLl9leHBhbmRlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShleHBhbmRlZCk7XG4gIH1cbiAgcHJpdmF0ZSBfZXhwYW5kZWQgPSBmYWxzZTtcbn1cbiJdfQ==