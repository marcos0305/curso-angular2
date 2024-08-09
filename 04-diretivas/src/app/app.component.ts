import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiretivasNgifComponent } from "./diretivas-ngif/diretivas-ngif.component";
import { DiretivaNgswitchComponent } from "./diretiva-ngswitch/diretiva-ngswitch.component";
import { DiretivaNgforComponent } from "./diretiva-ngfor/diretiva-ngfor.component";
import { DiretivaNgstyleComponent } from "./diretiva-ngstyle/diretiva-ngstyle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DiretivasNgifComponent, DiretivaNgswitchComponent, DiretivaNgforComponent, DiretivaNgstyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '04-diretivas';
}
