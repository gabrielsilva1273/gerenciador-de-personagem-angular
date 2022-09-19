import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { EmailConfirmationComponent } from './components/email-confirmation/email-confirmation.component';
import { PersonagensComponent } from './components/personagens/personagens.component';
import { PersonagemCreateComponent } from './components/personagem-create/personagem-create.component';
import { PersonagemComponent } from './components/personagem/personagem.component';
import { InventarioComponent } from './components/personagem-children/inventario/inventario.component';
import { ImageComponent } from './components/personagem-children/image/image.component';
import { PericiasComponent } from './components/personagem-children/pericias/pericias.component';
import { TalentosComponent } from './components/personagem-children/talentos/talentos.component';



const routes: Routes = [
  { path: 'personagens/criar', component: PersonagemCreateComponent },
  { path: 'personagens/:id', component: PersonagemComponent },
  { path: 'personagens', component: PersonagensComponent},
  { path: 'auth/confirmar', component: EmailConfirmationComponent },
  { path: 'auth/registrar', component: RegistrationFormComponent },
  { path: 'auth/login', component: LoginFormComponent },
  { path: '', redirectTo: '/personagens', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
