import { Routes } from '@angular/router';
import { Home } from './view/home/home';
import { Curriculos } from './view/curriculos/curriculos';
import { Vagas } from './view/vagas/vagas';
import { PainelVagas } from './view/painel-vagas/painel-vagas';
import { PainelCurriculos } from './view/painel-curriculos/painel-curriculos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'curriculos', component: Curriculos },
  { path: 'painel-curriculos', component: PainelCurriculos },
  { path: 'vagas', component: Vagas },
  { path: 'painel-vagas', component: PainelVagas },
];
