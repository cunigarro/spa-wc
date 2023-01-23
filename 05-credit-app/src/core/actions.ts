import { APPLICATIONS_ADDED, APPLICATION_PAYED } from "./action-types";

export function applicationsAdded(applications: any) {
  return {
    type: APPLICATIONS_ADDED,
    payload: {
      applications: applications
    }
  }
}

export function applicationPayed(id: number) {
  return {
    type: APPLICATION_PAYED,
    payload: {
      id: id
    }
  }
}
