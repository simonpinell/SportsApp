import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  exercises: Exercise[];
  
  constructor(private exerciseService: ExerciseService, public appRouter: Router) { }
  
  ngOnInit() {
    this.getexercises();
  }  

  getexercises(): void {
    this.exerciseService.getexercises().subscribe(exercises => this.exercises = exercises);

  }
}
