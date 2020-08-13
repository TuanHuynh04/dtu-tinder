import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.css']
})
export class ButtonBoxComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
