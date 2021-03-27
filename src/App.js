
import './App.css';
import Header from './Header';
import Maps from './Maps';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Route from './Route';
import { useEffect,useState } from 'react';

function App() {
      
  const [latitude,setLatitude] = useState(28.7041);
  const [longitude,setLongitude] = useState(77.1025);

  let formData = {devid:'9cbf248642fd8a63eef69611227ce1bb'};

  const encodeFormData = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}
encodeFormData(formData);

  const fetchApi = ()=>{

    fetch('http://35.197.106.255:3000/api/v1.1/devstat/lastMultiple',
    {method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', 'Accept': 'application/json'},
    body: encodeFormData(formData)})
    .then(response =>{
     return response.json()
    }).then(data => {
      setLatitude(data.data.latitude);
      setLongitude(data.data.longitude);
    })
  }

setInterval(() => {
  fetchApi();
}, 10000);

  useEffect(() => {
    fetchApi();
  },[])

  return (
    <div className="App">
      <Header/>
      <Maps latitude={latitude} longitude={longitude}/>
      <Route/>
      <div className="footer">
      <RadioButtonUncheckedIcon className='footer-icon' fontSize='large'/>
      </div>
      
    </div>
  );
}

export default App;
