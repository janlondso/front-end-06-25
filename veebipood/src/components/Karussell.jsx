import Carousel from 'react-bootstrap/Carousel';

function Karussell() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScT5qZSTF3-Q8J0CAVGfRu8hrbG_RdCroxEg&s"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP1Odo_PRR5B8K1hefxxYyfbTBbNoMMZtBRw&s"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwaj75lR24XwRaPR-Zj3aTndW0LXh9i_0Pw&s"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Karussell;