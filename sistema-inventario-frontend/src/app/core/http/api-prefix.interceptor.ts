import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { Observable } from "rxjs";
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: any;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080';
  }

  private headers() {
    return new HttpHeaders({
      'Authorization': `${sessionStorage.getItem('token')}`
    });
  }

  getOne(ruta: string,id:number): Observable<any> {
    const headers = this.headers();
    return this.http.get<any[]>(`${this.apiUrl}/${ruta}/${id}/`, { headers });
  }

  get(ruta: string): Observable<any[]> {
    const headers = this.headers();
    return this.http.get<any[]>(`${this.apiUrl}/${ruta}`, { headers });
  }

  post(ruta: string, body: any): Observable<any> {
    const headers = this.headers();
    return this.http.post<any>(`${this.apiUrl}/${ruta}`, body, { headers });
  }

  put(ruta: string, body: any): Observable<any> {
    const headers = this.headers();
    return this.http.put<any>(`${this.apiUrl}/${ruta}`, body, { headers });
  }

  delete(ruta: string): Observable<any> {
    const headers = this.headers();
    return this.http.delete<any>(`${this.apiUrl}/${ruta}`, { headers });
  }

  async login(username: string, password: string) {
    const fecher = async (url: string, token: string) => {
      return await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': token
        }
      });
    }

    const token = 'Basic ' + btoa(`${username}:${password}`);
    const response = await fecher(this.apiUrl + '/login', token);

    if (response.ok) {
      let bearerToken = response.headers.get("Authorization") || "";
      sessionStorage.setItem("token", bearerToken);
    }
  }

  // Método para exportar a Excel
  exportExcel(data: any[], fileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  }

  // Método para exportar a PDF
  exportPdf(data: any[], fileName: string): void {
    const doc = new jsPDF();
    (doc as any).autoTable({
      head: [Object.keys(data[0])],
      body: data.map(item => Object.values(item))
    });
    doc.save(`${fileName}.pdf`);
  }
}
