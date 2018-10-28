import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  exercises: Exercise[];

  constructor(private exerciseService: ExerciseService, public appRouter: Router) { }

  ngOnInit() {
    this.getexercises();
  }

  getexercises(): void {
    this.exerciseService.getexercises().subscribe(exercises => this.exercises = exercises);

  }
}
