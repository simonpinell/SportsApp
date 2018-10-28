import { Injectable } from '@angular/core';
import { Exercise } from './exercise';
import { EXERCISES } from './mock-exercises';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private messageService: MessageService) { }

  getexercises(): Observable<Exercise[]> {
    this.messageService.add('exerciseService: fetched exercises');
    return of(EXERCISES);
  }

  getexercise(id: number): Observable<Exercise> {
    // TODO: send the message _after_ fetching the exercise
    this.messageService.add(`Selected exercise: ${id}`);
    return of(EXERCISES.find(exercise => exercise.id === id));
  }

}
