import React from 'react';
import styled from "styled-components";
import MapContent from "../components/MapContent";
import LocationList from "../components/LocationList";

const MapViewWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
function MapView() {
  return (
    <MapViewWrapper>
      <LocationList />
      <MapContent />
    </MapViewWrapper>
  )
}

export default MapView;
