import { APPLICATIONS_ADDED, APPLICATION_PAYED, LOAD_APPLICATIONS } from "./action-types";

export function loadApplications() {
  return {
    type: LOAD_APPLICATIONS
  }
}

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
