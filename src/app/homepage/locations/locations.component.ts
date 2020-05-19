import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
import * as moment from 'moment';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  selectedTab = 'takeaway';
  searchQuery: string = '';
  selectedLocation = '';

  loading = false;

  /* Google maps settings */
  zoom = 12
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  center = {
    lat: 13.7120471,
    lng: -89.2068905,
  }

  marker: any = {}
  displayMarker = false;

  locations = [];

  constructor(private locationService: LocationsService) { }

  ngOnInit(): void {
    this.getLocations();
  }

  selectTab(value: string) {
    if (value != this.selectedTab) {
      this.selectedTab = value;
      this.getLocations();
    }
  }

  getLocations() {
    this.locations = [];
    this.toggleLoading();
    this.locationService.getLocations(this.selectedTab, this.searchQuery).subscribe(response => {
      this.fixDateFormat(response.body.data);
      this.toggleLoading();
    });
  }

  toggleLoading() {
    this.loading = !this.loading;
  }

  fixDateFormat(data: any) {
    data.forEach(element => {
      let openingTime = element.opening_time.split(':');
      let openingHour = openingTime[0];
      let openingMinutes = openingTime[1];

      element.opening_time = moment().startOf("day").add(openingHour, 'hour').add(openingMinutes, 'minute');

      let closingTime = element.closing_time.split(':');
      let closingHour = closingTime[0];
      let closingMinutes = closingTime[1];

      element.closing_time = moment().startOf("day").add(closingHour, 'hour').add(closingMinutes, 'minute');
    });

    this.locations = data;
  }

  selectLocation(location) {
    this.selectedLocation = location.id;

    this.displayMarker = true;
    this.marker.position = {
      lat: +location.latitude,
      lng: +location.longitude
    }

    this.marker.title = location.name;

    this.marker.options = { animation: google.maps.Animation.BOUNCE };
  }

}
