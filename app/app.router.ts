import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {BitDataComponent} from './bitdata.component';
import {AboutComponent} from './about.component';

export const router : Routes = 
[
    {path:'',redirectTo:'bitdata',pathMatch: 'full'},
    {path: 'bitdata',component:BitDataComponent},
    {path: 'About' ,component:AboutComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);