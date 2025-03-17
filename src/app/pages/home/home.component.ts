import { Component, OnInit } from '@angular/core';
import { QuizComponent } from '../../components/quiz/quiz.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [QuizComponent],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}