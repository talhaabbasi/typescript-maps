import { User } from "./User"
import { Company } from "./Company"
export class CustomMap {
  private googleMap: google.maps.Map

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    })
  }

  addMarker(type: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: type.location.lat,
        lng: type.location.lng,
      },
    })
  }
}
