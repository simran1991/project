import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component';
import{DashboardComponent} from "./dashboard.component";


let APP_ROUTES:Routes=[

    {
        path:'login',
        component:LoginComponent

    } ,
    {
        path:'dashboard',
        component:DashboardComponent
    }
       
];

export let AppRouterModule =RouterModule.forRoot(APP_ROUTES,{useHash:true});