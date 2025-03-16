import { Component, OnInit } from '@angular/core';
import { QuizzComponent } from '../../components/quiz/quiz.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [QuizzComponent],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}