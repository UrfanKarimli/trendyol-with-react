import React from 'react';
import CeoContent from '../components/CeoContent';
import ComponentsItem from '../components/ComponentsItem';
import "../styles/pages/home.scss"
import ComponentsItem2 from '../components/ComponentsItem2';
import SliderItems from '../components/SliderItems';
import LinkHeader from '../components/LinkHeader';


const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="component-list">
          <SliderItems/>
          <LinkHeader/>
          <ComponentsItem />
          <ComponentsItem />
          <ComponentsItem />
          <ComponentsItem />
          <ComponentsItem />
          <ComponentsItem />
          <ComponentsItem2 />
        </div>



        <CeoContent />
      </div>

    </div>
  )
}

export default Home