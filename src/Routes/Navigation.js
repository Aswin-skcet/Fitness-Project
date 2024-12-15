import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Land from '../Components/Land';
import Clientlogs from '../Components/Clientlogs';
import BaseLandingPage from '../Components/Baselanding';
import BmiCalculator from '../Components/bmi';
import Wrkout from '../Components/Workouts';
import Wrkchest from '../Components/Wrkchest';
import Wrkback from '../Components/Wrkbck';
import Wrkshoulder from '../Components/Wrkshoulder';
import ProfileCard from '../Components/trainer';
import OphotoGallery from '../Components/bmidiets/oweight';
import WphotoGallery from '../Components/bmidiets/uweight';
import Tlogs from '../Components/Tlogin/trainerlogs';
import AdminLandingPage from '../Components/Trainer page/Thome';



const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseLandingPage/>}/>
        <Route path='/client' element={<Clientlogs/>}/>
        <Route path="/clhome" element={<Land/>}/>
        <Route path='/bmi' element={<BmiCalculator/>}/>
        <Route path='/wrkout' element={<Wrkout/>}/>
        <Route path='/wrkchest' element={<Wrkchest></Wrkchest>}/>
        <Route path='/wrkback' element={<Wrkback></Wrkback>}/>
        <Route path='/wrksholder' element={<Wrkshoulder></Wrkshoulder>}/>
        <Route path='/tra' element={<ProfileCard></ProfileCard>}/>
        <Route path='/ov8' element={<OphotoGallery></OphotoGallery>}/>
        <Route path='/wv8' element={<WphotoGallery></WphotoGallery>}/>
        <Route path='/tlog' element={<Tlogs></Tlogs>}/>
        <Route path='/thome1' element={<AdminLandingPage></AdminLandingPage>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;