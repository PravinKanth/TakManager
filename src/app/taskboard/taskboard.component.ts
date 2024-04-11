import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectSubmission, selectSubmissionState } from '../states/submission/submission.selector';


@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrl: './taskboard.component.scss'
})
export class TaskboardComponent {
  submissions$: Observable<any[]>;

  constructor(private store: Store<AppState>){
    // this.submissions$=this.store.select(selectSubmission);
    this.submissions$ = this.store.pipe(select(selectSubmission));
  }

}
