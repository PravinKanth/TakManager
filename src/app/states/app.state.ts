import { IncrementState, SubmissionState } from "./submission/submission.reducer";

export interface AppState{
    submission: SubmissionState,
    id:IncrementState,  
}

