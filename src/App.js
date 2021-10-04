import './App.css';
import ISSInfo from './components/ISSInfo';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function App() {
  const [data, setData] = useState('');

  const getData = async function getISSData() {
    const iss_info = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    const iss_data = await iss_info.json();
    setData(iss_data);
  };

  useEffect(() => {
    if(!data) {
      getData();
    }
  }, []);

  return (
    <div className="App">
      <img src="https://www.nasa.gov/sites/default/files/styles/card_page_banner/public/thumbnails/image/iss_banner_webage_20191030.jpg" alt="International Space Station" />
      <ISSInfo data={data}/>
    </div>
  );
}

export default App;
