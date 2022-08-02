import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup() {
    this.http.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]"
    );
  }
}
