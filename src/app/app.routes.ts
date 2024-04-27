import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/components/home/home.component';
import { LoginComponent } from './components/components/login/login.component';
import { QuienSoyComponent } from './components/components/quien-soy/quien-soy.component';

export const routes: Routes = [{
    path: "home",
    component: HomeComponent
},

{
    path: "login",
    component: LoginComponent
},

{
    path: "quien_soy",
    component: QuienSoyComponent
},

{ path: '', redirectTo: '/login', pathMatch: 'full' },];




