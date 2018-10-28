import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  exercises: Exercise[] = [];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.getexercises();
  }

  getexercises(): void {
    this.exerciseService.getexercises()
      .subscribe(exercises => this.exercises = exercises.slice(1, 5));
  }
}