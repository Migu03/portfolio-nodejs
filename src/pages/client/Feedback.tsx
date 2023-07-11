import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Feedback = () => {
  var settings = {
    arrows: false,
    dots: true,
    speed: 700,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="feedback section" id="feedback">
        <Slider {...settings} className="feedback__container container grid">
        <div className="feedback__card">
          <img src="https://i.pinimg.com/564x/d5/02/79/d50279de06d6271633d9fe6e6f201260.jpg" alt="" className="feedback__img" />
          <div className="feedback__content">
            <h3 className="feedback__name">Tran Thi Phuong</h3>
            <p className="feedback__description">Hay qua anh zai ui !</p>
          </div>
        </div>
        <div className="feedback__card">
          <img src="https://i.pinimg.com/564x/8c/b2/b2/8cb2b2da71ccf6da037339fde68457d8.jpg" alt="" className="feedback__img" />

          <div className="feedback__content">
            <h3 className="feedback__name">Ngo Van Vu</h3>
            <p className="feedback__description">Ditconme tuyet voi luon</p>
          </div>
        </div>
        <div className="feedback__card">
          <img src="https://i.pinimg.com/564x/5c/5e/2f/5c5e2f2d6af4d5ec8c7fc13a8cf65a3c.jpg" alt="" className="feedback__img" />
          <div className="feedback__content">
            <h3 className="feedback__name">Vu Bao Linh</h3>
            <p className="feedback__description">Hay !!</p>
          </div>
        </div>

        <div className="feedback__card">
          <img src="https://i.pinimg.com/564x/84/e5/6f/84e56fa89585cdaff7d828406b957f52.jpg" alt="" className="feedback__img" />
          <div className="feedback__content">
            <h3 className="feedback__name">Hua Viet Hoang</h3>
            <p className="feedback__description">Hay vai l, mai anh cho 10 goi bot canh !!!!</p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Feedback;
