import { Application } from "../models/applications";
import { APPLICATIONS_ADDED, APPLICATION_PAYED, LOAD_APPLICATIONS } from "./action-types";

const initialState: Application[] = [];

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case LOAD_APPLICATIONS:
      return state;

    case APPLICATIONS_ADDED:
      return [
        ...state,
        ...action.payload.applications
      ];

    case APPLICATION_PAYED:
      return state.map((app: any) => {
        if(app.id == action.payload.id) {
          app.payed = true;
        }

        return app;
      });

    default:
      return state;
  }
}
