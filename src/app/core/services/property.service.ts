import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyListing } from '../models/property-listing';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  serverUrl = 'http://localhost:63899'

  constructor(private httpClient: HttpClient) { }

  GetAllListings() {
    return this.httpClient.get<PropertyListing[]>(`${this.serverUrl}/api/Listing/show`);
  }

  GetListingDetails(id) {
    return this.httpClient.get<PropertyListing>(`${this.serverUrl}/api/Listing/showdetails/${id}`);
  }

  SentRentalApplication(data) {
    return this.httpClient.post(`${this.serverUrl}/api/RentalApplication/add`, data);
  }

  addOpenHouseViewer(data) {
    return this.httpClient.post(`${this.serverUrl}/api/Listing/openhouse/addviewer`, data);
  }

}
