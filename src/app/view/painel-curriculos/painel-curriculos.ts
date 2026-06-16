import { Component, OnInit } from '@angular/core';
// Importe o model de Curriculo correto do seu projeto
import { Curriculo } from '../../model/curriculo.model';
import { Apiservice } from '../../service/apiservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-painel-curriculos',
  imports: [FormsModule],
  templateUrl: './painel-curriculos.html',
  styleUrl: './painel-curriculos.scss',
})
export class PainelCurriculos implements OnInit {
  public curriculos: Curriculo[] = [];

  // ATENÇÃO: Ajuste os parâmetros abaixo de acordo com o construtor do seu model Curriculo!
  // Exemplo: id, nome, email, telefone, experiencia...
  public curriculo: Curriculo = new Curriculo(0, '', 0, '', '', '', '');

  constructor(private _apiService: Apiservice) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  // Método READ
  listarCurriculos(): void {
    this._apiService.getCurriculos().subscribe(
      // Certifique-se que getCurriculos() existe no service
      (resposta) => {
        // Mapeie os dados de acordo com os campos da API de currículos
        this.curriculos = resposta.map((e) => new Curriculo(e.id, e.nome, e.telefone, e.email, e.experiencia, e.formacao, e.skills));
      },
    );
  }

  // Listar Currículo Único
  ListarCurriculoUnico(curriculoSelecionado: Curriculo) {
    this.curriculo = curriculoSelecionado;
  }

  // Criar
  cadastrarCurriculo(): void {
    this._apiService.postCurriculo(this.curriculo).subscribe(() => {
      this.curriculo = new Curriculo(0, '', 0, '', '', '', '');
      this.listarCurriculos();
      alert('Currículo Cadastrado com Sucesso');
    });
  }

  // Atualizar
  atualizarCurriculo(id: any): void {
    this._apiService.putCurriculo(id, this.curriculo).subscribe(() => {
      this.curriculo = new Curriculo(0, '', 0, '', '', '', '');
      this.listarCurriculos();
      alert('Currículo Atualizado com Sucesso');
    });
  }

  // Deletar
  excluirCurriculo(id: any): void {
    this._apiService.deleteCurriculo(id).subscribe(() => {
      this.curriculo = new Curriculo(0, '', 0, '', '', '', '');
      this.listarCurriculos();
      alert('Currículo Excluído com Sucesso');
    });
  }
}
