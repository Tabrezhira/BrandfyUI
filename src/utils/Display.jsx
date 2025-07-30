import Frame, { FrameContextConsumer } from "react-frame-component";
import { useEffect, useState } from 'react';

function Display({ Component }) {
  const [styles, setStyles] = useState('');

  useEffect(() => {
    // Get all style tags from the parent document
    const styleTags = document.querySelectorAll('style');
    const linkTags = document.querySelectorAll('link[rel="stylesheet"]');
    
    let allStyles = '';
    
    // Collect styles from style tags
    styleTags.forEach(tag => {
      allStyles += tag.innerHTML;
    });

    // Collect styles from link tags
    Promise.all(
      Array.from(linkTags).map(link =>
        fetch(link.href)
          .then(res => res.text())
          .catch(err => console.error('Error loading stylesheet:', err))
      )
    ).then(styles => {
      allStyles += styles.join('');
      setStyles(allStyles);
    });
  }, []);

  return (   
    <Frame
      style={{ 
        width: "100%", 
        height: "100%", 
        border: "1px solid #ddd",
        borderRadius: "0.375rem",
        backgroundColor: "white" 
      }}
      head={
        <>
          <style dangerouslySetInnerHTML={{ __html: styles }} />
        </>
      }
    >
      <FrameContextConsumer>
        {() => <Component />}
      </FrameContextConsumer>
    </Frame>
  );
}

export default Display;
