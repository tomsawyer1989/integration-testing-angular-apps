import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo: any) {
    return this.http.post('...', todo).pipe(map((r: any) => r.json()));
  }

  getTodos() { 
    return this.http.get('...').pipe(map((r: any) => r.json()));
  }

  getTodosPromise() {
    // return this.http.get('...').map(r => r.json()).toPromise();

    return this.http.get('...').pipe(map((r: any) => r.json())).toPromise();

    // return new Promise((resolve, reject) => {
    //   this.http.get('...').toPromise()
    //   .then((res: any) => {
    //     resolve(res.map((r: any) => r.json()));
    //   },
    //   msg => {
    //     reject(msg);
    //   });
    // });
  }

  delete(id: any) {
    return this.http.delete('...').pipe(map((r: any) => r.json()));
  }
}