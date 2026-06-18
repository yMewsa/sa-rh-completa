import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Curriculo } from '../../model/curriculo.model';
import { Apiservice } from '../../service/apiservice.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.html',
  styleUrl: './curriculos.scss',
})
export class Curriculos implements OnInit{
  // Atributos
  // Setor que recebe os curriculos da API
  public curriculos: Curriculo[] = [];

  constructor(private _apiService : Apiservice){}

  listarCurriculos(): void{
    this._apiService.getCurriculos().subscribe(
      // Mapeamento de dados
      (resposta) => {
        this.curriculos = resposta.map(
          (e) => new Curriculo(e.id, e.nome, e.telefone, e.email, e.experiencia, e.formacao, e.skills)
        );
      }
    )
  }
  ngOnInit(): void {
    this.listarCurriculos();
  }
}
