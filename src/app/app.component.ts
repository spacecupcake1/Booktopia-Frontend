import { Component } from '@angular/core';
import { AppAuthService } from './service/app.auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  constructor(private authService: AppAuthService) {
  }

  public logout() {
    this.authService.logout();
  }
}
