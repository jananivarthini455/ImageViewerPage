import Carousel from "../Corousel/Corousel";
import "./styles.css";

function App() {
  return (
    <div>
      <>
        <h5 style={{ textAlign: "center" }}>carousel </h5>
        <Carousel>
          <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" />
          <img src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg" />
          <h1 style={{ background: "#206ebd" }}>sample h1</h1>
        </Carousel>
      </>
    </div>
  );
}

export default App;
