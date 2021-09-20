import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './services/books/books.service';
import { HeaderComponent } from './components/header/header.component';


const NGA_COMPONENTS = [

];

const NGA_SERVICES = [
    BooksService
];

@NgModule({
    declarations: [...NGA_COMPONENTS, HeaderComponent],
    imports: [CommonModule],
    exports: [...NGA_COMPONENTS],
    providers: [],
    entryComponents: [NGA_COMPONENTS]
})
export class NgaModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgaModule,
            providers: [
                ...NGA_SERVICES
            ],
        }
    }
}