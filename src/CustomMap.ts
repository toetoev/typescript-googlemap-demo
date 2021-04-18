export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  mapperContent(): string;
}

export class CustomMap {
  private googlemap: google.maps.Map;

  constructor(argument: string) {
    this.googlemap = new google.maps.Map(document.getElementById(argument), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMaker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googlemap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.mapperContent(),
      });

      infoWindow.open(this.googlemap, marker);
    });
  }
}
