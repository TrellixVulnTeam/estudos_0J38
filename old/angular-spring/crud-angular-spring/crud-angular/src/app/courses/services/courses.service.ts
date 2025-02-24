import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = ''

  constructor(private httpClient: HttpClient) { }

  list(): Course[] {

    return [
      { _id: '1', name: 'Angular', category: 'front-end'}
    ]
  }
}
