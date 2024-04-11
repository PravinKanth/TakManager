import { createReducer, on } from "@ngrx/store"
import { addFormSubmission, completeTask, deletetask, incrementId, pendingtask } from "./submission.action";


export interface SubmissionState{
    submissions: any[];
}

export const initialSubmissionState: SubmissionState = {
    submissions: []
}


export const submissionReducer = createReducer(
    initialSubmissionState,
    on(addFormSubmission, (state, { formData }) => ({ 
        submissions: [...state.submissions, formData] 
    })),
    on(deletetask, (state, action)=>(
        {
            submissions: state.submissions.filter(submission=> submission.id !==action.SubmissionId)
        }
    )),
    on(completeTask,(state,action) => ({
    submissions:state.submissions.map((prop)=>{
        if(prop.id===action.completedId){
            return {...prop, status:"completedTasks"}
        }

        return {...prop}

    })

    })),

    on(pendingtask,(state,action) => ({
        submissions:state.submissions.map((prop)=>{
            if(prop.id===action.pendingId){
                return {...prop, status:"pendingTasks"}
            }
    
            return {...prop}
    
        })
    
        }))

    


);  


export interface IncrementState{
    id:number;
}


export const initialIncrementState : IncrementState = {
    id:0
}

export const incrementReducer = createReducer(
    initialIncrementState,
    on(incrementId, state => ({
        id:state.id+1
    }))

);

