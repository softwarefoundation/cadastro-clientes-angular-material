import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, MatToolbar, MatIconModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true
})
export class AppComponent {
    title = 'cadastro-pessoas-angular-material';
}
