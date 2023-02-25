import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
   {{url}}

   <button (click)="sendGetRequest()">GET Users</button>
   {{id}}
   {{repos_url}}
  `,
})
export class App {
  name = 'Angular';
  url = 'https://api.github.com/users/harish26verma';
  id: any;
  repos_url: any;
  constructor(public http: HttpClient) {}
  ngOnit() {}
  sendGetRequest() {
    this.http.get(this.url).subscribe((item: any) => {
      console.log(item);
      this.id = item.id;
      this.repos_url = item.repos_url;
  
      this.http.get(this.repos_url).subscribe((repos: any) => {
        console.log(repos);
         });
        });
}
}

bootstrapApplication(App);
