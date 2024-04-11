import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectSubmission } from '../states/submission/submission.selector';
import { completeTask, deletetask, pendingtask } from '../states/submission/submission.action';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrl: './row.component.scss'
})
export class RowComponent {
  submissions$: Observable<any[]>;
  @Input() tasks: string; 

  constructor(private store: Store<AppState>){
    this.submissions$ = this.store.pipe(select(selectSubmission));
    // this.submissions$=this.store.select(selectSubmission);
  }

  getColor(prop:string): string{
    if(prop==="High"){
      return "red"
    }
    else if (prop==="Medium"){
      return "orange"
    }

    else if (prop==="Low"){
      return "green"
    }

return "white"
    
  }


  deleteTask(SubmissionId:number):void{
    this.store.dispatch(deletetask({ SubmissionId }))

  }

  completedTask(completedId: number): void{
    this.store.dispatch(completeTask({completedId}));
  }

  pendingTask(pendingId: number): void{
    this.store.dispatch(pendingtask({pendingId}));
  }
}
