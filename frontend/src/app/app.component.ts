import { Component } from '@angular/core';
import { faCoffee, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Animus Lucrandi';
  faCoffee = faCoffee;
  pencil=faPencil;
}
