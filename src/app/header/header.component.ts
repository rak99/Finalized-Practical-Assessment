import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import config from '../config/config.json';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Practical-Assessment';
  sanitizedUrl = {};

  constructor(private http: HttpClient, sanitizer: DomSanitizer) { 
    this.sanitizedUrl = sanitizer.bypassSecurityTrustUrl(config.baseUrl);
  }

  ngOnInit() {
  }

}
