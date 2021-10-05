import './App.css';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  const [data, setData] = useState('');
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [dataReady, setDataReady] = useState(false);
    
  const getData = async function getISSData() {
    const iss_info = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    const iss_data = await iss_info.json();
    setData(iss_data);
  };

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, []);

  useEffect(() => {
    if(data) {
      const thisPos = [data.latitude, data.longitude];

      setLat(data.latitude);
      setLon(data.longitude);

      setDataReady(true);

      setTimeout(() => {
        getData();
      }, 2000);
    }

  }, [data]);

  return (
    <div className="App">
      <img src="https://www.nasa.gov/sites/default/files/styles/card_page_banner/public/thumbnails/image/iss_banner_webage_20191030.jpg" alt="International Space Station" />
      {dataReady ? <MapContainer
        style={{ height: '500px', width: '800px' }}
        center={[lat, lon]}
        zoom={5}
        scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lon]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>}
        </MapContainer> : null
      }
    </div>
  );
}

export default App;
