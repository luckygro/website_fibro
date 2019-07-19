import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Contact from './components/Contact';


function Home() {
  return (
  	<div className="wrapper">
  		<Header />
  		<Content />
  		<Contact />
  	</div>
  );
}

export default Home;