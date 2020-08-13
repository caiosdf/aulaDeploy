import { Component } from '@angular/core';
import { TextServiceService } from './Services/text-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title;


  constructor( public TextService: TextServiceService ){}

  ngOnInit(): void {
    this.getText();
  }

  getText(): void {
    this.TextService.getText().subscribe((res) => {
      this.title = res;
    });
  }
}
