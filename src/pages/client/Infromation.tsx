import React from 'react'

type Props = {}

const Infromation = (props: Props) => {

  return (
    <section className="section" id="section--1">
      <div className="container">
        <div className='infomation'>
          <div className="imagePtran">
            <img src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/361092866_936111637483050_285279259948167360_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=dKaQVcdCEE4AX8_9gJV&_nc_ht=scontent.fhan5-10.fna&oh=03_AdSexIderygYuFdd9cawvOwgGUqAw3VUNbuXLvAQLOhLhA&oe=64D78BE8" alt="Your Image" />
          </div>
          <div className="info">
            <div className="btn-container">
              <button className="btn-info" disabled>
                <i className="fas fa-user"></i>
                <p className="name">Trần Thị Phương</p>
              </button>
              <button className="btn-info" disabled>
                <i className="fas fa-school"></i>
                <p className="name">FPT Polytechnic</p>
              </button>
              <button className="btn-info" disabled>
                <i className="fas fa-map-marker-alt"></i>
                <p className="name">Hanoi, Vietnam</p>
              </button>
            </div>
            <p className="section__header"><i className='bx bxs-leaf' style={{ color: '#56e948' }} ></i> I'm Phuong, a 20-year-old web design student at FPT Polytechnic in Hanoi.
              I'm passionate about programming and design, and I aim to create high-quality web products for users.</p>
              <a href="#contact"><button className='btn-talk'>Let's collaborate !</button></a>
          </div>
          
        </div>
      </div>
    </section >
  )
}

export default Infromation