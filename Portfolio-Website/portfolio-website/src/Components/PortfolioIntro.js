import React from 'react';
import profilePhoto from "../Img/profile-photo.jpeg"
import './portfolioIntro.css'
function PortfolioIntro()
{
    return(
        <div className='profile-container'>
            <div className="profile-img-container">
                <img className='profile-img'  style={{height:'250px', width:'250px'}} src={profilePhoto} alt='profile-img' />
            </div>

            <div className='profile-intro-container'>
            <h1 id='name-intro'>Hello, I'm Vishwjeet Ujgare</h1>
            <h1 id="working-status">Web Developer Enthusiastic</h1>
            <h1 id='education-status' className='education-status'>Post Graduation-MCA </h1>
            <h1 className='education-status'> Graduation-BCA</h1>
            </div>

            <div className='profile-resume-container'>
                <button>Check Resume</button>
            </div>
     
        </div>
  
    )
}

export default PortfolioIntro;