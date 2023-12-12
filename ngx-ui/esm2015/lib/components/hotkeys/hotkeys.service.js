import { Injectable, NgZone } from '@angular/core';
import Mousetrap from 'mousetrap';
import { Subject } from 'rxjs';
import { HotkeyStatus } from './hotkey-status.enum';
import * as i0 from "@angular/core";
import * as ɵngcc0 from '@angular/core';
let hotkeys = {};
const hotkeyChangedSource = new Subject();
const isMac = /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
const tags = ['INPUT', 'SELECT', 'TEXTAREA'];
/* eslint-disable */
const map = {
    command: '\u2318',
    shift: '\u21E7',
    left: '\u2190',
    right: '\u2192',
    up: '\u2191',
    down: '\u2193',
    return: '\u23CE',
    backspace: '\u232B' // ⌫
};
/* eslint-enable */
function _getDisplay(combo) {
    const keys = combo.split('+');
    const result = [];
    for (const k of keys) {
        if (k === 'mod') {
            result.push(isMac ? map.command : /* istanbul ignore next */ 'ctrl');
            continue;
        }
        const mapped = map[k];
        result.push(mapped || k);
    }
    return result;
}
export function _add(combo, opts) {
    opts.status = opts.status || HotkeyStatus.Active;
    opts.keys = _getDisplay(combo);
    opts.visible = opts.visible !== undefined ? opts.visible : true;
    opts.allowIn = Array.isArray(opts.allowIn) ? opts.allowIn.map(tag => tag.toUpperCase()) : [];
    const mousetrap = new Mousetrap();
    if (opts.allowIn.length) {
        /* istanbul ignore next */
        mousetrap.stopCallback = function (_, element) {
            if (!tags.includes(element.tagName) || opts.allowIn.includes(element.tagName)) {
                return false;
            }
            return true;
        };
    }
    mousetrap.bind(combo, callback);
    if (hotkeys[combo] === undefined) {
        hotkeys[combo] = [];
    }
    hotkeys[combo].push(opts);
    hotkeyChangedSource.next(hotkeys);
    return opts;
    /* istanbul ignore next */
    function callback(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        else {
            // internet explorer
            event.returnValue = false;
        }
        if (opts && opts.status === HotkeyStatus.Active) {
            opts.zone.run(() => {
                opts.callback(event);
            });
        }
    }
}
export function _suspend(comp) {
    for (const comb in hotkeys) {
        const hotkeyList = hotkeys[comb];
        for (const hotkey of hotkeyList) {
            if (hotkey.component === comp) {
                hotkey.status = HotkeyStatus.Suspended;
            }
        }
    }
    hotkeyChangedSource.next(hotkeys);
}
export function _pauseOthers(comp) {
    for (const comb in hotkeys) {
        const hotkeyList = hotkeys[comb];
        for (const hotkey of hotkeyList) {
            if (hotkey.component !== comp) {
                hotkey.status = `*${hotkey.status}`;
            }
        }
    }
    hotkeyChangedSource.next(hotkeys);
}
export function _unpauseOthers(comp) {
    for (const comb in hotkeys) {
        const hotkeyList = hotkeys[comb];
        for (const hotkey of hotkeyList) {
            if (hotkey.component !== comp && hotkey.status[0] === '*') {
                hotkey.status = hotkey.status.replace('*', '');
            }
        }
    }
    hotkeyChangedSource.next(hotkeys);
}
export function _activate(comp) {
    for (const comb in hotkeys) {
        const hotkeyList = hotkeys[comb];
        for (const hotkey of hotkeyList) {
            if (hotkey.component === comp) {
                hotkey.status = HotkeyStatus.Active;
            }
        }
    }
    hotkeyChangedSource.next(hotkeys);
}
export function _deregister(comp) {
    for (const comb in hotkeys) {
        const hotkeyList = hotkeys[comb];
        for (let i = 0; i < hotkeyList.length; i++) {
            if (hotkeyList[i].component === comp) {
                hotkeyList[i].status = HotkeyStatus.Disabled;
                hotkeyList.splice(hotkeyList.indexOf(hotkeyList[i]), 1);
            }
        }
        if (!hotkeyList.length) {
            Mousetrap.unbind(comb);
        }
    }
    hotkeyChangedSource.next(hotkeys);
}
export function Hotkey(key, description, options) {
    return (target, name) => {
        const oldInit = target.ngOnInit;
        target.ngOnInit = function () {
            if (oldInit)
                oldInit.bind(this)();
            _add(key, Object.assign({ callback: /* istanbul ignore next */ () => {
                    target[name].bind(this)();
                }, description, component: this, zone: new NgZone({ enableLongStackTrace: false }) }, options));
        };
        const oldDestroy = target.ngOnDestroy;
        target.ngOnDestroy = function () {
            if (oldDestroy)
                oldDestroy.bind(this)();
            _deregister(this);
        };
    };
}
export class HotkeysService {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.suspend = _suspend;
        this.activate = _activate;
        this.deregister = _deregister;
        this.pauseOthers = _pauseOthers;
        this.unpauseOthers = _unpauseOthers;
        this.changeEvent = hotkeyChangedSource.asObservable();
    }
    get hotkeys() {
        return hotkeys;
    }
    add(combo, opts) {
        return _add(combo, Object.assign({ zone: this.ngZone }, opts));
    }
    clear() {
        hotkeys = {};
        Mousetrap.reset();
    }
}
HotkeysService.ɵfac = function HotkeysService_Factory(t) { return new (t || HotkeysService)(ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
HotkeysService.ɵprov = i0.ɵɵdefineInjectable({ factory: function HotkeysService_Factory() { return new HotkeysService(i0.ɵɵinject(i0.NgZone)); }, token: HotkeysService, providedIn: "root" });
HotkeysService.ctorParameters = () => [
    { type: NgZone }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(HotkeysService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5cy5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2hvdGtleXMvaG90a2V5cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sU0FBUyxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRDs7QUFDQSxJQUFJLE9BQU8sR0FBa0MsRUFBRSxDQUFDO0FBQ2hELE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQWlDLENBQUM7QUFDekUsTUFBTSxLQUFLLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckUsTUFBTSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBRTdDLG9CQUFvQjtBQUNwQixNQUFNLEdBQUcsR0FBRztBQUNaLElBQUUsT0FBTyxFQUFFLFFBQVE7QUFBRSxJQUNuQixLQUFLLEVBQUUsUUFBUTtBQUFFLElBQ2pCLElBQUksRUFBRSxRQUFRO0FBQUUsSUFDaEIsS0FBSyxFQUFFLFFBQVE7QUFBRSxJQUNqQixFQUFFLEVBQUUsUUFBUTtBQUFFLElBQ2QsSUFBSSxFQUFFLFFBQVE7QUFBRSxJQUNoQixNQUFNLEVBQUUsUUFBUTtBQUFFLElBQ2xCLFNBQVMsRUFBRSxRQUFRLENBQUMsSUFBSTtBQUMxQixDQUFDLENBQUM7QUFDRixtQkFBbUI7QUFFbkIsU0FBUyxXQUFXLENBQUMsS0FBYTtBQUNsQyxJQUFFLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFL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QUFDakIsUUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdEIsSUFBRSxDQUFDO0FBQ0g7K0hBQUM7QUFDRCwrTEF2Qks7QUFBQztFQUhMLFVBQVUsWkFJSyxZQWxNSyxNQUFNO0FBOExmLEFBOUxrQjtlQStMNUIsVUFBVSxFQUFFLE1BQU0sY0FDbkI7Ozs7O3VFQWhNK0I7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IE1vdXNldHJhcCBmcm9tICdtb3VzZXRyYXAnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBIb3RrZXkgfSBmcm9tICcuL2hvdGtleS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSG90a2V5U3RhdHVzIH0gZnJvbSAnLi9ob3RrZXktc3RhdHVzLmVudW0nO1xuXG5sZXQgaG90a2V5czogeyBbY29tYm86IHN0cmluZ106IEhvdGtleVtdIH0gPSB7fTtcbmNvbnN0IGhvdGtleUNoYW5nZWRTb3VyY2UgPSBuZXcgU3ViamVjdDx7IFtjb21ibzogc3RyaW5nXTogSG90a2V5W10gfT4oKTtcbmNvbnN0IGlzTWFjID0gL01hY3xpUG9kfGlQaG9uZXxpUGFkLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0pO1xuY29uc3QgdGFncyA9IFsnSU5QVVQnLCAnU0VMRUNUJywgJ1RFWFRBUkVBJ107XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5jb25zdCBtYXAgPSB7XG4gIGNvbW1hbmQ6ICdcXHUyMzE4JywgLy8g4oyYXG4gIHNoaWZ0OiAnXFx1MjFFNycsIC8vIOKHp1xuICBsZWZ0OiAnXFx1MjE5MCcsIC8vIOKGkFxuICByaWdodDogJ1xcdTIxOTInLCAvLyDihpJcbiAgdXA6ICdcXHUyMTkxJywgLy8g4oaRXG4gIGRvd246ICdcXHUyMTkzJywgLy8g4oaTXG4gIHJldHVybjogJ1xcdTIzQ0UnLCAvLyDij45cbiAgYmFja3NwYWNlOiAnXFx1MjMyQicgLy8g4oyrXG59O1xuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5mdW5jdGlvbiBfZ2V0RGlzcGxheShjb21ibzogc3RyaW5nKSB7XG4gIGNvbnN0IGtleXMgPSBjb21iby5zcGxpdCgnKycpO1xuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICBmb3IgKGNvbnN0IGsgb2Yga2V5cykge1xuICAgIGlmIChrID09PSAnbW9kJykge1xuICAgICAgcmVzdWx0LnB1c2goaXNNYWMgPyBtYXAuY29tbWFuZCA6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovICdjdHJsJyk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXBwZWQgPSBtYXBba107XG4gICAgcmVzdWx0LnB1c2gobWFwcGVkIHx8IGspO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9hZGQoY29tYm86IHN0cmluZywgb3B0czogSG90a2V5KSB7XG4gIG9wdHMuc3RhdHVzID0gb3B0cy5zdGF0dXMgfHwgSG90a2V5U3RhdHVzLkFjdGl2ZTtcbiAgb3B0cy5rZXlzID0gX2dldERpc3BsYXkoY29tYm8pO1xuICBvcHRzLnZpc2libGUgPSBvcHRzLnZpc2libGUgIT09IHVuZGVmaW5lZCA/IG9wdHMudmlzaWJsZSA6IHRydWU7XG5cbiAgb3B0cy5hbGxvd0luID0gQXJyYXkuaXNBcnJheShvcHRzLmFsbG93SW4pID8gb3B0cy5hbGxvd0luLm1hcCh0YWcgPT4gdGFnLnRvVXBwZXJDYXNlKCkpIDogW107XG5cbiAgY29uc3QgbW91c2V0cmFwID0gbmV3IE1vdXNldHJhcCgpO1xuXG4gIGlmIChvcHRzLmFsbG93SW4ubGVuZ3RoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBtb3VzZXRyYXAuc3RvcENhbGxiYWNrID0gZnVuY3Rpb24gKF8sIGVsZW1lbnQpIHtcbiAgICAgIGlmICghdGFncy5pbmNsdWRlcyhlbGVtZW50LnRhZ05hbWUpIHx8IG9wdHMuYWxsb3dJbi5pbmNsdWRlcyhlbGVtZW50LnRhZ05hbWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfVxuXG4gIG1vdXNldHJhcC5iaW5kKGNvbWJvLCBjYWxsYmFjayk7XG5cbiAgaWYgKGhvdGtleXNbY29tYm9dID09PSB1bmRlZmluZWQpIHtcbiAgICBob3RrZXlzW2NvbWJvXSA9IFtdO1xuICB9XG5cbiAgaG90a2V5c1tjb21ib10ucHVzaChvcHRzKTtcbiAgaG90a2V5Q2hhbmdlZFNvdXJjZS5uZXh0KGhvdGtleXMpO1xuXG4gIHJldHVybiBvcHRzO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xuICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMgJiYgb3B0cy5zdGF0dXMgPT09IEhvdGtleVN0YXR1cy5BY3RpdmUpIHtcbiAgICAgIG9wdHMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICBvcHRzLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX3N1c3BlbmQoY29tcDogYW55KSB7XG4gIGZvciAoY29uc3QgY29tYiBpbiBob3RrZXlzKSB7XG4gICAgY29uc3QgaG90a2V5TGlzdCA9IGhvdGtleXNbY29tYl07XG5cbiAgICBmb3IgKGNvbnN0IGhvdGtleSBvZiBob3RrZXlMaXN0KSB7XG4gICAgICBpZiAoaG90a2V5LmNvbXBvbmVudCA9PT0gY29tcCkge1xuICAgICAgICBob3RrZXkuc3RhdHVzID0gSG90a2V5U3RhdHVzLlN1c3BlbmRlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBob3RrZXlDaGFuZ2VkU291cmNlLm5leHQoaG90a2V5cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfcGF1c2VPdGhlcnMoY29tcD86IGFueSkge1xuICBmb3IgKGNvbnN0IGNvbWIgaW4gaG90a2V5cykge1xuICAgIGNvbnN0IGhvdGtleUxpc3QgPSBob3RrZXlzW2NvbWJdO1xuXG4gICAgZm9yIChjb25zdCBob3RrZXkgb2YgaG90a2V5TGlzdCkge1xuICAgICAgaWYgKGhvdGtleS5jb21wb25lbnQgIT09IGNvbXApIHtcbiAgICAgICAgaG90a2V5LnN0YXR1cyA9IGAqJHtob3RrZXkuc3RhdHVzfWA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaG90a2V5Q2hhbmdlZFNvdXJjZS5uZXh0KGhvdGtleXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3VucGF1c2VPdGhlcnMoY29tcD86IGFueSkge1xuICBmb3IgKGNvbnN0IGNvbWIgaW4gaG90a2V5cykge1xuICAgIGNvbnN0IGhvdGtleUxpc3QgPSBob3RrZXlzW2NvbWJdO1xuXG4gICAgZm9yIChjb25zdCBob3RrZXkgb2YgaG90a2V5TGlzdCkge1xuICAgICAgaWYgKGhvdGtleS5jb21wb25lbnQgIT09IGNvbXAgJiYgaG90a2V5LnN0YXR1c1swXSA9PT0gJyonKSB7XG4gICAgICAgIGhvdGtleS5zdGF0dXMgPSBob3RrZXkuc3RhdHVzLnJlcGxhY2UoJyonLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaG90a2V5Q2hhbmdlZFNvdXJjZS5uZXh0KGhvdGtleXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2FjdGl2YXRlKGNvbXA6IGFueSkge1xuICBmb3IgKGNvbnN0IGNvbWIgaW4gaG90a2V5cykge1xuICAgIGNvbnN0IGhvdGtleUxpc3QgPSBob3RrZXlzW2NvbWJdO1xuXG4gICAgZm9yIChjb25zdCBob3RrZXkgb2YgaG90a2V5TGlzdCkge1xuICAgICAgaWYgKGhvdGtleS5jb21wb25lbnQgPT09IGNvbXApIHtcbiAgICAgICAgaG90a2V5LnN0YXR1cyA9IEhvdGtleVN0YXR1cy5BY3RpdmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaG90a2V5Q2hhbmdlZFNvdXJjZS5uZXh0KGhvdGtleXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2RlcmVnaXN0ZXIoY29tcDogYW55KSB7XG4gIGZvciAoY29uc3QgY29tYiBpbiBob3RrZXlzKSB7XG4gICAgY29uc3QgaG90a2V5TGlzdCA9IGhvdGtleXNbY29tYl07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdGtleUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChob3RrZXlMaXN0W2ldLmNvbXBvbmVudCA9PT0gY29tcCkge1xuICAgICAgICBob3RrZXlMaXN0W2ldLnN0YXR1cyA9IEhvdGtleVN0YXR1cy5EaXNhYmxlZDtcbiAgICAgICAgaG90a2V5TGlzdC5zcGxpY2UoaG90a2V5TGlzdC5pbmRleE9mKGhvdGtleUxpc3RbaV0pLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWhvdGtleUxpc3QubGVuZ3RoKSB7XG4gICAgICBNb3VzZXRyYXAudW5iaW5kKGNvbWIpO1xuICAgIH1cbiAgfVxuXG4gIGhvdGtleUNoYW5nZWRTb3VyY2UubmV4dChob3RrZXlzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhvdGtleShrZXk6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgb3B0aW9ucz86IFBhcnRpYWw8SG90a2V5Pikge1xuICByZXR1cm4gKHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBvbGRJbml0ID0gdGFyZ2V0Lm5nT25Jbml0O1xuICAgIHRhcmdldC5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvbGRJbml0KSBvbGRJbml0LmJpbmQodGhpcykoKTtcblxuICAgICAgX2FkZChrZXksIHtcbiAgICAgICAgY2FsbGJhY2s6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovICgpID0+IHtcbiAgICAgICAgICB0YXJnZXRbbmFtZV0uYmluZCh0aGlzKSgpO1xuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICB6b25lOiBuZXcgTmdab25lKHsgZW5hYmxlTG9uZ1N0YWNrVHJhY2U6IGZhbHNlIH0pLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb2xkRGVzdHJveSA9IHRhcmdldC5uZ09uRGVzdHJveTtcbiAgICB0YXJnZXQubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAob2xkRGVzdHJveSkgb2xkRGVzdHJveS5iaW5kKHRoaXMpKCk7XG4gICAgICBfZGVyZWdpc3Rlcih0aGlzKTtcbiAgICB9O1xuICB9O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIb3RrZXlzU2VydmljZSB7XG4gIHJlYWRvbmx5IHN1c3BlbmQgPSBfc3VzcGVuZDtcbiAgcmVhZG9ubHkgYWN0aXZhdGUgPSBfYWN0aXZhdGU7XG4gIHJlYWRvbmx5IGRlcmVnaXN0ZXIgPSBfZGVyZWdpc3RlcjtcbiAgcmVhZG9ubHkgcGF1c2VPdGhlcnMgPSBfcGF1c2VPdGhlcnM7XG4gIHJlYWRvbmx5IHVucGF1c2VPdGhlcnMgPSBfdW5wYXVzZU90aGVycztcbiAgcmVhZG9ubHkgY2hhbmdlRXZlbnQgPSBob3RrZXlDaGFuZ2VkU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGdldCBob3RrZXlzKCkge1xuICAgIHJldHVybiBob3RrZXlzO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBuZ1pvbmU6IE5nWm9uZSkge31cblxuICBhZGQoY29tYm86IHN0cmluZywgb3B0czogSG90a2V5KSB7XG4gICAgcmV0dXJuIF9hZGQoY29tYm8sIHsgem9uZTogdGhpcy5uZ1pvbmUsIC4uLm9wdHMgfSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBob3RrZXlzID0ge307XG4gICAgTW91c2V0cmFwLnJlc2V0KCk7XG4gIH1cbn1cbiJdfQ==