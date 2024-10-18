import React from 'react';
import img1 from "./assets/img1.jpg"; // Adjust the path based on where you placed the image
import './Home.css';

const Home = () => {
  return (
    <div className="home-content" style={{ backgroundImage: `url(${img1})` }}>
      <h1>Silent Thunders</h1>
      <p>
        In the heart of the storm, when the skies start to churn,
        A flicker of fire, where the heavens do burn. <br />
        A flash cuts the darkness, a moment so bright, 
        The dance of the lightning ignites the night.
      </p>
      <p>
        With a crack like a whisper, it shatters the calm, 
        Nature's own symphony, fierce yet so warm. <br />
        It weaves through the clouds, a ribbon of light, 
        A fleeting reminder of nature's pure might.
</p>
      <p>
        It paints the horizon with strokes of pure white, <br />
        A canvas of chaos, a glorious sight. 
        Each bolt tells a story, a tale of the air, <br />
        A moment of magic, a spark beyond compare.
      </p>
      <p>
        So heed the storm's call, respect its fierce grace, 
        For lightning is beauty, but also a chase. <br />
        In its brilliant embrace, we find awe and dread, 
        A reminder of power, of the path that we tread.
      </p>
    </div>
  );
};

export default Home;
