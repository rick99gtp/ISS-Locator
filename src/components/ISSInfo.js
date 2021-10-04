import './ISSInfo.css';

const ISSInfo = (props) => {
    console.log(props);
    return (
        <div className='iss-info'>
            <p id='lat'>Latitude: {props.data.latitude}</p>
            <p id='long'>Longitude: {props.data.longitude}</p>
            <p id='alt'>Altitude: {props.data.altitude}</p>
            <p id='vel'>Velocity: {props.data.velocity} mph</p>
        </div>
    )
};

export default ISSInfo;