import React from 'react'
import Navbar from '../components/navbar'
import { NavLink } from 'react-router-dom'
import './datasc.css'
  
const datasc = () => {
  return (
    <div className='projnav'>
      <Navbar />
      <div className='title-box'>
        <h1 className='projti'>Data Science</h1>
      </div>
      <div className='timeline'>
          <div className="timeline-divider-data"></div>
          <div className="timeline-box">
            <h1>Fake News Detector</h1><br/>
            <NavLink className="github" to='https://github.com/adarsh2350/FakeNewsDetector'>Github</NavLink><br />
            <span><b>Technologies used :  </b></span>
            <span>Numpy, Pandas, matplotlib, scikit-learn (Logistic Regression), nltk, joblib</span><br /><br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sint corporis commodi optio voluptatem suscipit voluptatibus consectetur quas cupiditate sapiente quam, culpa temporibus odit natus perspiciatis. Quis animi ullam officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim.</p>
          </div>
          <div className="timeline-box">
            <h1>Heart Disease Predictor</h1><br/>
            <NavLink className="github" to='https://github.com/adarsh2350/heart-disease-predictor'>Github</NavLink><br />
            <span><b>Technologies used :  </b></span>
            <span>Numpy, pandas, Matplotlib, Seaborn, scikit-learn (RandomForest Classifier, KNN, SVM)</span><br /><br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sint corporis commodi optio voluptatem suscipit voluptatibus consectetur quas cupiditate sapiente quam, culpa temporibus odit natus perspiciatis. Quis animi ullam officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim.</p>
          </div>
          <div className="timeline-box">
            <h1>BTP</h1><br/>
            <NavLink className="github" to=''>Github</NavLink><br />
            <span><b>Technologies used :  </b></span>
            <span>Numpy, Pandas, matplotlib, seaborn, scikit-learn (Linear Regression, RandomForest Classifier, DBSCAN)</span><br /><br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sint corporis commodi optio voluptatem suscipit voluptatibus consectetur quas cupiditate sapiente quam, culpa temporibus odit natus perspiciatis. Quis animi ullam officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim.</p>
          </div>
          <div className="timeline-box">
            <h1>Facial Recognition</h1><br/>
            <NavLink className="github" to='https://github.com/adarsh2350/Facial_recognition'>Github</NavLink><br />
            <span><b>Technologies used :  </b></span>
            <span>Numpy, OpenCV, Face Recognition</span><br /><br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sint corporis commodi optio voluptatem suscipit voluptatibus consectetur quas cupiditate sapiente quam, culpa temporibus odit natus perspiciatis. Quis animi ullam officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim.</p>
          </div>
        </div>
    </div>
    
  )
}

export default datasc