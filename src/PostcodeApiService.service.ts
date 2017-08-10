import { Injectable, InjectionToken } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PostcodeApiService {

  private apiToken: string = null;
  private apiUrl = "https://api.postcodeapi.nu/v2/";

  constructor (private http: Http) {}

  public setApiToken(apiToken: string) {
    this.apiToken = apiToken;
  }

  private getHeaders() : RequestOptions {
    if(this.apiToken != null) {
      let headers = new Headers({ 'X-Api-Key': this.apiToken });
      return new RequestOptions({ headers: headers });
    } else {
      throw new ReferenceError("No API Token set. Use .setApiToken(apiToken: string)");
    }
  }

  public getAddresses(postcode: string, number: string = null) : Observable<any> {

        let url = "addresses/?postcode=" + postcode;
        if(number != null) {
          url += "&number=" + number;
        }

        return this.http.get(this.apiUrl + url, this.getHeaders())
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getAddress(id: string) : Observable<any> {
        return this.http.get(this.apiUrl + "addresses/" + id + "/", this.getHeaders())
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  public getPostcodes(postcode: string) : Observable<any> {
        return this.http.get(this.apiUrl + "postcodes/" + postcode + "/", this.getHeaders())
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getPostcode(postcode: number = null) : Observable<any> {

        let url = "postcodes/";
        if(postcode != null) {
          url += "?postcodeArea=" + postcode;
        }

        return this.http.get(this.apiUrl + url, this.getHeaders())
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
