import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'onedrive-camera-roll-cleanup';

  constructor(private authService: AuthService) { }

  async ngOnInit() {
    if (!this.authService.authenticated) {
      return await this.authService.signIn();
    }
  }
}
