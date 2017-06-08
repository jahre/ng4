import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public postComments: any;
  constructor(){
    this.postComments = [
      {
        text: "1",
        comments: [
          {
            text: "1.1",
            comments: [
              {
                text: "1.1.1 "
              }
            ]
          },
            {
            text: "1.2",
            comments: [
              {
                text: "1.2.1"
              }
            ]
          }
        ]
      },
      {
        text: "2",
        comments: [
          {
            text: "2.1",
            comments: [
              {
                text: "2.1.1 "
              }
            ]
          },
            {
            text: "2.2",
            comments: [
              {
                text: "2.2.1"
              }
            ]
          }
        ]
      }
    ]
  }
}
