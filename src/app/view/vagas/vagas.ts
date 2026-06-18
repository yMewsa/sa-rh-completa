import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../service/apiservice.service';
import { Vaga } from '../../model/vaga.model';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.html',
  styleUrl: './vagas.scss',
})
export class Vagas implements OnInit {
  // Atributos
  // Setor para receber tidas as vagas da API
  public vagas: Vaga[] = [];

  constructor(private _apiService : Apiservice){}

  listarVagas(): void{
    this._apiService.getVagas().subscribe( //Subscribe -> Ferramenta do Observable p fazer conexão assyncrona
      // Mapeamento de dados
      (resposta) => {
      this.vagas = resposta.map(
       (e) => new Vaga(e.id, e.nome, e.foto, e.descricao, e.salario)
        );
      }
    )
  }
  // Método para carregamento ao iniciar a tela
  ngOnInit(): void {
    this.listarVagas();
  }
}
