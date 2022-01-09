import { Component } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'cencosud_test_front';
  tittle = 'app';
  cities : any;
  isLoaded : boolean;  

  constructor() {     
    this.cities = ['Santiago', 'Zurich', 'Auckland', 'Sydney', 'London', 'Georgia']
    this.isLoaded = false         
  }
  
  ws = 'ws://localhost:8000/ws/cities'
  subject = webSocket(this.ws);
  messages : any = [];
  weathers: any = [];

  ngOnInit() {
      this.get_cities();     
  }        

  get_cities(){
    this.subject.subscribe(messages =>{
      this.isLoaded = true
      this.messages = messages
      // console.log(messages)
    })
  }
}
