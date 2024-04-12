import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { addFormSubmission, incrementId } from '../states/submission/submission.action';
import { selectId, selectSubmission } from '../states/submission/submission.selector';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  id:number=0;
  taskName: string="";
  dueDate: string = "";
  storyPoint: string = "";
  priority: string ="";
  status: string = "pendingTasks"
  // submissions$: Observable<any[]>;

  isFilledAll:boolean=true

  constructor(private store: Store<AppState>, private toastr: ToastrService){
    // this.submissions$=this.store.select(selectSubmission);
    
    this.store.select(selectId).subscribe(id=>this.id=id);
  }

  onSubmit(): void{

    if(this.taskName ==="" || this.dueDate ==="" || this.storyPoint==="" || this.priority===""){
      this.isFilledAll=false
      this.toastr.error("All Fields are required!","",{
        timeOut: 3000,
        positionClass:"toast-top-right",
      });
      return
    }
    this.isFilledAll=true
    const formData = {
      id:this.id,
      taskName: this.taskName,
      dueDate: this.dueDate,
      storyPoint: this.storyPoint,
      priority: this.priority,
      status: this.status
    };



    console.log(formData);

    this.store.dispatch(addFormSubmission({ formData }));
    this.store.dispatch(incrementId());

    this.toastr.success("Added to the TaskBoard!","",{
      timeOut: 3000,
      positionClass:"toast-top-right",
    });

    this.taskName="";
    this.dueDate="";
    this.priority="";
    this.storyPoint="";


    
  }

}
