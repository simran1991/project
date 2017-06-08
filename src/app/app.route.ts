import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {JobsComponent} from './jobs.component';
import { CustomerNewComponent} from './customerNew.component';


let APP_ROUTES:Routes=[

    {
        path:'customer',
        component:CustomerNewComponent

    } ,
    {
        path:'jobs',
        component:JobsComponent

    } ,
    {
        path:'home',
        // redirectTo:''
        component:HomeComponent
    },
    
];

export let AppRouterModule =RouterModule.forRoot(APP_ROUTES,{useHash:true});