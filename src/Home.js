import { useState } from 'react';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';
import './App.css';

function Home () {
    const [clothes, setClothes] = useState(data);
  const newClothes = (searchTerm) => {
    const filteredClothes = data.filter(item => item.searchTerm === searchTerm);
    setClothes (filteredClothes);
  }
  return (
    <div>
      <div className='container'>
        <h2 className='back'>FREE STANDARD SHIPPING ON ORDERS FROM $50</h2>
      </div>
     
      <Buttons filters={newClothes}/>
  
      <Clothes products={clothes}/>
    </div>
  );
}
export default Home;