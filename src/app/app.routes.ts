import{Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {EquipamentsComponent} from './equipaments/equipaments.component'
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { EquipamentosAlertaComponent } from './equipamentos-alerta/equipamentos-alerta.component';
import { PreventivasComponent } from './preventivas/preventivas.component';
import { HistoricoComponent } from './historico/historico.component';

export const ROUTES: Routes = [
    {path: '', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'equipaments', component:EquipamentsComponent},
    {path: 'profissionais', component:ProfissionaisComponent},
    {path: 'equipamentos/alerta', component:EquipamentosAlertaComponent},
    {path: 'proximas/preventivas', component: PreventivasComponent},
    {path: 'historico', component: HistoricoComponent}
]