import React from 'react';
import CeoContent from '../components/CeoContent';
import ComponentsItem from '../components/ComponentsItem';
import "../styles/pages/home.scss"


const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="component-list">
        <ComponentsItem/>
        <ComponentsItem/>
        <ComponentsItem/>
        <ComponentsItem/>
        <ComponentsItem/>
        <ComponentsItem/>

        </div>



      <CeoContent/>
      </div>
     
    </div>
  )
}

export default Home