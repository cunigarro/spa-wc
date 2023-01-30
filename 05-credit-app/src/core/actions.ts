import { Application } from "../models/application";
import { ADD_APPLICATION, APPLICATIONS_ADDED, APPLICATION_PAYED, LOAD_APPLICATIONS } from "./action-types";

export function loadApplications() {
  return {
    type: LOAD_APPLICATIONS
  }
}

export function applicationsAdded(applications: Application[]) {
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

export function addApplication(application: Application) {
  return {
    type: ADD_APPLICATION,
    payload: {
      application: application
    }
  }
}
