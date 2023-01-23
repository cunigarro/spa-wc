import { APPLICATIONS_ADDED, APPLICATION_PAYED } from "./action-types";

const initialState: any = [];

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
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
