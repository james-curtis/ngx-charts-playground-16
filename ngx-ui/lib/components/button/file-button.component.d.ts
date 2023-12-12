import { EventEmitter, NgZone, OnInit, TemplateRef, ElementRef } from '@angular/core';
import { FileUploaderOptions, FileUploader, FileItem } from '@swimlane/ng2-file-upload';
import { FileButtonStyleType } from './file-button-style.type';
import * as ɵngcc0 from '@angular/core';
export declare class FileButtonComponent implements OnInit {
    readonly _ngZone: NgZone;
    id: string;
    name: string;
    styleType: FileButtonStyleType;
    uploader: FileUploader;
    options: FileUploaderOptions;
    get disabled(): boolean;
    set disabled(disabled: boolean);
    get multiple(): boolean;
    set multiple(multiple: boolean);
    afterAddingFile: EventEmitter<{
        fileItem: FileItem;
    }>;
    beforeUploadItem: EventEmitter<{
        fileItem: FileItem;
    }>;
    successItem: EventEmitter<{
        item: any;
        response: string;
        status: number;
        headers: any;
    }>;
    errorItem: EventEmitter<{
        response: string;
        status: number;
        headers: any;
    }>;
    progressAll: EventEmitter<{
        progress: number;
    }>;
    readonly dropzoneTemplate: TemplateRef<any>;
    readonly fileInput?: ElementRef<HTMLInputElement>;
    get isDisabled(): boolean;
    get cssClasses(): any;
    readonly FileButtonStyleType: typeof FileButtonStyleType;
    progress: number;
    fileName: string;
    fileOverDropzone: boolean;
    private _isItemSuccessful;
    private _disabled;
    private _multiple;
    constructor(_ngZone: NgZone);
    ngOnInit(): void;
    onAfterAddingFile(fileItem: FileItem): void;
    onBeforeUploadItem(fileItem: FileItem): void;
    onErrorItem(response: string, status: number, headers: any): void;
    onProgressAll(progress: number): void;
    onSuccessItem(item: any, response: string, status: number, headers: any): void;
    fileOverBase(event: boolean): void;
    clearInput(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<FileButtonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<FileButtonComponent, "ngx-file-button", ["ngxFileButton"], { "id": "id"; "styleType": "styleType"; "disabled": "disabled"; "multiple": "multiple"; "uploader": "uploader"; "name": "name"; "options": "options"; }, { "afterAddingFile": "afterAddingFile"; "beforeUploadItem": "beforeUploadItem"; "successItem": "successItem"; "errorItem": "errorItem"; "progressAll": "progressAll"; }, ["dropzoneTemplate"], ["*"]>;
}

//# sourceMappingURL=file-button.component.d.ts.map