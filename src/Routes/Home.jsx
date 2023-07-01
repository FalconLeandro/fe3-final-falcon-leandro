import React from 'react';
import Card from '../Components/Card';
import { usecontextGlobal } from '../Components/utils/global.context';
import '../Components/styles/Home.css'

const Home = () => {
  const { dentistState } = usecontextGlobal();

  const renderDentists = () => {
    return dentistState.dentistsList.map(dentist => (
      <Card dentist={dentist} key={dentist.id} />
    ));
  };

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>{renderDentists()}</div>
    </main>
  );
};

export default Home;