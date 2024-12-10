import './App.css';
import Accordian from './components/accordian'
import ImageSlider from './components/image-slider';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color'
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Accordian components */}
      {/* <Accordian /> */}
      {/* Random color compontent*/}
      {/* <RandomColor /> */}

      {/* Star rating components */}
      {/* <StarRating noOfStars={10} /> */}

      {/* image slider  components*/}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}

      {/* QR-CODE components */}
      <QRCodeGenerator />

    </div>
  );
}

export default App;
