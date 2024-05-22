import React from 'react';
import './LandingPage.css';
import { Link as ScrollLink } from 'react-scroll';
import { EmojiEvents, AddReaction, LocationCity } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const collaborators = [
    { name: 'bendo ', role: 'El galboy' },
    { name: 'wibu', role: 'El wanpis' },
    { name: 'bet', role: 'beeet' },
    { name: 'tank', role: 'ipul' },
    // Add more collaborators as needed
  ];

  return (
    <div className="Landing">
      <nav className="navbarland">
        <div className="navbar-logo">HYPERIAL</div>
        <ul className="navbar-links">
        <li>
            <ScrollLink
              to="collaborators" // Scroll to the element with ID "collaborators"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70} // Adjust offset as needed to account for the height of your navbar
            >
              About
            </ScrollLink>
          </li>
          <li><Link to="/Login">Login</Link></li> {}
        </ul>
      </nav>
      
      <div className='features-container'>
        <div className='feature-text'>
          <h2>Aplikasi Manajemen Material terbaik 2024 ril no fek no root</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div  className='feature-image'>
          <img src='/assets/hyperial_logo_only.png' alt="hyperial_logo" className="landing-form-logo">
          </img>
        </div>
      </div>

      <div className='tagline-container'>
        <div className='tagline-text'>1 Miliar pengguna sudah menggunakananya well</div>
      </div>

      <div id='fitur' className='fitur'>
        <h1>Our Features</h1>
        <div className='fitur-list'>
          <div className='fitur-item'>
            <EmojiEvents fontSize='large' style={{ fontSize: 64, marginRight: 10 }} />
            <p>Emyu gapunya ini</p>
          </div>
          <div className='fitur-item'>
            <AddReaction fontSize='large' style={{ fontSize: 64, marginRight: 10 }} />
            <p>Botak kaya tenhag</p>
          </div>
          <div className='fitur-item'>
            <LocationCity fontSize='large' style={{ fontSize: 64, marginRight: 10 }} />
            <p>Manchester ^</p>
          </div>
        </div>
      </div>

      <div className='keuangan-container'>
        <div className='keuangan-text'>
          <h2>Laporan Keuangan Langsung di Dasbor Anda</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className='keuangan-img'>
          <img src="/assets/screenshot.png" alt="ss_keuangan"/>
        </div>
      </div>
      
      <div className="collaborators">
        <h2>Collaborators</h2>
        <div className="collaborators-list">
          {collaborators.map((collaborator, index) => (
            <div key={index} className="collaborator-item">
              <h3>{collaborator.name}</h3>
              <p>{collaborator.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
