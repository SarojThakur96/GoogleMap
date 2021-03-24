
import './App.css';
import Header from './Header';
import Map from './Map';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Route from './Route';
import { useEffect,useState } from 'react';

function App() {
      
  const [items,setItems] = useState([]);

  const fetchApi = ()=>{

    fetch('http://35.197.106.255:3000/api/v1.1/devstat/lastMultiple?devid=87d25631aec6dc72916c395b0e4ba7cf',{method: 'POST'}).then(response =>{
      response.json()
    }).then(data => {
      setItems(data);
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
      <Map res={items}/>
      <Route/>
      <div className="footer">
      <RadioButtonUncheckedIcon className='footer-icon' fontSize='large'/>
      </div>
      
    </div>
  );
}

export default App;
