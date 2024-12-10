import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = 'https://api.web3forms.com/submit';

  constructor(private http: HttpClient) { }

  postMessage(input: any) {
    return this.http.post(this.api, input, {responseType: 'text'}).pipe(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
  }
}
