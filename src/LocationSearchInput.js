import React from 'react';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    this.autocomplete = new window.google.maps.places.Autocomplete(this.searchInput.current);

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);

    this.map = new window.google.maps.Map(this.mapContainer.current, {
      center: { lat: -33.8688, lng: 151.2195 }, // You can set this to a default location
      zoom: 13
    });

    this.marker = new window.google.maps.Marker({
      map: this.map,
      anchorPoint: new window.google.maps.Point(0, -29)
    });
  }

  handlePlaceChanged = () => {
    const place = this.autocomplete.getPlace();

    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      this.map.fitBounds(place.geometry.viewport);
    } else {
      this.map.setCenter(place.geometry.location);
      this.map.setZoom(17);  // Why 17? Because it looks good.
    }

    this.marker.setPosition(place.geometry.location);
    this.marker.setVisible(true);

    this.props.onSelect(place);
  }

  render() {
    return (
      <div>
        <input ref={this.searchInput} />
        <div ref={this.mapContainer} style={{ height: '300px', width: '500px' }}></div>
      </div>
    );
  }
}

export default LocationSearchInput;