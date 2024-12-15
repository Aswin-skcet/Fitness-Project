import React from 'react';
import './trainer.css';
import { Link } from 'react-router-dom';

const ProfileCard = () => {
  return (
    <div className="profile-container">
      <div className="navbar">
        <Link to="/clhome" className="home-button">Home</Link>
      </div>
      <h1 className='head'>Our Trainers</h1>
      <div className="cards-container">
        <div className="box">
          <div className="imgBx">
            <img src="data:image/jpeg;base64,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" alt="Trainer 1" />
          </div>
          <div className="card-footer">
            <h3>ALEX EUBANKS</h3>
            <h3>Trainer</h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src="https://ugc.production.linktr.ee/c624994f-3b6c-433a-83d1-d4418f488916_IMG-4705.jpeg?io=true&size=avatar-v3_0" alt="Trainer 2" />
          </div>
          <div className="card-footer">
            <h3>Aswati</h3>
            <h3>2x Miss Ernakulam</h3>
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDshMZjmi-FVCMfFf-LTTtQseXsEVkzdLhA&s" alt="Trainer 3" />
          </div>
          <div className="card-footer">
            <h3>CHRIS HERIA</h3>
            <h3>Calisthenics Athlete</h3>
          </div>
        </div>
      </div>

      <div className="premium-plans">
        <h2>Premium Plans</h2>
        <div className="plans-container">
          <div className="plan-card">
            <h3>Basic Plan</h3>
            <div className="price">$29/month</div>
            <ul>
              <li>Access to all classes</li>
              <li>1-on-1 consultation</li>
            </ul>
          </div>
          <div className="plan-card">
            <h3>Standard Plan</h3>
            <div className="price">$49/month</div>
            <ul>
              <li>Access to all classes</li>
              <li>1-on-1 consultation</li>
              <li>Personalized workout plans</li>
            </ul>
          </div>
          <div className="plan-card">
            <h3>Premium Plan</h3>
            <div className="price">$79/month</div>
            <ul>
              <li>Access to all classes</li>
              <li>1-on-1 consultation</li>
              <li>Personalized workout plans</li>
              <li>Dietary advice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
