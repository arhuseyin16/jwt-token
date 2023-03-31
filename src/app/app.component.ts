import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jwt-token';
  token: string | null = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJUaXRsZSI6IkZyb250ZW5kIERldmVsb3BlciIsIkRlcGFydG1lbnQiOiJ" +
    "CaWxnaSBTaXN0ZW1sZXJpIiwiRGlzcGxheU5hbWUiOiJIdXNleWluIEFSIiwiQWNjb3VudE5hbWUiOiJodXNleWluLmFyIiwiVXNlckVtYWlsIjoiaHVzZXlpbi5hc" +
    "kBiZXltZW4uY29tIiwiVXNlckNvZGUiOiJodXNleWluLmFyIiwicm9sZSI6WyJQb2x5Z29uQWRtaW4iLCJUcmFja2luZ09yZGVyVXNlciIsIlN0b3JlVmlzaXRBZG1p" +
    "biIsIkFkbWluIiwiQ2FyZ29BZG1pbiJdLCJuYmYi" +
    "OjE2NzgyNzUyMjQsImV4cCI6MTY3OTEzOTIyNCwiaWF0IjoxNjc4Mjc1MjI0fQ.yb00_Ce_Q8wJytoo0AM1aDBD-tQQNBPL0XVXiegOtKQ";
  table_Key: any[] = [];
  table_Value: any[] = [];

  converter() {
    var base64Url = this.token?.split('.')[1];
    var base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64 ? base64 : '').split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  jwtPayload() {
    this.table_Value = [];
    this.table_Key = [];
    this.table_Key = Object.keys(this.converter());
    this.table_Value = Object.values(this.converter());
  }
}
