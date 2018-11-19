import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EquipamentsComponent } from './equipaments/equipaments.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { EquipamentosAlertaComponent } from './equipamentos-alerta/equipamentos-alerta.component';
import { PreventivasComponent } from './preventivas/preventivas.component';
import { HistoricoComponent } from './historico/historico.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EquipamentsComponent,
    ProfissionaisComponent,
    EquipamentosAlertaComponent,
    PreventivasComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
