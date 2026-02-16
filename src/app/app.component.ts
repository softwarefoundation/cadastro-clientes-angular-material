import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MatButton, MatToolbar],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true
})
export class AppComponent {
    title = 'cadastro-pessoas-angular-material';
}
