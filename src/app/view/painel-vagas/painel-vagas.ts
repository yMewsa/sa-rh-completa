import { Component, OnInit } from '@angular/core';
import { Vaga } from '../../model/vaga.model';
import { Vagas } from '../vagas/vagas';
import { Apiservice } from '../../service/apiservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-painel-vagas',
  imports: [FormsModule],
  templateUrl: './painel-vagas.html',
  styleUrl: './painel-vagas.scss',
})
export class PainelVagas implements OnInit{
  // Terminar o CRUD
  public vagas: Vaga[] = []; //Carregar as info da API
  // Objeto para interpolação do Formulário
  public vaga: Vaga = new Vaga(0,"","","",0);

  constructor(private _apiService: Apiservice){}

  ngOnInit(): void {
    this.listarVagas();
  }

  // Método READ (Listar todas vagas)
  listarVagas(): void {
    //preencher o vetor comas informações da API
    this._apiService.getVagas().subscribe(
      // subscribe => Ferramenta do Observable para fazer conexão Assincrona
      //mapeamento de Dados
      (resposta) => {
        //convertendo a Respostas da API em Obj para o Vetor
        this.vagas = resposta.map((e) => new Vaga(e.id, e.nome, e.foto, e.descricao, e.salario));
      },
    );
  }

  // Listar Vaga Unica (get)
  ListarVagaUnica(vaga : Vaga){
    this.vaga = vaga
  }

  // Criar
  cadastrarVaga(): void{
    this._apiService.postVaga(this.vaga).subscribe(
      // Fazer a conexão de forma assyncrona
      () => {
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas();
        alert("Vaga Cadastrada com Sucesso");
      }
    );
  }

  // Atualizar
  atualizarVaga(id:any): void{
    this._apiService.putVaga(id, this.vaga).subscribe(
      // Ação que ira ser feita enquanto inserida
      () =>{
        this.vaga = new Vaga(0,"", "", "",0);
        this.listarVagas();
        alert("Vaga Atualizada com Sucesso");
      }
    );
  }

  // Deletar
  excluirVaga(id:any): void{
    this._apiService.deleteVaga(id).subscribe(
      ()=>{
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas();
        alert("Vaga Excluida com Sucesso");
      }
    );
  }
}
