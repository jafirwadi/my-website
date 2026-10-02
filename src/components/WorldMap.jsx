import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import worldData from '../data/world-110m.json'

export default function WorldMap({ countryCode, coords }) {
  return (
    <ComposableMap projection="geoEqualEarth" projectionConfig={{ scale: 148 }} className="h-auto w-full">
      <Geographies geography={worldData}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isActive = geo.id === countryCode
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                strokeWidth={0.5}
                className={`cursor-default outline-none transition-colors duration-700 ease-out ${
                  isActive ? 'fill-gold stroke-cream/40' : 'fill-cream/10 stroke-cream/15 hover:fill-cream/20'
                }`}
              />
            )
          })
        }
      </Geographies>

      {coords && (
        <Marker coordinates={coords}>
          <circle r={5} className="fill-gold stroke-forest" strokeWidth={2} />
          <circle r={5} className="fill-gold">
            <animate attributeName="r" values="5;18;5" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </Marker>
      )}
    </ComposableMap>
  )
}
