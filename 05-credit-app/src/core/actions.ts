import { BUG_ADDED, BUG_REMOVED } from "./action-types";

export function bugAdded(description: string) {
  return {
    type: BUG_ADDED,
    payload: {
      description: description
    }
  }
}

export function bugRemoved(id: number) {
  return {
    type: BUG_REMOVED,
    payload: {
      id: id
    }
  }
}
