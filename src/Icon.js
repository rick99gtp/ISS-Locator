import L from 'leaflet';
import icon from './iss.png';

const Icon = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconAnchor: [30, 30],
    iconSize: [60, 60]
});

export default Icon;