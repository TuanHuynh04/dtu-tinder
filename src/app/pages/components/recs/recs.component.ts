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
      "id": 0,
      "picture": "https://placehold.it/350x349",
      "age": 23,
      "name": "Candace Coffey",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 1,
      "picture": "https://placehold.it/350x349",
      "age": 40,
      "name": "Katrina Potter",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 2,
      "picture": "https://placehold.it/350x349",
      "age": 35,
      "name": "Genevieve Hardy",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 3,
      "picture": "https://placehold.it/350x349",
      "age": 30,
      "name": "Cabrera Jefferson",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 4,
      "picture": "https://placehold.it/350x349",
      "age": 37,
      "name": "Guadalupe Keith",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 5,
      "picture": "https://placehold.it/350x349",
      "age": 21,
      "name": "Richardson Tillman",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 6,
      "picture": "https://placehold.it/350x349",
      "age": 25,
      "name": "Burton Wynn",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 7,
      "picture": "https://placehold.it/350x349",
      "age": 21,
      "name": "Eileen Higgins",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 8,
      "picture": "https://placehold.it/350x349",
      "age": 31,
      "name": "Angeline Gill",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 9,
      "picture": "https://placehold.it/350x349",
      "age": 37,
      "name": "Dejesus Mcintyre",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 10,
      "picture": "https://placehold.it/350x349",
      "age": 34,
      "name": "Peters Ruiz",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 11,
      "picture": "https://placehold.it/350x349",
      "age": 37,
      "name": "Beverley May",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 12,
      "picture": "https://placehold.it/350x349",
      "age": 27,
      "name": "Manuela Drake",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 13,
      "picture": "https://placehold.it/350x349",
      "age": 23,
      "name": "Trujillo Daniels",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 14,
      "picture": "https://placehold.it/350x349",
      "age": 31,
      "name": "Nichole Holder",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 15,
      "picture": "https://placehold.it/350x349",
      "age": 28,
      "name": "Vasquez Cochran",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 16,
      "picture": "https://placehold.it/350x349",
      "age": 22,
      "name": "Pitts Doyle",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 17,
      "picture": "https://placehold.it/350x349",
      "age": 30,
      "name": "Emerson Williamson",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 18,
      "picture": "https://placehold.it/350x349",
      "age": 33,
      "name": "Conner Bell",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 19,
      "picture": "https://placehold.it/350x349",
      "age": 21,
      "name": "Janie Stokes",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 20,
      "picture": "https://placehold.it/350x349",
      "age": 33,
      "name": "Ingrid Whitney",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 21,
      "picture": "https://placehold.it/350x349",
      "age": 24,
      "name": "Janis Rowe",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 22,
      "picture": "https://placehold.it/350x349",
      "age": 34,
      "name": "Campos Cooke",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 23,
      "picture": "https://placehold.it/350x349",
      "age": 39,
      "name": "Bentley Foley",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 24,
      "picture": "https://placehold.it/350x349",
      "age": 31,
      "name": "Frieda Knapp",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 25,
      "picture": "https://placehold.it/350x349",
      "age": 39,
      "name": "Blackburn Kirk",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 26,
      "picture": "https://placehold.it/350x349",
      "age": 26,
      "name": "Love Mathis",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 27,
      "picture": "https://placehold.it/350x349",
      "age": 40,
      "name": "Meagan Knight",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 28,
      "picture": "https://placehold.it/350x349",
      "age": 34,
      "name": "Robertson Whitley",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 29,
      "picture": "https://placehold.it/350x349",
      "age": 37,
      "name": "Haney Dickerson",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 30,
      "picture": "https://placehold.it/350x349",
      "age": 28,
      "name": "Benton Walton",
      "gender": "male",
      "description": "Hello everyone"
    },
    {
      "id": 31,
      "picture": "https://placehold.it/350x349",
      "age": 27,
      "name": "Mindy Obrien",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 32,
      "picture": "https://placehold.it/350x349",
      "age": 37,
      "name": "Ramona Wilcox",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 33,
      "picture": "https://placehold.it/350x349",
      "age": 38,
      "name": "Diann Chaney",
      "gender": "female",
      "description": "Hello everyone"
    },
    {
      "id": 34,
      "picture": "https://placehold.it/350x349",
      "age": 23,
      "name": "Rodgers Delgado",
      "gender": "male",
      "description": "Hello everyone"
    }
  ];


  // tslint:disable-next-line: typedef
  cardAnimation(value) {
    this.parentSubject.next(value);
  }

  ngOnInit(): void {}
}
