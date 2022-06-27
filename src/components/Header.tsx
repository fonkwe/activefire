import React from 'react'

export default function Header() {
  return (
    <div className="Map-container">
    <h2 className="map-h2">Places With ActiveFires</h2>
    <iframe
       width="100%"
       height="100%"
       title="map"
       className="absolute inset-0"
       frameBorder={0}
       marginHeight={0}
       marginWidth={0}
       style={{ filter: "opacity(0.7)" }}
       src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
     />

   </div>
  )
}
