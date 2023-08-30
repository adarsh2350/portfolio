import React from 'react'
import Header from '../components/header'
import pic1 from '../images/clg_logo.png'
import pic2 from '../images/schl_logo2.png'
import pic3 from '../images/schl_logo1.png'
import './edu.css'

const about = () => {
  return (
    <>  
        <div className='view'>
        <Header />
        <section id="ededucation">
            <div className='pfhead'>    
                <h1 className="edheading">
                    <span>
                        <i className="texthead fas fa-book-reader"></i>
                    </span>
                    <span className='texthead'>
                        {" "}EDUCATION
                    </span>
                </h1>
            </div>
            <div id="ededu">
                <div id="ede3" className="edEsiz">
                    <img className="edimg" src={pic1} alt='pic1' />
                    <h2 className='btc'>B.tech</h2>
                    <h3>IIT Guwahati</h3>
                    <h4>Nov 2020 - Present</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Asperiores enim quidem delectus. Eum dolore vel, 
                        aliquid a, ipsum exercitationem magnam et ducimus 
                        perspiciatis molestiae cupiditate, itaque quasi? Illum, 
                        vel dolores!
                    </p>
                </div>
                <div id="ede2" className="edEsiz">
                    <img className="edimg" src={pic2} alt='pic2'/>
                    <h2>Senior Secondary</h2>
                    <h3>Don Bosco School</h3>
                    <h4>May 2018 - March 2020</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Asperiores enim quidem delectus. Eum dolore vel, 
                        aliquid a, ipsum exercitationem magnam et ducimus 
                        perspiciatis molestiae cupiditate, itaque quasi? Illum, 
                        vel dolores!
                    </p>
                </div>
                <div id="ede1" className="edEsiz">
                <img className="edimg" src={pic3} alt='pic3'/>
                    <h2 className='btc1'>Secondary</h2>
                    <h3>Kendriya Vidyalaya Sangathan</h3>
                    <h4>March 2018</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Asperiores enim quidem delectus. Eum dolore vel, 
                        aliquid a, ipsum exercitationem magnam et ducimus 
                        perspiciatis molestiae cupiditate, itaque quasi? Illum, 
                        vel dolores!
                    </p>
                </div>
            </div>
        </section>
        </div>
    </>
  )
}

export default about