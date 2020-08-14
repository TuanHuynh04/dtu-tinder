import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recs',
  templateUrl: './recs.component.html',
  styleUrls: ['./recs.component.css'],
})
export class RecsComponent implements OnInit {
  parentSubject: Subject<string> = new Subject();

  constructor() {}

  users = [
    {
      "name": "Antonino Beliles",
      "gender": "male",
      "avatar": "https://tinyfac.es/data/avatars/AEF44435-B547-4B84-A2AE-887DFAEE6DDF-500w.jpeg",
      "age": 16,
      "status": "Lorem asbaij ashh23 asoa",
      "online": true
    },
    {
      "name": "Austen Johnigan",
      "gender": "male",
      "avatar": "https://tinyfac.es/data/avatars/FBEBF655-4886-455A-A4A4-D62B77DD419B-500w.jpeg",
      "age": 23,
      "status": "Lorem asbaij ashh23 asoa",
      "online": true
    },
    {
      "name": "Warren Babers",
      "gender": "male",
      "avatar": "https://tinyfac.es/data/avatars/2DDDE973-40EC-4004-ABC0-73FD4CD6D042-500w.jpeg",
      "age": 16,
      "status": "Lorem asbaij ashh23 asoa",
      "online": false
    },
    {
      "name": "Jewelle Fisk",
      "gender": "female",
      "avatar": "https://tinyfac.es/data/avatars/03F55412-DE8A-4F83-AAA6-D67EE5CE48DA-500w.jpeg",
      "age": 18,
      "status": "Lorem asbaij ashh23 asoa",
      "online": false
    },
    {
      "name": "Brodie Arashiro",
      "gender": "male",
      "avatar": "https://tinyfac.es/data/avatars/344CFC24-61FB-426C-B3D1-CAD5BCBD3209-500w.jpeg",
      "age": 11,
      "status": "Lorem asbaij ashh23 asoa",
      "online": false
    },
    {
      "name": "Friedrich Brauch",
      "gender": "male",
      "avatar": "https://tinyfac.es/data/avatars/1C4EEDC2-FE9C-40B3-A2C9-A038873EE692-500w.jpeg",
      "age": 18,
      "status": "Lorem asbaij ashh23 asoa",
      "online": true
    },
    {
      "name": "Sibyl Agers",
      "gender": "male",
      "avatar": "https://tinyfac.es/data/avatars/282A12CA-E0D7-4011-8BDD-1FAFAAB035F7-500w.jpeg",
      "age": 11,
      "status": "Lorem asbaij ashh23 asoa",
      "online": true
    },
    {
      "name": "Duffie Caffey",
      "gender": "male",
      "avatar": "https://tinyfac.es/data/avatars/B3CF5288-34B0-4A5E-9877-5965522529D6-500w.jpeg",
      "age": 23,
      "status": "Lorem asbaij ashh23 asoa",
      "online": true
    },
    {
      "name": "Ferdie Reager",
      "gender": "male",
      "avatar": "https://tinyfac.es/data/avatars/E0B4CAB3-F491-4322-BEF2-208B46748D4A-500w.jpeg",
      "age": 19,
      "status": "Lorem asbaij ashh23 asoa",
      "online": false
    },
    {
      "name": "Ferdy Pooyouma",
      "gender": "male",
      "avatar": "https://tinyfac.es/data/avatars/BA0CB1F2-8C79-4376-B13B-DD5FB8772537-500w.jpeg",
      "age": 19,
      "status": "Lorem asbaij ashh23 asoa",
      "online": true
    },
    {
      "name": "Jerrome Dubyk",
      "gender": "male",
      "avatar": "https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-500w.jpeg",
      "age": 22,
      "status": "Lorem asbaij ashh23 asoa",
      "online": true
    },
    {
      "name": "Horatia Kuick",
      "gender": "female",
      "avatar": "https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-500w.jpeg",
      "age": 17,
      "status": "Lorem asbaij ashh23 asoa",
      "online": false
    },
    {
      "name": "Caesar Quint",
      "gender": "male",
      "avatar": "https://tinyfac.es/data/avatars/852EC6E1-347C-4187-9D42-DF264CCF17BF-500w.jpeg",
      "age": 17,
      "status": "Lorem asbaij ashh23 asoa",
      "online": true
    }
  ];


  // tslint:disable-next-line: typedef
  cardAnimation(value) {
    this.parentSubject.next(value);
  }

  ngOnInit(): void {}
}
