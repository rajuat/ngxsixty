import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

    openClose: boolean = true;

    constructor() { }

    toggle(): boolean {
        this.openClose = !this.openClose;
        return this.openClose;
    }

}