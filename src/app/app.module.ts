import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityService } from './services/security.service';
import { PersonagemService } from './services/personagem.service';

import { MatInputModule} from '@angular/material/input'
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatIconModule } from '@angular/material/icon';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { EmailConfirmationComponent } from './components/email-confirmation/email-confirmation.component';
import { PersonagensComponent } from './components/personagens/personagens.component';
import { BackgroundComponent } from './components/background/background.component';
import { PersonagemCreateComponent } from './components/personagem-create/personagem-create.component';
import { PersonagemComponent } from './components/personagem/personagem.component';
import { PericiasComponent } from './components/personagem-children/pericias/pericias.component';
import { TalentosComponent } from './components/personagem-children/talentos/talentos.component';
import { InventarioComponent } from './components/personagem-children/inventario/inventario.component';
import { ImageComponent } from './components/personagem-children/image/image.component';
import { NivelComponent } from './components/personagem-children/nivel/nivel.component';
import { NomeComponent } from './components/personagem-children/nome/nome.component';
import { HistoriaComponent } from './components/personagem-children/historia/historia.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    EmailConfirmationComponent,
    PersonagensComponent,
    BackgroundComponent,
    PersonagemCreateComponent,
    PersonagemComponent,
    PericiasComponent,
    TalentosComponent,
    InventarioComponent,
    ImageComponent,
    NivelComponent,
    NomeComponent,
    HistoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [SecurityService,PersonagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
