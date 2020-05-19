import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Injector,SimpleChange, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { QuizService } from '../services/quiz.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'AngularAssignment';
  @ViewChild('quizContainer', {read: ViewContainerRef}) quizContainer: ViewContainerRef;
  quizStarted = false;
  private destroy$ = new Subject();
  constructor(private quizservice: QuizService, private cfr: ComponentFactoryResolver, private injector: Injector) {
    
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async showNewQuestion() {
    this.lazyLoadQuizCard();
  }

  async startQuiz() {
    await this.lazyLoadQuizCard();
    this.quizStarted = true;
  }

  private async lazyLoadQuizCard() {
    const {QuizCardComponent} = await import('../quiz-card/quiz-card.component');
    const quizCardFactory = this.cfr.resolveComponentFactory(QuizCardComponent);
    const {instance} = this.quizContainer.createComponent(quizCardFactory, null, this.injector);
    instance.question = this.quizservice.getNextQuestion();
    instance.questionAnswered.pipe(
      takeUntil(instance.destroy$)
    ).subscribe(() => this.showNewQuestion());
    (instance as any).ngOnChanges({
      question: new SimpleChange(null, instance.question, true)
    });
  }

}
