import { Injectable } from "@angular/core";

@Injectable() // Not necessary right now, but a good practice for the future.
export class LoggingService {
  logStatusChange(status: string) {
    console.log("A server status changed, new status: " + status);
  }
}
