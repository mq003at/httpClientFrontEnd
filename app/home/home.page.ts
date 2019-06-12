import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';        // httpclient for sending http request
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, private http: HttpClient) {
  }

  a: string;
  sendPost() {
    const getUrl = 'http://17591927.ngrok.io/api/beacon/5cfe015c6cfe0337ac4a2f23';      // change the request URL you want here. 
    this.http.get(getUrl).subscribe((response) => {          // get request syntax. use post, put, delete, etc. for other requests
    console.log(response);
    this.a = JSON.stringify(response);                // convert the object received into JSON strings
});
}
}

