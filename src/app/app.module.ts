import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
<<<<<<< HEAD
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';
import { EditarPensamentoComponent } from './pensamentos/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
=======
import { HttpClient, HttpClientModule } from '@angular/common/http';
>>>>>>> 607b14ef0f1eff24c6ef7eac5f96bac68da979e3

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamentoComponent,
<<<<<<< HEAD
    EditarPensamentoComponent,
    ExcluirPensamentoComponent
=======
    ExcluirPensamentoComponent,
    EditarPensamentoComponent
>>>>>>> 607b14ef0f1eff24c6ef7eac5f96bac68da979e3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
