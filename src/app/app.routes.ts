import {Routes} from '@angular/router';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { MenuComponent } from './navegacao/menu/menu.component';

export const rootRouterConfig: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'***', redirectTo: '/home', pathMatch: 'full'},
  {path : 'home',component:HomeComponent },
  {path : 'menu',component:MenuComponent },
  {path : 'footer',component:FooterComponent },
  {path : 'contato',component:ContatoComponent },
  {path : 'sobre',component:SobreComponent }
];
