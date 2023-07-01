import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import { usecontextGlobal } from '../Components/utils/global.context';
import '../Components/styles/Favs.css'

const Favs = () => {
  const { dentistState } = usecontextGlobal();

  return (
    <div className='card-grid-container'>
      <h1>Favoritos</h1>
      <div className="card-grid">
        {dentistState.dentistLike.map((dentist) => (
          <Card dentist={dentist} key={dentist.id} />
        ))}
      </div>
    </div>
  );
};

export default Favs;