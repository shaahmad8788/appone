import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Login } from './login/login';


export const routes: Routes = [
    {
        path: 'crud',
        loadChildren: () => import('./crud/crud-module').then(m => m.CrudModule)
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'login',
        component: Login
    },

];
