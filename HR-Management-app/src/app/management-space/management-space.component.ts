import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-management-space',
  templateUrl: './management-space.component.html',
  styleUrls: ['./management-space.component.css']
})
export class ManagementSpaceComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
