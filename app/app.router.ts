import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {BitDataComponent} from './bitdata.component';

export const router : Routes = 
[
    {path:'',redirectTo:'bitdata',pathMatch: 'full'},
    {path: 'bitdata',component:BitDataComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);