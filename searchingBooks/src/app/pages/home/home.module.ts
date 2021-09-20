import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const MAT_COMPONENTS = [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
];

const CDK_COMPONENTS = [
    // OverlayModule
];

@NgModule({
    imports: [
        CommonModule,
        // ReactiveFormsModule,
        ...MAT_COMPONENTS,
        ...CDK_COMPONENTS
    ],
    exports: [HomeComponent],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
