import { FaGithub } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import Frame, { FrameContextConsumer } from "react-frame-component";
import Navbar from './Navbar';

function Navbar1({ viewportSize }) {
  const [stars, setStars] = useState(null);
  // Example of using axios to fetch data
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/TabrezHira/Full-Stack-Book-Store-Application'
        );
        setStars(response.data.stargazers_count);
      } catch (error) {
        console.error('Error fetching GitHub stars:', error.message);
      }
    };

    fetchStars();
  }, []);

  const [mobileOpen, setMobileOpen] = useState(false);

  // Determine if we should show mobile view
  const isMobileView = viewportSize === 'mobile' || viewportSize === 'small';

  return (
   
  <Frame
      style={{ width: "100%", height: "300px", border: "1px solid #ddd" }}
      head={
        <>
          {/* Tailwind CDN for iframe */}
          <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
            rel="stylesheet"
          />
        </>
      }
    >
      <FrameContextConsumer>
        {() => <Navbar />}
      </FrameContextConsumer>
    </Frame>
 
  );
}

export default Navbar1;
