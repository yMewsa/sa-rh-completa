import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../model/vaga.model';
import { Curriculo } from '../model/curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  private vagasUrl = 'http://localhost:3021/vagas';
  private curriculosUrl = 'http://localhost:3021/curriculos';

  constructor(private http: HttpClient) {}

  // Vagas
  getVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.vagasUrl);
  }

  postVaga(vaga: Vaga): Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.vagasUrl, vaga);
  }

  putVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    const urlUpdate = `${this.vagasUrl}/${id}`;
    return this.http.put<Vaga[]>(urlUpdate, vaga);
  }

  deleteVaga(id: any): Observable<Vaga[]> {
    const urlDelete = `${this.vagasUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDelete);
  }

  // Currículos
  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.curriculosUrl);
  }

  postCurriculo(curriculo: Curriculo): Observable<Curriculo[]> {
    return this.http.post<Curriculo[]>(this.curriculosUrl, curriculo);
  }

  putCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]> {
    const urlUpdate = `${this.curriculosUrl}/${id}`;
    return this.http.put<Curriculo[]>(urlUpdate, curriculo);
  }

  deleteCurriculo(id: any): Observable<Curriculo[]> {
    const urlDelete = `${this.curriculosUrl}/${id}`;
    return this.http.delete<Curriculo[]>(urlDelete);
  }
}

