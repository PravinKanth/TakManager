import { createAction, props } from "@ngrx/store";

export const addFormSubmission = createAction(
    '[Form] Add Form Submission',
    props<{ formData: { id: number; taskName: string; dueDate: string; storyPoint: string; priority: string; status: string} }>()

);  


export const incrementId = createAction(
    "[ID] Increment"
);


export const deletetask = createAction(
    "[Delete] Delete Task",
    props<{SubmissionId:number}>()
);

export const completeTask = createAction(
    "[Completed] Completed Task",
    props<{completedId:number}>()
);