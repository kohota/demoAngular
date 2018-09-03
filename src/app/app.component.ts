import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  test : string ="Test";
  title = 'Demo-Model';

  ngOnInit() {
    this.test="set une valeur";
  }
}
