import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CategoryList from './components/CategoryList';
import VideoList from './components/VideoList';
import Preload from './components/Preload';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="container">
      {loading && <Preload />}
      <header>
        <Navbar />
      </header>
      <main className="main-layout">
        <div className="screen-overlay"></div>
        <Sidebar />
        <div className="content-wrapper">
          <CategoryList />
          <VideoList />
        </div>
      </main>
    </div>
  );
};

export default App;