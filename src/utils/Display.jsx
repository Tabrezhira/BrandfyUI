import Frame, { FrameContextConsumer } from "react-frame-component";
import Navbar from '../components/Home/Navbar';

function Display({ Component }) {

  return (   

  <Frame
      style={{ width: "100%", height: "100%", border: "1px solid #ddd" }}
      head={
        <>
          {/* Tailwind CDN for iframe */}
          {/* <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
            rel="stylesheet"
          /> */}
          <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
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
