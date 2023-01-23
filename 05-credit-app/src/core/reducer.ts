import { BUG_ADDED, BUG_REMOVED } from "./action-types";

const initialState: any = [];

let lastId = 0;

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false
        }
      ];

    case BUG_REMOVED:
      return state.filter(bug => bug.id !== action.payload.id);

    default:
      return state;
  }
}
