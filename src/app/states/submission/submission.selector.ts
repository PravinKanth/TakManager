import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectSubmissionState = (state:AppState) => state.submission;

export const selectSubmission = createSelector(
    selectSubmissionState,
    (state) => state.submissions
)


export const selectIdState = (state : AppState) => state.id;

export const selectId = createSelector(
    selectIdState,
    (idstate) => idstate.id
)