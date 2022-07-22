import React from 'react';
import Navbar from './component/navbar';
import BEM from './component/bem';
import Kabinet from './component/kabinet';
import Kontak from './component/form';
// import Footer from './component/footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BEM />
      <Kabinet />
      <Kontak />
    </div>
  );
}

export default App;
