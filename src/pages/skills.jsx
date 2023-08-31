import React from 'react'
import Header from '../components/header'
import './skill.css'
import { NavLink } from 'react-router-dom'

const skills = () => {
  return (
    <>
        <Header />
        <div className='cont'>
        <div class="heading">
            <span>
                <i id="skill" class="texthead fas fa-chalkboard-teacher"></i>
            </span>
            <span className='texthead'>
                {' '}SKILLS
            </span>
        </div>
        <div className='body'>
            <div className="skillbox cp">
              <h1 className='DS-head'>Competitive Programming</h1><br />
              <div className='sklbx'>
                Codeforces :
                <NavLink style={{color: '#03a89e'}} className="skllink" to="https://codeforces.com/profile/adarsh2002"> adarsh2002</NavLink>,
                <span> Max rating <span style={{color: '#03a89e'}}>1575</span> <br />(<span style={{color: '#03a89e'}}>specialist</span>)</span><br /><br />
                CodeChef :
                <NavLink style={{color: '#FFBF00'}} className="skllink" to="https://www.codechef.com/users/aadarsh2350"> adarsh2350</NavLink>,
                <span> Max rating <span style={{color: '#FFBF00'}}>2051</span> <br />(<span style={{color: '#FFBF00'}}>5 star</span> rated)</span><br /><br />
                HackerRank :
                <NavLink style={{color: '#D0011B'}} className="skllink" to="https://www.hackerrank.com/adarsh2350i"> adarsh2350i</NavLink>,
                <span> Points <span style={{color: '#D0011B'}}>2209</span><br />(<span style={{color: '#D0011B'}}>6 star</span> rated)<br /></span>
              </div>
            </div>
            <div className="skillbox webd">
              <h1 className='DS-head'>WebD</h1>
              <h1 style={{color: "white"}}>-</h1>
              <div className='sklbx'>
                TechStack : MERN<br /><br />
                Frontend : HTML, CSS, JavaScript, ReactJS<br /><br />
                Backend : NodeJS (ExpressJS)<br /><br />
                Database : mySQL, mongoDB<br /><br />
                Miscellaneous : MaterialUI, Tailwind CSS, Redux, Socket.io
              </div>
            </div>
            <div className="skillbox ml">
              <h1 className='DS-head'>Data Science & Artificial Intellegence</h1>
              <div className='sklbx'>
                Courses : Computer Aided Applied Optimization, Application of AI and ML, Deep Learning<br/><br/>
                Utilities : Numpy, Pandas, Matplotlib, Seaborn, Scikit-learn, PyTorch, Keras<br /><br />
                Miscellaneous : GenerativeAI ( OpenCV, NLP )<br /><br />
                GUI : Streamlit
              </div>  
            </div>
        </div>
        </div>    
    </>
  )
}

export default skills