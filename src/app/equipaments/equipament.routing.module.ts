
import { EquipamentsComponent } from './equipaments.component';
import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

 
const equipamentsRoutes: Routes = [
    { path: 'equipamentos', component: EquipamentsComponent,
    canActivate: [AuthGuard],
     }
 ];

@NgModule({
    imports: [RouterModule.forChild(equipamentsRoutes)],
    exports: [RouterModule]
})
export class EquipamentsRoutingModule {
    
}