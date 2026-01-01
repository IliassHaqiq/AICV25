import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { FaHome, FaFileAlt, FaUpload, FaUserPlus, FaMicrophone, FaHandshake,FaBars, FaTimes, FaUsers, FaArrowUp, FaCalendarAlt, FaImages } from 'react-icons/fa';
import './App.css';
import greenticLogo from './images/greentic.png';
//import fegLogo from './images/feg.jpg';
import varLogo from './images/var.jpg';
import aviLogo from './images/avi.png';
import teluqLogo from './images/teluq.png';
import uclmLogo from './images/uclm.png';
//import ensa from './images/ensa.png';
import southdakotaLogo from './images/southdakota.jpg';
import cnrstLogo from './images/cnrst.jpg';
import univh1Logo from './images/univh1.png';
import fstsLogo from './images/fsts.png';
import hayar from './People/hayar.jpg';
import moukrim from './People/moukrim.jpg';
import farchi from './People/farchi.jpg';
import elAlami from './People/el alami.jpg';
import Haqiq from './People/haqiqabdelkrim.jpeg';
import rakrak from './People/saidrakrak.jpeg';
import hassanien from './People/hassanien.jpg';
//import santosh from './People/santaosh.jpg';
import bazboza from './People/bazboza.jpg';
import ir2mlabLogo from './logo/ir2mlab.png';
import srgeLogo from './logo/srge.jpg';

import ajithAbraham from './invitedspeakers/ajith abraham.jpg';
//import kcSantosh from './invitedspeakers/kc santosh.png';
import kc_santosh from './People/kc-profile.jpg';
import adelAlimi from './invitedspeakers/adel alimi.jpg';
import mohammedkinidiri from './People/mohammedkinidiri.jpg';
import mohammedessaidi from './invitedspeakers/mohammed essaidi.png'
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
//import AICVLogo from './images/AICV.png';
//import AISDSLogo from './images/AISDS.png';
//import logoGrandeTaille from './images/logo-grande-taille.png';
import springerLogo from './logo/springer.png';

import AISDSLogo2 from './images/logo AISDS.png';
import mohammedkhalil from './invitedspeakers/MohammedKhalil.jpeg';
import academiehassane2 from './images/academiehassan.jpg';

// Removed VisitorStats import

import previousEditionImage from './AICV/all1.jpg';

import aicv2020Image from './AICV/AICV2020.webp';
import aicv2021Image from './AICV/AICV2021.webp';
import aicv2023Image from './AICV/AICV2023.webp';

import marrakechimg4 from './banner/marrakechimg4.jpg';
import marrakechimg5 from './banner/marrakechimg5.jpg';
import marrakechimg3_banner from './banner/marrakechimg3.jpg';

import mobitic from './images/mobitic.jpg'

//Import images from AISDS25 Conference
import DSC_0 from './images/DSC_0.jpg'
import DSC_00 from './images/DSC_00.jpg'
import DSC_1 from './images/DSC_1.jpg'
import DSC_2 from './images/DSC_2.jpg'
import DSC_3 from './images/DSC_3.jpg'
import DSC_0003 from './images/DSC_0003.jpg'
import DSC_4 from './images/DSC_4.jpg'
import DSC_5 from './images/DSC_5.jpg'
import DSC_6 from './images/DSC_6.jpg'
import DSC_7 from './images/DSC_7.jpg'
import DSC_8 from './images/DSC_8.jpg'
import DSC_10 from './images/DSC_10.jpg'
import DSC_11 from './images/DSC_11.jpg'
import DSC_12 from './images/DSC_12.jpg'
import DSC_0012 from './images/DSC_0012.jpg'
import DSC_13 from './images/DSC_13.jpg'
import DSC_14 from './images/DSC_14.jpg'
import DSC_15 from './images/DSC_15.jpg'
import DSC_16 from './images/DSC_16.jpg'
import DSC_17 from './images/DSC_17.jpg'
import DSC_0023 from './images/DSC_0023.jpg'
import DSC_0026 from './images/DSC_0026.jpg'
import DSC_0037 from './images/DSC_0037.jpg'
import DSC_0040 from './images/DSC_0040.jpg'
import DSC_0042 from './images/DSC_0042.jpg'
import DSC_0049 from './images/DSC_0049.jpg'
import DSC_0066 from './images/DSC_0066.jpg'
import DSC_0068 from './images/DSC_0068.jpg'
import DSC_0078 from './images/DSC_0078.jpg'
import DSC_0082 from './images/DSC_0082.jpg'
import DSC_0083 from './images/DSC_0083.jpg'
import DSC_0088 from './images/DSC_0088.jpg'
import DSC_0089 from './images/DSC_0089.jpg'
import DSC_0099 from './images/DSC_0099.jpg'
import DSC_0104 from './images/DSC_0104.jpg'
import DSC_0112 from './images/DSC_0112.jpg'
import DSC_0113 from './images/DSC_0113.jpg'
import DSC_0116 from './images/DSC_0116.jpg'
import DSC_0119 from './images/DSC_0119.jpg'
import DSC_0121 from './images/DSC_0121.jpg'
import DSC_0125 from './images/DSC_0125.jpg'
import DSC_0130 from './images/DSC_0130.jpg'
import DSC_0135 from './images/DSC_0135.jpg'
import DSC_0140 from './images/DSC_0140.jpg'
import DSC_0143 from './images/DSC_0143.jpg'
import DSC_0144 from './images/DSC_0144.jpg'
import DSC_0145 from './images/DSC_0145.jpg'
import DSC_0146 from './images/DSC_0146.jpg'
import DSC_0148 from './images/DSC_0148.jpg'
import DSC_0149 from './images/DSC_0149.jpg'
import DSC_0153 from './images/DSC_0153.jpg'
import DSC_0154 from './images/DSC_0154.jpg'
import DSC_0155 from './images/DSC_0155.jpg'
import DSC_0158 from './images/DSC_0158.jpg'
import DSC_0160 from './images/DSC_0160.jpg'
import DSC_0162 from './images/DSC_0162.jpg'
import DSC_0164 from './images/DSC_0164.jpg'
import DSC_0166 from './images/DSC_0166.jpg'
import DSC_0185 from './images/DSC_0185.jpg'
import DSC_0188 from './images/DSC_0188.jpg'
import DSC_0192 from './images/DSC_0192.jpg'
import DSC_0196 from './images/DSC_0196.jpg'
import DSC_0199 from './images/DSC_0199.jpg'
import DSC_0202 from './images/DSC_0202.jpg'
import DSC_0206 from './images/DSC_0206.jpg'
import DSC_0207 from './images/DSC_0207.jpg'
import DSC_0209 from './images/DSC_0209.jpg'
import DSC_0214 from './images/DSC_0214.jpg'
import DSC_0217 from './images/DSC_0217.jpg'
import DSC_0220 from './images/DSC_0220.jpg'
import DSC_0223 from './images/DSC_0223.jpg'
import DSC_0234 from './images/DSC_0234.jpg'
import DSC_0235 from './images/DSC_0235.jpg'
import DSC_4075 from './images/DSC_4075.jpg'
import DSC_4158 from './images/DSC_4158.jpg'
import DSC_4173 from './images/DSC_4173.jpg'
import DSC_4181 from './images/DSC_4181.jpg'
import DSC_4189 from './images/DSC_4189.jpg'
import DSC_4220 from './images/DSC_4220.jpg'
import DSC_4226 from './images/DSC_4226.jpg'
import DSC_4234 from './images/DSC_4234.jpg'
import DSC_4247 from './images/DSC_4247.jpg'
import DSC_4258 from './images/DSC_4258.jpg'
import DSC_4265 from './images/DSC_4265.jpg'
import DSC_4266 from './images/DSC_4266.jpg'
import DSC_4282 from './images/DSC_4282.jpg'
import DSC_4283 from './images/DSC_4283.jpg'
import DSC_4301 from './images/DSC_4301.jpg'
import DSC_4329 from './images/DSC_4329.jpg'
import DSC_4333 from './images/DSC_4333.jpg'
import DSC_4374 from './images/DSC_4374.jpg'
import DSC_4395 from './images/DSC_4395.jpg'
import DSC_4408 from './images/DSC_4408.jpg'
import DSC_4465 from './images/DSC_4465.jpg'
import DSC_4486 from './images/DSC_4486.jpg'
import DSC_4488 from './images/DSC_4488.jpg'
import DSC_4501 from './images/DSC_4501.jpg'
import DSC_4506 from './images/DSC_4506.jpg'
import DSC_4513 from './images/DSC_4513.jpg'
import DSC_4523 from './images/DSC_4523.jpg'
import DSC_4529 from './images/DSC_4529.jpg'
import DSC_4530 from './images/DSC_4530.jpg'
import DSC_4540 from './images/DSC_4540.jpg'
import DSC_4582 from './images/DSC_4582.jpg'
import DSC_4584 from './images/DSC_4584.jpg'


// Import images from AICV23 Conference_ Photo Gallery
import AICV_DSC_4764 from './AICV23 Conference_ Photo Gallery/DSC_4764.jpg';
import AICV_DSC_4773 from './AICV23 Conference_ Photo Gallery/DSC_4773.jpg';
import AICV_DSC_4784 from './AICV23 Conference_ Photo Gallery/DSC_4784.jpg';
import AICV_DSC_4785 from './AICV23 Conference_ Photo Gallery/DSC_4785.jpg';
import AICV_DSC_4790 from './AICV23 Conference_ Photo Gallery/DSC_4790.jpg';
import AICV_DSC_4792 from './AICV23 Conference_ Photo Gallery/DSC_4792.jpg';
import AICV_DSC_4802 from './AICV23 Conference_ Photo Gallery/DSC_4802.jpg';
import AICV_DSC_4811 from './AICV23 Conference_ Photo Gallery/DSC_4811.jpg';
import AICV_DSC_4814 from './AICV23 Conference_ Photo Gallery/DSC_4814.jpg';
import AICV_DSC_4816 from './AICV23 Conference_ Photo Gallery/DSC_4816.jpg';
import AICV_DSC_4817 from './AICV23 Conference_ Photo Gallery/DSC_4817.jpg';
import AICV_DSC_4823 from './AICV23 Conference_ Photo Gallery/DSC_4823.jpg';
import AICV_DSC_4830 from './AICV23 Conference_ Photo Gallery/DSC_4830.jpg';
import AICV_DSC_4847 from './AICV23 Conference_ Photo Gallery/DSC_4847.jpg';
import AICV_DSC_4848 from './AICV23 Conference_ Photo Gallery/DSC_4848.jpg';
import AICV_DSC_4853 from './AICV23 Conference_ Photo Gallery/DSC_4853.jpg';
import AICV_DSC_4855 from './AICV23 Conference_ Photo Gallery/DSC_4855.jpg';
import AICV_DSC_4858 from './AICV23 Conference_ Photo Gallery/DSC_4858.jpg';
import AICV_DSC_4862 from './AICV23 Conference_ Photo Gallery/DSC_4862.jpg';
import AICV_DSC_4880 from './AICV23 Conference_ Photo Gallery/DSC_4880.jpg';
import AICV_DSC_4895 from './AICV23 Conference_ Photo Gallery/DSC_4895.jpg';
import AICV_DSC_4900 from './AICV23 Conference_ Photo Gallery/DSC_4900.jpg';
import AICV_DSC_4925 from './AICV23 Conference_ Photo Gallery/DSC_4925.jpg';
import AICV_DSC_4926 from './AICV23 Conference_ Photo Gallery/DSC_4926.jpg';
import AICV_DSC_4927 from './AICV23 Conference_ Photo Gallery/DSC_4927.jpg';
import AICV_DSC_4930 from './AICV23 Conference_ Photo Gallery/DSC_4930.jpg';
import AICV_DSC_4944 from './AICV23 Conference_ Photo Gallery/DSC_4944.jpg';
import AICV_DSC_4947 from './AICV23 Conference_ Photo Gallery/DSC_4947.jpg';
import AICV_DSC_4949 from './AICV23 Conference_ Photo Gallery/DSC_4949.jpg';
import AICV_DSC_4965 from './AICV23 Conference_ Photo Gallery/DSC_4965.jpg';
import AICV_DSC_4976 from './AICV23 Conference_ Photo Gallery/DSC_4976.jpg';
import AICV_DSC_4977 from './AICV23 Conference_ Photo Gallery/DSC_4977.jpg';
import AICV_DSC_4984 from './AICV23 Conference_ Photo Gallery/DSC_4984.jpg';
import AICV_DSC_4987 from './AICV23 Conference_ Photo Gallery/DSC_4987.jpg';

interface CommitteeMember {
  name: string;
  affiliation?: string;
  image?: string;
  type?: 'trackTitle';
}

interface CommitteeSection {
  title: string;
  members: CommitteeMember[];
}

// Create a wrapper component for icons to fix TypeScript errors
const IconWrapper = ({ icon: Icon, className, size, ...props }: { icon: IconType; className?: string; size?: number; [key: string]: any }) => {
  const IconComponent = Icon as React.ComponentType<{ className?: string; size?: number; [key: string]: any }>;
  return <IconComponent className={className} size={size} {...props} />;
};

// Menu link component with proper typing
interface MenuLinkProps {
  to: string;
  icon: React.ReactElement;
  children: React.ReactNode;
  isSubmenu?: boolean;
  onCloseMenu?: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, icon, children, isSubmenu = false, onCloseMenu }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const handleClick = () => {
    if (onCloseMenu) {
      onCloseMenu();
    }
  };

  return (
    <li className={isSubmenu ? 'submenu-item' : ''}>
      <Link to={to} className={isActive ? 'active' : ''} onClick={handleClick}>
        <span style={{marginRight: 8, fontSize: '1.1em', verticalAlign: '-2px'}}>{icon}</span>
        {children}
      </Link>
    </li>
  );
};


// Home component
const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const marrakechImages = [marrakechimg3_banner,marrakechimg4, marrakechimg5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % marrakechImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [marrakechImages.length]);

  return (
    <div className="home-container">
      {/* Image Carousel Banner */}
      <div className="image-carousel-container">
        <img
          src={marrakechImages[currentImageIndex]}
          alt={`Marrakech scene ${currentImageIndex + 1}`}
          className="carousel-image"
        />
        <div className="carousel-text-overlay">
          <h2>THE 4<sup>TH</sup> INTERNATIONAL CONFERENCE ON</h2>
          <h1>Artificial Intelligence and Smart Data Science (AISDS'2025)</h1>
          <p className="carousel-date">December 04 - 06 2025</p>
          <p className="carousel-location">MARRAKESH MOROCCO</p>
        </div>
      </div>
      
      {/* Combined Main Content Section */}
      <section className="home-main-content">
        {/* Conference Overview Section */}
        <div className="conference-overview">
          <h2 className="conference-overview-title">Artificial Intelligence and Smart Data Science (AISDS'2025)</h2>
          <p className="conference-overview-text">
            We are pleased to invite you to participate in the 4th International Conference on Artificial Intelligence and Smart Data Science (AISDS'2025), which will be held in Marrakech, Morocco, from December 04–06, 2025.
          </p>
          <p className="conference-overview-text">
            AISDS'2025 is organized by the Computer, Networks, Mobility and Modeling Laboratory (IR2M), Faculty of Sciences and Techniques, Hassan 1st University, Settat, Morocco, in collaboration with the Scientific Research Group in Egypt (SRGE), Cairo University, Egypt.
          </p>
          <p className="conference-overview-text">
            This conference serves as a global platform for researchers, practitioners, and industry professionals to share their latest innovations, explore emerging trends, and foster interdisciplinary collaboration in the fields of Artificial Intelligence and Smart Data Science.
          </p>
          <p className="conference-overview-text">
            AISDS'2025 will showcase state-of-the-art research and practical applications, with a focus on advancing intelligent systems and data-driven technologies.
          </p>
          <p className="conference-overview-text">
            <span style={{fontWeight: 'bold', color: '#2563eb'}}>AISDS'2025 is the next edition of the International Conference on Artificial Intelligence and Computer Vision (AICV).</span>
          </p>
        </div>


        <h2 className="conference-overview-title">The AISDS25 conference will be held at the conference center of the University Cadi Ayyad of Marrakesh</h2>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.447340559348!2d-8.005491!3d31.666964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafed91114baa29%3A0xa10b01abab5db518!2sCentre%20de%20conf%C3%A9rences%20de%20l&#39;universit%C3%A9%20cadi%20ayyad!5e0!3m2!1sfr!2sma!4v1763970101704!5m2!1sfr!2sma&z=15" 
            width="1200" 
            height="500" 
            style={{ border: '0' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Conference Location"
          ></iframe>
        </div>

        
    
        <div className="important-dates">
          <h2 className="important-dates-title">Important Dates</h2>
          <ul className="important-dates-list">
            <li><span className="date">September 30, 2025 </span><span style={{fontWeight: 'bold', color: '#FF0000'}} className="event-text">Extended hard paper submission deadline</span></li>
            <li><span className="date">October 21, 2025</span><span className="event-text">Acceptance notification</span></li>
            <li><span className="date">October 29, 2025</span><span className="event-text">Submission camera ready and registration</span></li>
            <li><span className="date">December 04 - 06, 2025</span><span className="event-text">Conference dates</span></li>
          </ul>
        </div>

        {/* Previous Edition Section (Combined) */}
        <div className="previous-edition">
          <h2 className="previous-edition-title">AICV'S Previous Editions</h2>
          <div className="previous-editions-list">
          <ul className="previous-editions-items">
            <li>
              <span className="edition-year">AICV 2023</span>
              <span className="edition-date">March 05 - 07</span>
              <span className="edition-location">
                <i className="fas fa-map-marker-alt"></i> {/* Location icon placeholder */}
                Marrakesh, Morocco
              </span>
            </li>
            <li>
              <span className="edition-year">AICV 2021</span>
              <span className="edition-date">June 28 - 30 </span>
              <span className="edition-location">
                <i className="fas fa-map-marker-alt"></i> {/* Location icon placeholder */}
                Settat, Morocco
              </span>
            </li>
            <li>
              <span className="edition-year">AICV 2020</span>
              <span className="edition-date">April 08 - 09</span>
              <span className="edition-location">
                <i className="fas fa-map-marker-alt"></i> {/* Location icon placeholder */}
                Cairo, Egypt
              </span>
            </li>
          </ul>
        </div>
          <div className="previous-edition-content">
            {/* First Image and Text */}
            <img src={previousEditionImage} alt="Attendees of AICV'2023 in Marrakech" className="previous-edition-image" />
            <div className="previous-edition-text">
              
            </div>
          </div>
        </div>

        {/* Previous Editions Image Links Section */}
        <div className="previous-editions-image-links">
          <h2 className="previous-editions-image-links-title">AICV'S Previous Edition Proceedings</h2>
          <div className="previous-editions-image-grid">
            <a href="https://link.springer.com/book/10.1007/978-3-031-27762-7" target="_blank" rel="noopener noreferrer" className="edition-image-link">
              <div className="edition-image-card">
                <img src={aicv2023Image} alt="AICV 2023 Proceedings" className="edition-image" />
              </div>
            </a>
            <a href="https://link.springer.com/book/10.1007/978-3-030-76346-6" target="_blank" rel="noopener noreferrer" className="edition-image-link">
              <div className="edition-image-card">
                <img src={aicv2021Image} alt="AICV 2021 Proceedings" className="edition-image" />
              </div>
            </a>
            <a href="https://link.springer.com/book/10.1007/978-3-030-44289-7" target="_blank" rel="noopener noreferrer" className="edition-image-link">
              <div className="edition-image-card">
                <img src={aicv2020Image} alt="AICV 2020 Proceedings" className="edition-image" />
              </div>
            </a>
            
          </div>
        </div>

        <div className="home-springer-logo-container">
          <img src={springerLogo} alt="Springer Logo" className="springer-logo" />
        </div>
        {/* Previous Editions List Section - Moved Inside */}
        
      </section>

      {/* Organizers Section - Moved from Footer */}
      <section className="organizers-section">
        <h2 className="organizers-title">Organizers</h2>
        <div className="organizers-logos">
          <img src={ir2mlabLogo} alt="IR2M Lab Logo" className="organizer-logo" />
          <img src={srgeLogo} alt="SRGE Logo" className="organizer-logo" />
        </div>
      </section>

    </div>
  );
};

// Committees component
const Committees: React.FC = () => {
  const committees: CommitteeSection[] = [
    {
      title: 'Honorary Chairs',
      members: [
        { name: 'Aawatif Hayar', affiliation: 'GREENTIC, ENSEM – Casablanca, former Minister of Solidarity, Social Integration and Family and former President of Hassan II University, Casablanca, Morocco', image: hayar },
        { name: 'Abdellatif Moukrim', affiliation: 'President of Hassan 1st University, Settat, Morocco', image: moukrim },
        { name: 'Abdelmajid Farchi', affiliation: 'Dean of the Faculty of Sciences and Techniques, Settat, Morocco', image: farchi },
        { name: 'Jamila El Alami', affiliation: 'Director of the National Center for Scientific and Technical Research, Morocco', image: elAlami },
        { name: 'Mohamed Knidiri', affiliation: 'President of "Association le Grand Atlas", President of the Private University of Marrakesh and former Minister of National Education, Morocco', image:mohammedkinidiri},
        { name: 'Said Rakrak', affiliation: 'Dean of the Faculty of Sciences and Techniques - Guéliz, Marrakesh, Morocco', image: rakrak},
      ] 
    },
    {
      title: 'General Chairs',
      members: [
        { name: 'Abdelkrim Haqiq', affiliation: 'GREENTIC, FST, Hassan 1st University, Settat, Morocco', image: Haqiq },
        { name: 'Aboul Ella Hassanien', affiliation: 'Faculty of Computer and AI, Cairo University, Egypt', image: hassanien },
      ]
    },
    {
      title: 'Conference Co-chairs',
      members: [
        { name: 'KC Santosh', affiliation: 'Department of Computer Science, University of South Dakota, USA', image: kc_santosh },
        { name: 'Luis Orozco Barbosa', affiliation: 'Albacete Research Institute of Informatics, Castilla-La Mancha\nUniversity, Abacete, Spain', image: bazboza },
      ]
    },
    {
      title: 'Technical Program Chairs',
      members: [
        { name: 'Akhil Jabbar Meerja', affiliation: 'Vardhaman College of Engineering, Hyderabad, Telangana, India' },
        { name: 'Ashraf Darwish', affiliation: 'Faculty of Science, Helwan University, Cairo, Egypt' },
        { name: 'Essaid Sabir', affiliation: 'University of Quebec (TÉLUQ), Montréal, Canada' },
        { name: 'Parthasarathy Subashini', affiliation: 'Avinashilingam Institute for Home Science and Higher Education\nfor Women - Deemed University, Coimbatore, India' },
      ]
    },
    {
      title: 'International Advisory Board',
      members: [
        { name: 'Adel Mohamed Alimi', affiliation: 'National, Engineering School of Sfax, Tunisia' },
        { name: 'Ahmad Taher Azar', affiliation: 'College of Computer & Information Sciences, Prince Sultan University,\nRiyadh, Saudi Arabia' },
        { name: 'Dabia Ahmed Abouâinainen', affiliation: 'Abdulrahman Bin Faisal University, Saudi Arabia' },
        { name: 'Peter J. Tonelato', affiliation: 'School of Medicine, University of Missouri, Columbia MO, USA' },
        { name: 'Rawya Rizk', affiliation: 'Port Said University, Egypt' },
        { name: 'Sundaramurthy Gayathri Devi', affiliation: 'Avinashilingam Institute for Home Science and Higher\nEducation for Women, Deemed University, Coimbatore, India' },
        { name: 'Vaclav Snasel', affiliation: 'VSB-Technical University of Ostrava, Czech Republic' },
        { name: 'Youssef F. Rashed', affiliation: 'Cairo University, Egypt' },
      ]
    },
    {
      title: 'Track Chairs',
      members: [
        { name: 'Track 1: Foundations of Artificial Intelligence and Machine Learning', type: 'trackTitle' },
        { name: 'Abdellah Adib', affiliation: 'FST- Mohammedia, Hassan II University, Casablanca, Morocco' },
        { name: 'Said El Kafhali', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Sam Goundar', affiliation: 'RMIT University, School of Computing, Hanoi, Vietnam' },
        { name: 'Track 2: Smart Data Engineering and Analytics  ', type: 'trackTitle' },
        { name: 'Adam Slowik', affiliation: 'Koszalin University of Technology, Koszalin, Poland' },
        { name: 'Mohamed Nemiche', affiliation: 'Polydisciplinary Faculty of Taza, Sidi Mohamed Ben Abdellah University, Morocco' },
        { name: 'Said Raghay', affiliation: 'Faculty of Sciences and Techniques - Guéliz, Marrakesh, Morocco' },
        { name: 'Track 3: Natural Language Processing and Human-Centered AI', type: 'trackTitle' },
        { name: 'Brahim Ouhbi', affiliation: 'National School of Arts and Crafts (ENSAM), Meknès, Morocco' },
        { name: 'Krishnaveni Marimuthu', affiliation: 'Avinashilingam Institute for Home Science and Higher Education for Women, Deemed University, Coimbatore, India' },
        { name: 'Mohamed Hanini', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Track 4: AI Applications in Industry, Society & Sustainability', type: 'trackTitle' },
        { name: 'Aurelio Bermúdez Marín', affiliation: 'Albacete Research Institute of Informatics, Castilla-La Mancha University, Abacete, Spain' },
        { name: 'Driss Bouzidi', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
        { name: 'Nizar Rokbani', affiliation: 'High Institute of Applied Sciences and Technology, University of Sousse, Tunisia' },
        { name: 'Track 5: Cybersecurity, Privacy & Trust in AI', type: 'trackTitle' },
        { name: 'Ashraf Matrawy', affiliation: 'School of Information Technology, Carleton University, Ottawa, Canada' },
        { name: 'Ghizlane Orhanou', affiliation: 'Faculty of Sciences, Rabat, Morocco' },
        { name: 'Yassine Maleh', affiliation: 'National School of Applied Sciences, Khouribga, Morocco' },
        { name: 'Track 6: Computer Vision and Applications', type: 'trackTitle' },
        { name: 'Driss El Ouadghiri', affiliation: 'Faculty of Sciences, Meknès, Morocco' },
        { name: 'Nabil Laachfoubi', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Rafael Casado González', affiliation: 'Albacete Research Institute of Informatics, Castilla-La Mancha University, Abacete, Spain' },
        
      ]
    },
    {
      title: 'Publicity chairs',
      members: [
        { name: 'Abdellah Ouammou', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Adnane El Hanjri', affiliation: 'EMSI, Tangier, Morocco' },
        { name: 'Azza Ahmed Abdo Ali', affiliation: 'Abdulrahman Bin Faisal University, Saudi Arabia' },
        { name: 'Chakib Ben Njima', affiliation: 'National Engineering School of Sousse, University of Sousse, Tunisia' },
        { name: 'Houssam Halmaoui', affiliation: 'ISMAC, Rabat, Morocco' },
        { name: 'Kamal Bouhassoune', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Lavika Goel', affiliation: 'Malaviya, National Institute of Technology, Jaipur- India' },
        { name: 'Mehrez Abdellaoui', affiliation: 'National Engineering School of Sousse, University of Sousse, Tunisia' },
        { name: 'Mohamed Hossam Ahmed', affiliation: 'School of Electrical Engineering and Computer Science, Ottawa, Canada' },
      ]
    },
    {
      title: 'Local arrangement committee Chairs',
      members: [
        { name: 'Abdelghani Ben Tahar', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Abderrahim Marzouk', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Mohamed Hanini', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Imane Elmir', affiliation:'I2S, Hassan 1st University, Settat, Morocco'},
        { name: 'Said El Kafhali', affiliation:'FST, Hassan 1st University, Settat, Morocco'},
      ]
    },
    {
      title: 'Organizing committee members',
      members: [
        { name: 'Abdellah Jamali', affiliation: 'National School of Applied Sciences, Berrechid, Morocco' },
        { name: 'Abdellah Zaaloul', affiliation: 'Faculty of Economics and Management, Settat, Morocco' },
        { name: 'Adil El Idriss', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Adnane Founoun', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Ahmed Boujnoui', affiliation: 'FST, Moulay Ismaïl University, Errachidia, Morocco' },
        { name: 'Amine Benmakhlouf', affiliation: 'FST, Moulay Ismaïl University, Errachidia, Morocco' },
        { name: 'Asma Boulkaid', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Bouchaib Nassereddine', affiliation: 'Faculty of Sciences and Techniques, Settat, Morocco' },
        { name: 'Haitam Ettazi', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Hamid Taramit', affiliation: 'Center for Computational Simulation, Universidad Politécnica de Madrid, Spain' },
        { name: 'Hibateallah Mohtadi', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Hind Mikram', affiliation: 'Faculty of Sciences and Techniques, Settat, Morocco' },
        { name: 'Loubna Hamami', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Rachid Latif', affiliation: 'ENSA, Ibn Zohr University, Agadir, Morocco' },
        { name: 'Soukaina Mihi', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Wafae Azoulay', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Youssef Hilali', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Zakaria Soufiane Hafdi', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
      ]
    },
  ];

  
  const tpcMembers = [
    { name: 'Abdelghani Bentahar', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Abdelhay Haqiq', affiliation: 'School of Information Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'Abdelmajid Badri', affiliation: 'ENSAM, Hassan II University, Casablanca, Morocco' },
    { name: 'Abdelmajid Hajami', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Abdelouahed Tajer', affiliation: 'ENSA, Cadi Ayyad University, Marrakesh, Morocco' },
    { name: 'Abdellah Adib', affiliation: 'FST - Mohammedia, Hassan II University, Casablanca, Morocco' },
    { name: 'Abdellah Ezzati', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Abdellah Jamali', affiliation: 'ENSA - Berrechid, Hassan 1st University, Settat, Morocco' },
    { name: 'Abdellah Najid', affiliation: 'INPT, Rabat, Morocco' },
    { name: 'Abdellah Ouammou', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Abdellah Zaaloul', affiliation: 'Faculty of Economics and Management, Settat, Morocco' },
    { name: 'Abdellatif Kobbane', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
    { name: 'Abderrahim Marzouk', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Abderrahim Sekkaki', affiliation: 'Facutly of Sciences Aïn Chock, Hassan II University, Casablanca, Morocco' },
    { name: 'Abdeslam El Fergougui', affiliation: 'Faculty of Sciences, Moulay Ismail University, Meknès, Morocco' },
    { name: 'Abdessamad Bellouch', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Abdul Nasser Nour', affiliation: 'An-Najah National University, Palestine' },
    { name: 'Adam Slowik', affiliation: 'Koszalin University of Technology, Koszalin, Poland' },
    { name: 'Adnane El Hanjri', affiliation: 'EMSI, Tangier, Morocco' },
    { name: 'Adnane Founoun', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Adnane Latif', affiliation: 'ENSA, Cadi Ayyad University, Marrakesh, Morocco' },
    { name: 'Ahlame Begdouri', affiliation: 'FST, My Abdellah University, Fès, Morocco' },
    { name: 'Ahmed Boujnoui', affiliation: 'FST, Moulay Ismail University, Errachidia, Morocco' },
    { name: 'Ahmed El-Yahyaoui', affiliation: 'Faculty of Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'Ahmed Kiram', affiliation: 'Faculty of Sciences Semlali, Cadi Ayyad University, Marrakesh, Morocco' },
    { name: 'Ahmed Nait-Sidi-Moh', affiliation: 'Jean Monnet University (UJM) – Saint Etienne, France' },
    { name: 'Ahmed Taher Azer', affiliation: 'College of Computer & Information Sciences, Prince Sultan University, Riyadh, Saudi Arabia' },
    { name: 'Ahmed Tealeb', affiliation: 'Faculty of Computers and Artificial Intelligence, University of Sadat City, Egypt' },
    { name: 'Ajith Abraham', affiliation: 'Sai University, Chennai, India' },
    { name: 'Akhi Jabbar Meerja', affiliation: 'Vardhaman College of Engineering, Hyderabad, Telangana, India' },
    { name: 'Alaa M. Khamis', affiliation: 'General Motors Canada, Canada' },
    { name: 'Amina Buallay', affiliation: 'Secretariat General of the Higher Education Council, Bahrain' },
    { name: 'Amine Benmakhlouf', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Amine Berqia', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
    { name: 'Amine Saida', affiliation: 'FST - Mohammedia, Hassan II University, Casablanca, Morocco' },
    { name: 'Amjad J. Humaidi', affiliation: 'University of Technology, Baghdad, Iraq' },
    { name: 'Ammar Al-Mhdawi', affiliation: 'Edge Hill University, UK' },
    { name: 'Amna Eleyan', affiliation: 'Manchester Metropolitan University, UK' },
    { name: 'Amr Ahmed Fouad', affiliation: 'Scientific Research School of Egypt, Cairo, Egypt' },
    { name: 'Anas Abou El Kalam', affiliation: 'ENSA, Cadi Ayyad University, Marrakesh, Morocco' },
    { name: 'Andrea Molinari', affiliation: 'University of Trento, Italy' },
    { name: 'Andrej Novak', affiliation: 'Zagreb School of Economics and Management, Croatia' },
    { name: 'Arezou Harraf', affiliation: 'Box Hill College Kuwait, Kuwait' },
    { name: 'Araby Madbouly', affiliation: 'Muscat College, Oman' },
    { name: 'Ashraf Darwish', affiliation: 'Helwan University, Egypt' },
    { name: 'Asmaa Saad Abd Elgwad Abdo', affiliation: 'Faculty of Computers and Artificial Intelligence, University of Sadat City, Menoufia, Egypt' },
    { name: 'Asmae Bengag', affiliation: 'ENSA - Berrechid, Hassan 1st University, Settat, Morocco' },
    { name: 'Aziz El Fazziki', affiliation: 'Faculty of Sciences Semlalia, Cadi Ayyad University, Marrakesh, Morocco' },
    { name: 'Azza Ahmed Abdo Ali', affiliation: 'Abdulrahman Bin Faisal University, Saudi Arabia' },
    { name: 'Baek-Young Choi', affiliation: 'Universities of Missouri – Kansas City, USA' },
    { name: 'Balakumaran Sugumar', affiliation: 'Synchrony, Atlanta USA' },
    { name: 'Basheer Al-Haimi', affiliation: 'Hebei University, China' },
    { name: 'Basma Boukenze', affiliation: 'School of Information Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'Basma El Mourtji', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Bouabid El Ouahidi', affiliation: 'Faculty of Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'Brahim Ouhbi', affiliation: 'ENSAM, Moulay Ismail University, Meknès, Morocco' },
    { name: 'Chadia El Asry', affiliation: 'Faculty of Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'Chakib Ben Njima', affiliation: 'ENIM, Sousse University, Tunisia' },
    { name: 'Chin-Shiuh Shieh', affiliation: 'National Kaohsiung University of Science and Technology, Taiwan' },
    { name: 'Chirag Agrawal', affiliation: 'Novelis Inc, Atlanta, USA' },
    { name: 'Chris Hughes', affiliation: 'University of Salford, UK' },
    { name: 'Chokri Ben Amar', affiliation: 'National Engineering School, University of Sfax, Tunisia' },
    { name: 'Daoui Cherki', affiliation: 'FST, Moulay Slimane University, Beni Mellal, Morocco' },
    { name: 'Djamel Saba', affiliation: 'Renewable Energy Research Unit in Saharan region Adrar, Algeria' },
    { name: 'Driss Bouzidi', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
    { name: 'Driss El Ouadghiri', affiliation: 'Facuty of Sciences, Moulay Ismail University, Meknès, Morocco' },
    { name: 'El Hassan Essoufi', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'El Mamoun Souidi', affiliation: 'Faculty of Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'El Mehdi Kandoussi', affiliation: 'INPT, Rabat, Morocco' },
    { name: 'El Moukhtar Zemmouri', affiliation: 'ENSAM, My Ismail University, Méknes, Morocco' },
    { name: 'Eman H. Alkhammash', affiliation: 'Taif University, Saudi Arabia' },
    { name: 'Essaid Sabir', affiliation: 'University of Téluq, Quebec, Montréal, Canada' },
    { name: 'Essam Rashed', affiliation: 'Nagoya Institute of Technology, Japan' },
    { name: 'Fatima Laasri', affiliation: 'Higher School of Technology, El Kelaâ Sraghna, Caddi Ayad University, Marrakesh' },
    { name: 'Fatima Lakrami', affiliation: 'Faculty of Sciences, Chouaïb Doukali University, El Jadida, Morocco' },
    { name: 'Fouzia Omary', affiliation: 'Faculty of Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'Ghizlane Orhanou', affiliation: 'Faculty of Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'Gopalakrishnan Venkatasubbu', affiliation: 'Home Depot, Atlanta, USA' },
    { name: 'Habib M. Kammoun', affiliation: 'Faculty of Science, University of Sfax, Tunisia' },
    { name: 'Hafssa Benaboud', affiliation: 'Facuty of Sciences, Mohammed V University, Rabat , Morocco' },
    { name: 'Haitam Ettazi', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Hajar Mousannif', affiliation: 'Faculty of Sciences Semlalia, Cadi Ayyad University, Marrakesh, Morocco' },
    { name: 'Hamadou Saliah-Hassane', affiliation: 'TELUQ, University of Quebec, Montreal, Canada' },
    { name: 'Hamid Taramit', affiliation: 'Center for Computational Simulation, Universidad Politécnica de Madrid, Spain' },
    { name: 'Hanae Sbai', affiliation: 'FST - Mohammedia, Hassan II University, Casablanca, Morocco' },
    { name: 'Hanan El Bakkali', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
    { name: 'Hatem Ben Sta', affiliation: 'University Tunis El Manar, Tunisia' },
    { name: 'Heba Mohamed Moustafa Askr', affiliation: 'Faculty of computers and Artificial Intelligence, University of Sadat City, Menoufia, Egypt' },
    { name: 'Heba M. Abdel-Atty', affiliation: 'Port Said University Egypt' },
    { name: 'Heba Mahmoud Afify', affiliation: 'Higher Institute of Engineering in Shorouk Academy, Egypt' },
    { name: 'Heba Nashaat', affiliation: 'Port Said University Egypt' },
    { name: 'Heba Y. M. Soliman', affiliation: 'Port Said University Egypt' },
    { name: 'Hicham Bahi', affiliation: 'University Mohammed VI Polytechnic, Benguerir, Morocco' },
    { name: 'Hicham Ben Alla', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Hicham Tribak', affiliation: 'Polydisciplinary Faculty, Ouarzazate, Morocco' },
    { name: 'Hind Mikram', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Houssam Halmaoui', affiliation: 'ISMAC, Rabat, Morocco' },
    { name: 'Ibraheem Kasim Ibraheem', affiliation: 'Dijlah University College, Baghdad, Iraq' },
    { name: 'Ibrahima Faye', affiliation: 'Universiti Teknologi PETRONAS, Malaysia' },
    { name: 'Ibtissame Aouragh', affiliation: 'ENSA – Béni Mellal, Soultan Moulay Slimane University, Béni Mellal, Morocco' },
    { name: 'Idriss Chana', affiliation: 'EST, My Ismail University, Méknes, Morocco' },
    { name: 'Iman Elmir', affiliation: 'I2S, Hassan 1st University, Settat, Morocco' },
    { name: 'Imane Hilal', affiliation: 'ESI, Mohammed V University, Rabat, Morocco' },
    { name: 'Iyad Lahcen Cherif', affiliation: 'INPT, Rabat, Morocco' },
    { name: 'Ismail Khalil', affiliation: 'Johannes Kepler University Linz, Austria' },
    { name: 'Jamal El Hachimi', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
    { name: 'Jamal Zahi', affiliation: 'Faculty of Economics and Management, Settat, Morocco' },
    { name: 'Jaouad Dabounou', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Joshua A. Abolarinwa', affiliation: 'Namibia University of Science and Technology, Namibia' },
    { name: 'Kamal Bouhassoune', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Karmela Aleksis Maslac', affiliation: 'Zagreb School of Economics and Management, Croatia' },
    { name: 'Karthik Bodducherla', affiliation: 'IQVIA, Gilber, Arizona, USA' },
    { name: 'KC Santosh', affiliation: 'University of South Dakota, USA' },
    { name: 'Khadija Douzi', affiliation: 'FST - Mohammedia, Hassan II University, Casablanca, Morocco' },
    { name: 'Khalid El Makkaoui', affiliation: 'Polydisciplinary Faculty, Nador, Morocco' },
    { name: 'Khalid Zine-Dine', affiliation: 'Facutlty of Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'Khoukhi Faddoul', affiliation: 'FST - Mohammedia, University Hassan II, Casablanca, Morocco' },
    { name: 'Krishnaveni Marimuthu', affiliation: 'Deemed University, Coimbatore, India' },
    { name: 'Ladjel Bellatreche', affiliation: 'ISAE-ENSMA, Chasseneuil - France' },
    { name: 'Laila Damri', affiliation: 'ENSA - Berrechid, Hassan 1st University, Settat, Morocco' },
    { name: 'Laila Fetjah', affiliation: 'Facutly of Sciences Aïn Chock, Hassan II University, Casablanca, Morocco' },
    { name: 'Lamia Karim', affiliation: 'ENSA - Berrechid, Hassan 1st University, Settat, Morocco' },
    { name: 'Laura O’Mahony', affiliation: 'University of Limerick, Ireland' },
    { name: 'Lavika Goel', affiliation: 'Malaviya, National Institute of Technology (NIT), Jaipur- India' },
    { name: 'Layth Sliman', affiliation: 'EFREI, Paris,France' },
    { name: 'Lobna Mohamed Abouelmagd', affiliation: 'Misr Higher Institute for Engineering and Technology, Mansoura, Egypt' },
    { name: 'Loubna Hamami', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Mahmoud Nassar', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
    { name: 'Maria Zemzami', affiliation: 'National Graduate School of Arts and Crafts (ENSAM), Rabat, Morocco' },
    { name: 'Mehrez Abdellaoui', affiliation: 'High Institute of Applied Sciences and Technologies, Kairouan, Tunisia' },
    { name: 'Mohamed Bahaj', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Mohamed Bakhouya', affiliation: 'International University of Rabat, Morooco' },
    { name: 'Mohamed Baslam', affiliation: 'FST, Moulay Slimane University, Beni Mellal, Morocco' },
    { name: 'Mohamed Ben Halima', affiliation: 'ISIMS, University of Sfax, Tunisia' },
    { name: 'Mohamed Chakraoui', affiliation: 'Polydisciplinary Faculty of Khouribga, Morocco' },
    { name: 'Mohamed Chaouki Abounaima', affiliation: 'FST, My Abdellah University, Fès, Morocco' },
    { name: 'Mohamed El Kamili', affiliation: 'EST, Hassan II University, Casablanca, Morocco' },
    { name: 'Mohamed Et-Tolba', affiliation: 'INPT, Rabat, Morocco' },
    { name: 'Mohamed Es-Sadek Zeriab', affiliation: 'National Graduate School of Arts and Crafts (ENSAM), Rabat, Morocco' },
    { name: 'Mohamed Hanini', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Mohamed Hossam Ahmed', affiliation: 'School of Electrical Engineering and Computer Science, Ottawa, Canada' },
    { name: 'Mohamed Kissi', affiliation: 'FST - Mohammedia, Hassan II University, Casablanca, Morocco' },
    { name: 'Mohamed Lahby', affiliation: 'Higher Normal School, Hassan II University, Casablanca, Morocco' },
    { name: 'Mohamed Mohamed Elsakka', affiliation: 'Port Said University Egypt' },
    { name: 'Mohamed Moughit', affiliation: 'ENSAM, Hassan II University, Casablanca, Morocco' },
    { name: 'Mohamed Nabil', affiliation: 'Faculty of Sciences, Chouaïb Doukali University, El Jadida, Morocco' },
    { name: 'Mohamed Naimi', affiliation: 'ENSA - Berrechid, Hassan 1st University, Settat, Morocco' },
    { name: 'Mohamed Nemiche', affiliation: 'Polydisciplinary Faculty of Taza, Sidi Mohamed Ben Abdellah University, Morocco' },
    { name: 'Mohamed Sabbane', affiliation: 'Facuty of Sciences, My Ismail University, Meknès, Morocco' },
    { name: 'Mohamed Sadik', affiliation: 'ENSA - Berrechid, Hassan 1st University, Settat, Morocco' },
    { name: 'Mohamed Youssfi', affiliation: 'ENSET - Mohammedia, Hassan II University, Casablanca, Morocco' },
    { name: 'Mohammed Abdel-Rahman Marey', affiliation: 'MISR University, Egypt' },
    { name: 'Mohammed Ridounai', affiliation: 'EST, Hassan II University, Casablanca, Morocco' },
    { name: 'Mohammed Khalil', affiliation: 'FST - Mohammedia, Hassan II University, Casablanca, Morocco' },
    { name: 'Mostafa Belkasmi', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
    { name: 'Mostafa Bellafkih', affiliation: 'INPT, Rabat, Morocco' },
    { name: 'Mostafa Ezziyyani', affiliation: 'FST, Abdelmalek Essaadi University,Tangier, Morocco' },
    { name: 'Mostafa Saadi', affiliation: 'ENSA - Khouribga, Moulay Slimane University, Morocco' },
    { name: 'Mostapha Zbakh', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
    { name: 'Mouad Ben Mamoun', affiliation: 'Faculty of Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'Moulay Lahcen Hasnaoui', affiliation: 'EST, Moulay Ismail University, Meknès, Morocco' },
    { name: 'Mounir Rifi', affiliation: 'EST, Hassan II University, Casablanca, Morocco' },
    { name: 'Nabil Azouagh', affiliation: 'FST - Mohammedia, Hassan II University, Casablanca, Morocco' },
    { name: 'Nabil Benamar', affiliation: 'EST, Moulay Ismail University, Meknès, Morocco' },
    { name: 'Nabil Laachfoubi', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Nadif Sami Abdelaaziz', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Najib Naja', affiliation: 'INPT, Rabat, Morocco' },
    { name: 'Najima Daoudi', affiliation: 'School of Information Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'Najoua Lagmiri', affiliation: 'ISMAGI, Rabat, Morocco' },
    { name: 'Nashwa Ahmad Kamal', affiliation: 'Cairo University, Egypt' },
    { name: 'Nassereddine Bouchaib', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Nickolas S. Sapidis', affiliation: 'University of Western Macedonia, Greece' },
    { name: 'Nidhi Sharma', affiliation: 'Cox Automotive Inc., New York, USA' },
    { name: 'Niketa Gandhi', affiliation: 'MIRLabs, Washington, USA' },
    { name: 'Nizar Rokbani', affiliation: 'High Institute of Applied Sciences and Technology, University of Sousse, Tunisia' },
    { name: 'Noha El-Shoafy', affiliation: 'Faculty of Computers and Artificial Intelligence, Matrouh University, Matrouh, Egypt' },
    { name: 'Noreddine Gherabi', affiliation: 'ENSA - Khouribga, Morocco' },
    { name: 'Noura Aknin', affiliation: 'Faculty of Sciences, Abdelmalek Essaâdi University, Tétouan, Morocco' },
    { name: 'Omar Ait Oualhaj', affiliation: 'INPT, Rabat, Morocco' },
    { name: 'Omar El Beggar', affiliation: 'FST - Mohammedia, Hassan II University, Casablanca, Morocco' },
    { name: 'Omar El Beqqali', affiliation: 'Faculty of Sciences, Fès, Morocco' },
    { name: 'Oscar Castillo', affiliation: 'Tijuana Institute of Technology, Tijuana, Mexico' },
    { name: 'Ouail Ouchetto', affiliation: 'FSJES, Université Hassan II, Casablanca, Morocco' },
    { name: 'Parthasarathy Subashini', affiliation: 'Deemed University, Coimbatore, India' },
    { name: 'Pavel Krömer', affiliation: 'VSB Technical University of Ostrava, Czech Republic' },
    { name: 'Peter J. Tonelato', affiliation: 'School of Medicine, University of Missouri, Columbia MO, USA' },
    { name: 'Qasim Zureigat', affiliation: 'Sulaiman AlRajhi School of Business, Saudia Arabia' },
    { name: 'Rachid Dakir', affiliation: 'Polydisciplinary Faculty, Ouarzazate, Morocco' },
    { name: 'Rachid Latif', affiliation: 'ENSA, Ibn Zohr University, Agadir, Morocco' },
    { name: 'Rachida Ajhoun', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
    { name: 'Rachid Saadane', affiliation: 'EHTP, Hassan II University, Casablanca, Morocco' },
    { name: 'Rajendran Sobha Ajin Singh', affiliation: 'Painary P.O mIdukki, Kerala, India' },
    { name: 'Rajesh Vayyala', affiliation: 'PRA Group Inc, Nord Carolina, USA' },
    { name: 'Rania Ahmed Mohamed', affiliation: 'Modern University for the Technology & Information, Egypt' },
    { name: 'Rania Hodhod', affiliation: 'Columbus State University, USA' },
    { name: 'Rasha Saleh Abouelyazid', affiliation: 'Egyptian Chinese University, Cairo, Egypt' },
    { name: 'Rawya Y. Rizk', affiliation: 'Port Said University, Egypt' },
    { name: 'Rajgopal Devabhaktuni', affiliation: 'Macy\'s, Géorgie, USA' },
    { name: 'Rehab F. Abdel-Kader', affiliation: 'Port Said University Egypt' },
    { name: 'S.P. Raja', affiliation: 'R&D Institute of Science and Technology, Tamil Nadu, India' },
    { name: 'Safaa Mahrach', affiliation: 'Higher School of Technology, Beni Mellal, Morocco' },
    { name: 'Said Ben Alla', affiliation: 'ENSA - Berrechid, Hassan 1st University, Settat, Morocco' },
    { name: 'Said Broumi', affiliation: 'Faculty of Science Ben M’Sik, Hassan 2 University, Casablanca, Morocco' },
    { name: 'Said El Kafhali', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Said Jai Andaloussi', affiliation: 'FS Aïn Chock, Hassan II University, Casablanca, Morocco' },
    { name: 'Said Raghay', affiliation: 'FST, Cadi Ayyad University, Marrakech, Morocco' },
    { name: 'Said Rakrak', affiliation: 'FST, Cadi Ayyad University, Marrakech, Morocco' },
    { name: 'Salah El Hadaj', affiliation: 'ENCG, Cadi Ayyad University, Marrakesh, Morocco' },
    { name: 'Salima Chantit', affiliation: 'FST - Mohammedia, Hassan II University, Casablanca, Morocco' },
    { name: 'Samir Anter', affiliation: 'FST - Mohammedia, Hassan II University, Casablanca, Morocco' },
    { name: 'Samira Douzi', affiliation: 'Faculty of Medicine and Pharmacy, Mohammed V University, Rabat, Morocco' },
    { name: 'Sanaa El Filali', affiliation: 'Faculty of Sciences Ben M\'Sick, Hassan II University, Casablanca, Morocco' },
    { name: 'Sara Arezki', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Sathish Kumar Velayudam', affiliation: 'Cox Automotive, Atlanta, USA' },
    { name: 'Shakir Ullah', affiliation: 'Stratford University, USA' },
    { name: 'Sherif M. Abuelenin', affiliation: 'Port Said University Egypt' },
    { name: 'Sofia Douda', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Soukaina Mihi', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Srikanth Baride', affiliation: 'University of South Dakota, USA' },
    { name: 'Sundaramurthy Gayathri Devi', affiliation: 'Deemed University, Coimbatore, India' },
    { name: 'Supraja Chinthala', affiliation: 'Product Management in Data products, Atlanta, USA' },
    { name: 'Talal Al-Hayale', affiliation: 'University of Windsor, Canada' },
    { name: 'Tolga Ensari', affiliation: 'Department of Computer and Information Science, Arkansas Tech University, USA' },
    { name: 'Umang Singh', affiliation: 'Institute of Technology and Science, Ghaziabad, India' },
    { name: 'Walaa Saber', affiliation: 'Port Said University Egypt' },
    { name: 'Wiame Ech-Chelfi', affiliation: 'National School of Applied Sciences, Berrechid, Morocco' },
    { name: 'Yannis Korkontzelos', affiliation: 'Edge Hill University, UK' },
    { name: 'Youssef Balouki', affiliation: 'EST -Salé, Mohammed V University, Rabat, Morocco' },
    { name: 'Youssef Ben Youssef', affiliation: 'ENSA - Berrechid, Hassan 1st University, Settat, Morocco' },
    { name: 'Youssef Hilali', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Youssef Saadi', affiliation: 'FST, Sultan Moulay Slimane University, Beni Mellal, Morocco' },
    { name: 'Zahi Jarir', affiliation: 'Faculty of Sciences Semlalia, Cadi Ayyad University, Marrakesh, Morocco' },
    { name: 'Zakaria Boulghasoul', affiliation: 'ENSA, Cadi Ayyad University, Marrakesh, Morocco' },
  ];
  return (
    <div className="committees-container">
      <h1 className="committees-main-title">Committees</h1>

      {committees.map((section, sectionIndex) => (
        <div key={sectionIndex} className="committee-section">
          <h2 className="committee-section-title">{section.title}</h2>
          {
            // Check if the current section is 'Track Chairs'
            section.title === 'Track Chairs' ? (
              // Special rendering for Track Chairs section
              <div>
                {/* Iterate through members and group participants by track title */}
                {(() => {
                  const elements: React.ReactNode[] = [];
                  let currentTrackMembers: CommitteeMember[] = [];

                  const renderTrackMembers = (members: CommitteeMember[], titleIndex: number) => {
                    if (members.length > 0) {
                      elements.push(
                        <div key={`track-members-grid-${titleIndex}`} className="track-participants-grid">
                          {members.map((trackMember, trackMemberIndex) => (
                            <div key={`track-member-${titleIndex}-${trackMemberIndex}`} className="committee-item">
                              {/* No image based on the provided style in the image */}
                              <div className="member-info">
                                <span className="member-name">{trackMember.name}</span>
                                {trackMember.affiliation && <span className="member-affiliation">{trackMember.affiliation}</span>}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    }
                  };

                  section.members.forEach((member, index) => {
                    if (member.type === 'trackTitle') {
                      // Render previous track's members if any
                      renderTrackMembers(currentTrackMembers, index - currentTrackMembers.length);
                      currentTrackMembers = []; // Reset for the new track

                      // Add the track title
                      elements.push(
                        <div key={`track-title-${index}`} className="committee-item" data-type="trackTitle">
                          <span className="member-name">{member.name}</span>
                        </div>
                      );
                    } else {
                      // Add participant to the current track's members
                      currentTrackMembers.push(member);
                    }
                  });

                  // Render the last track's members
                  renderTrackMembers(currentTrackMembers, section.members.length - currentTrackMembers.length);

                  return elements;
                })()}
              </div>
            ) : (
              // Default rendering for other sections using the original list structure
              <ul className="committee-list">
                {section.members.map((member: CommitteeMember, memberIndex: number) => (
                  <li key={memberIndex} className="committee-item">
                    {member.image && <img src={member.image} alt={member.name} className="member-photo" />}
                    <div className="member-info">
                      <span className="member-name">{member.name}</span>
                      {member.affiliation && <span className="member-affiliation">{member.affiliation}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      ))}

      {/* Technical Program Committee (TPC) Members */}
      <div className="committee-section">
        <h3 className="committee-section-title">TPC Members</h3>
        <ul className="committee-list">
          {tpcMembers.map((member, index) => (
            <li key={index} className="committee-item">
              <div className="member-info">
                <span className="member-name">{member.name}</span>
                <span className="member-affiliation">{member.affiliation}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

// Call For Papers component
const CallForPapers: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  const tracks: { [key: string]: string[] } = {
    "Foundations of Artificial Intelligence and Machine Learning": [
      "Core AI algorithms and models",
      "Deep learning, reinforcement learning, and neural networks",
      "Explainable AI, fairness, and responsible AI",
    ],
    "Smart Data Engineering and Analytics ": [
      "Data mining, predictive modeling, and statistical analysis",
      "Big data infrastructure, cloud computing, and data pipelines",
      "Data visualization, dashboards, and decision intelligence",
    ],
    "Natural Language Processing and Human-Centered AI": [
      "Text mining, sentiment analysis, and language modeling",
      "Conversational agents, chatbots, and speech technologies",
      "Human-AI interaction and user-centric design",
    ],
    "AI Applications in Industry, Society & Sustainability": [
      "AI in healthcare, finance, education, and smart cities",
      "AI for climate, agriculture, and sustainable development",
      "Ethical, legal, and societal implications of AI",
    ],
    "Cybersecurity, Privacy & Trust in AI": [
      "AI for threat detection and cyber defense",
      "Privacy-preserving machine learning and secure AI",
      "Blockchain, trust, and transparency in intelligent systems",
    ],
    "Computer Vision and Applications": [
      "Object Detection (e.g., YOLO, SSD, Faster R-CNN)",
      "Semantic Segmentation (e.g., U-Net, DeepLab)",
      "Instance Segmentation (e.g., Mask R-CNN)",
      "Image Captioning",
      "Image Super-Resolution",
      "Image Denoising and Restoration",
      "Edge Detection and Contour Analysis",
      "Optical Flow and Motion Estimation",
      "3D Reconstruction",
      "Depth Estimation",
      "Stereo Vision",
      "Facial Recognition and Emotion Detection",
      "Pose Estimation (2D/3D)",
      "Gesture Recognition",
      "Action Recognition in Videos",
      "Visual Question Answering (VQA)",
      "Scene Understanding and Contextual Reasoning"
    ]
  };

  return (
    <div className="registration-container">
      <h1 className="registration-title">Call For Papers</h1>
      <div className="registration-info">
        <p className="conference-overview-text">
          We are pleased to invite you to participate in the 4th International Conference on Artificial Intelligence and Smart Data Science (AISDS'2025), which will be held in Marrakech, Morocco, from December 04–06, 2025.
        </p>
        <p className="conference-overview-text">
          AISDS'2025 is organized by the Computer, Networks, Mobility and Modeling Laboratory (IR2M), Faculty of Sciences and Techniques, Hassan 1st University, Settat, Morocco, in collaboration with the Scientific Research Group in Egypt (SRGE), Cairo University, Egypt.
        </p>
        <p className="conference-overview-text">
          This conference serves as a global platform for researchers, practitioners, and industry professionals to share their latest innovations, explore emerging trends, and foster interdisciplinary collaboration in the fields of Artificial Intelligence and Smart Data Science.
        </p>
        <p className="conference-overview-text">
          AISDS'2025 will showcase state-of-the-art research and practical applications, with a focus on advancing intelligent systems and data-driven technologies.
        </p>
      </div>
      <ul className="tracks-list">
        {Object.keys(tracks).map((track) => (
          <li 
            key={track}
            className={`track-item ${selectedTrack === track ? 'active' : ''}`}
            onClick={() => setSelectedTrack(selectedTrack === track ? null : track)}
          >
            <div className="track-header">
              <h3>{track}</h3>
              <span className="track-icon">{selectedTrack === track ? '−' : '+'}</span>
            </div>
            {selectedTrack === track && (
              <div className="track-details">
                <ul>
                  {tracks[track].map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="registration-info">
        <p>
          All accepted papers will be published in the conference proceedings (Volume 1 on AI and Computer Vision and Volume 2 on AI and Data Science), which will be
          published by Springer in the series of Lecture Notes on Data Engineering
          and Communications Technologies, indexed by SCOPUS and EI-index <a href="https://www.springer.com/series/15362" target="_blank" rel="noopener noreferrer">https://www.springer.com/series/15362</a>.
        </p>

      </div>
    </div>
  );
};

// Paper Submission component
const PaperSubmission: React.FC = () => (
  <div className="registration-container">
    <h1 className="registration-title">Paper Submission</h1>

    
    <div className="submission-deadline-extended">
      Extended Hard Submission Deadline: September 30, 2025
    </div>

    <div className="registration-info"> 
      <p>
        Authors are invited to submit original research contributions not concurrently submitted elsewhere. Normal
        length papers should be 8-10 pages, formatted in <a href="https://www.springer.com/gp/authors-editors/conference-proceedings/editors/word-template/19338734?srsltid=AfmBOoqsbSW-OUhSl4q7rBixSRfSYLn9uF5q_2JrkctDtu4zm-YtT39h">Springer's single column format</a> and <a href="https://www.springer.com/in/livingreviews/latex-templates?Frontend@footer-livingreviews.bottom3.url?=&srsltid=AfmBOoqxg23X9qSzjWcsfSNuOPa1qNuqiFdbPD1EGRWdEPFRZKIDsuHv">Springer's single latex format</a>.
      </p>
      <p>
        Submitted papers will be refereed by at least three reviewers for quality, correctness, originality, and relevance. Notification and
        reviews will be communicated via email. Authors of the best papers will be invited to extend their papers for inclusion in a special
        issue of some journals indexed by SCOPUS and EI.
      </p>
    </div>

    <h2 className="rate-title">Web Submission</h2>

    <div className="registration-info">
      <p>
        <a href="https://meteor.springer.com/AISDS2025">https://meteor.springer.com/AISDS2025</a>
      </p>
    </div>

    <div className="registration-info">
      <p>
        <a href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fegyptscience-srge.com%2FAISI2025%2FTemplate.docx&wdOrigin=BROWSELINK">Word Template</a>
      </p>
    </div>

    <div className="registration-info">
      <p>
        All accepted conference papers will be presented at the conference and included in the published proceedings by Springer.
      </p>
      

    </div>

    <h2 className="rate-title">Recommendations for authors</h2>
    
    <div className="registration-info">
      <ul className="recommendations-list">
        <li>Be sure that you are using the required Springer template.</li>
        <li>Plagiarism MUST be less than 20% checked by yourself. (Plagiarism is very dangerous for the authors)</li>
        <li>Provide high-quality figures - do not include color background on all illustrated figures.</li>
        <li>Be sure that all equations have a number and in order.</li>
        <li>Be sure that all Figures, tables, and sections have numbers in order.</li>
        <li>Be sure that all references are correct and complete.</li>
        <li>Be sure that all references are cited within the text.</li>
        <li>The max number of pages is TEN pages (no more).</li>
        <li>Provide five keywords after the abstract.</li>
        <li>Be sure that you did not used ChatGPT, the paper will be removed or retracted after publication.</li>
      </ul>
    </div>

  </div>
);

// Registration component
const Registration: React.FC = () => {
  const foreignRates = [
    { category: 'Regular Author', early: '400 USD', late: '450 USD' },
    { category: 'Student Author', early: '300 USD', late: '350 USD' },
    { category: 'Extra paper', early: '100 USD', late: '150 USD' },
    { category: 'Non Author', early: '150 USD', late: '200 USD' },
  ];

  const egyptianRates = [
    { category: 'Regular Author', early: '3 000 Egyptian pounds', late: '3 500 Egyptian pounds' },
    { category: 'Student Author', early: '2 500 Egyptian pounds', late: '3 000 Egyptian pounds' },
    { category: 'Extra paper', early: '500 Egyptian pounds', late: '600 Egyptian pounds' },
    { category: 'Non Author', early: '5 000 Egyptian pounds', late: '6 000 Egyptian pounds' },
  ];

  const moroccanRates = [
    { category: 'Regular Author', early: '2 000 MAD', late: '2 500 MAD' },
    { category: 'Student Author', early: '1 500 MAD', late: '1 900 MAD' },
    { category: 'Extra paper', early: '800 MAD', late: '1 000 MAD' },
    { category: 'Non Author', early: '1 200 MAD', late: '1 600 MAD' },
  ];

  return (
    <div className="registration-container">
      <h2 className="registration-title">Registration</h2>
      
      <div className="registration-deadline">
      Registration deadline for participants: (Early registration) is October 29, 2025
      </div>
      
      <div className="registration-info">
        <p>
          To qualify for the discount for delegates coming from Egyptian Universities, ALL authors need to come from an Egyptian University/Research Institute, and they need to show an official letter from their university that they work/study at the given Egyptian University. If a foreign author is involved in the given paper, the paper will not qualify for a local author discount.
        </p>
      </div>

      <div className="registration-rates">
        <div className="rate-card">
          <h3 className="rate-title">Registration Rates for Foreign Participants</h3>
          <table className="registration-table">
            <thead>
              <tr>
                <th>Registration Type</th>
                <th>Early Rate</th>
                <th>Late Rate</th>
              </tr>
            </thead>
            <tbody>
              {foreignRates.map((rate, index) => (
                <tr key={index}>
                  <td>{rate.category}</td>
                  <td className="early-rate">{rate.early}</td>
                  <td className="late-rate">{rate.late}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rate-card">
          <h3 className="rate-title">Registration Rates for Egyptian Participants</h3>
          <table className="registration-table">
            <thead>
              <tr>
                <th>Registration Type</th>
                <th>Early Rate</th>
                <th>Late Rate</th>
              </tr>
            </thead>
            <tbody>
              {egyptianRates.map((rate, index) => (
                <tr key={index}>
                  <td>{rate.category}</td>
                  <td className="early-rate">{rate.early}</td>
                  <td className="late-rate">{rate.late}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rate-card">
          <h3 className="rate-title">Registration Rates for Moroccan Participants</h3>
          <table className="registration-table">
            <thead>
              <tr>
                <th>Registration Type</th>
                <th>Early Rate</th>
                <th>Late Rate</th>
              </tr>
            </thead>
            <tbody>
              {moroccanRates.map((rate, index) => (
                <tr key={index}>
                  <td>{rate.category}</td>
                  <td className="early-rate">{rate.early}</td>
                  <td className="late-rate">{rate.late}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Invited Speaker component
const InvitedSpeaker: React.FC = () => {
  // Function to render text with <br> tags as line breaks
  const renderTextWithBreaks = (text: string) => {
    const parts = text.split(/(<br\s*\/?>)/gi);
    return parts.map((part, index) => {
      if (/<br\s*\/?>/gi.test(part)) {
        return <br key={index} />;
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };
  
  const speakers = [
    {
      name: 'Dr. Ajith Abraham',
      affiliation: 'Vice Chancellor, Sai University, Chennai, India. Founding Dean, School of Artificial Intelligence.',
      image: ajithAbraham,
      bio: `Prof. Ajith received his Ph.D. degree in Computer Science from Monash University, Melbourne, Australia (2001) and a Master of Science degree from Nanyang Technological University, Singapore (1998). Ajith's research experience includes over 35 years in the Industry and Academia. He has a world wide academic experience. As an Investigator / Co-Investigator, he is part of research grants worth over 110 Million US$. Ajith works in a multi-disciplinary environment involving machine intelligence, cyber-physical systems, Internet of things, network security, sensor networks, Web intelligence, data mining and applied to various real world problems. He has given more than 250+ plenary lectures and conference tutorials in these areas. He has authored / co-authored over 1500+ publications (with colleagues from nearly 70+ countries) and has an h-index of 120+. Some of his research works have also won best paper awards at International conferences.\nCurrently he is the Vice Chancellor at Sai University, Chennai and the Founding Dean of the School of Artificial Intelligence. Prior to this appointment he was the Vice Chancellor at Bennett University (Times Group) and Dean of Faculty of Computing and Data Science at FLAME University, Pune India. He was the Founding Director of Machine Intelligence Research Labs (MIR Labs - http://www.mirlabs.org), which has members from 100+ countries. He was the Chair of IEEE Systems Man and Cybernetics Society Technical Committee on Soft Computing (2008-2021) and a Distinguished Lecturer of IEEE Computer Society representing Europe (2011-2013). He serves/served the editorial board of over 50 International journals.`,
      talkTitle: 'Generative AI in Healthcare: Innovations and Challenges',
      abstract: 'Generative AI is rapidly transforming healthcare by enabling new modes of prediction, diagnosis, and treatment design. Recent innovations demonstrate its ability to synthesize multimodal medical data imaging, genomics, clinical notes, and sensor streams to uncover subtle biomarkers and accelerate clinical insights. Experimental illustrations show remarkable progress: in cancer detection, generative models can enhance low-resolution scans, simulate tumor progression, and generate synthetic training datasets that improve early-stage diagnostic accuracy; in neurological disorders, they can reconstruct missing brain imaging data, model neural degeneration trajectories, and support personalized therapy planning. In this talk, we will illustrate some of our findings. Despite these advances, significant challenges remain, including model interpretability, data bias, clinical validation, regulatory hurdles, and ethical concerns around synthetic data fidelity and patient privacy. Addressing these issues is crucial for translating generative AI from promising laboratory experiments to safe, trustworthy, and equitable deployment in real-world healthcare settings.'
    },
    {
      name: 'Dr. Adel M. Alimi',
      affiliation: 'Full Professor, University of Sfax, ENIS, Tunisia',
      image: adelAlimi,
      bio: `Prof. Adel M. Alimi graduated in Electrical Engineering in 1990 (from ENIS, Sfax, Tunisia). He obtained a PhD (from Ecole Polytechnique of Montreal, Canada) and then an HDR (from ENIS, Sfax, Tunisia) both in Electrical & Computer Engineering in 1995 and 2000 respectively. He has been Full Professor in Electrical Engineering since 2006, at the University of Sfax, ENIS (National Engineering School of Sfax), that he joined in 1996 as Assistant Professor and then as Associate Professor in 2001. He is Distinguisheed Visiting Professor at the University of Johannesburg, South Africa (Faculty of Engineering & the Built Environment, Department of Electrical & Electronic Engineering Science) (since 2024). He is founder and was Director of the research REGIM Lab in intelligent Machines (1997-2020). He also was Director of the National Engineering School of Sfax, University of Sfax, Tunisia (2005-2011), and was its Deputy Director & Director of Studies (2003-2005). He was Director of the Tunisia Erasmus+ Office (2018-2020). He was Visiting Professor at the University of Johannesburg, South Africa (Faculty of Engineering & the Built Environment, Department of Electrical & Electronic Engineering Science) (2021-2023). He was Visiting Professor at the University of Applied Sciences of Weingarten, Germany (2002). Prof. Alimi Scientific Production: - h index=38 (Web of Science), 43 (Scopus), 54 (Google Scholar) - - - - - Citations=7.3+k (Web of Science), 9.9+k (Scopus), 16.6+k (Google Scholar) 210+ Scientific Journal Papers 532+ Scientific Conference Papers 122+ PhD Thesis defended 20+ national patents Prof. Alimi managed funds of 2.8+M TND & 1.5+M € for 10+ national scientific projects and 30+ international scientific projects. Prof. Alimi received: - Tunisian Presidency Award for Scientific Research and Technology, 2010 - Tunisian National Order of Merit, at the title of the Education and Science Sector, 2006`,
      talkTitle: 'Deep Learning for Parkinson\'s Disease Detection from Handwriting',
      abstract: `This talk explores a simple but powerful idea: your handwriting can reveal the earliest signs of Parkinson's disease. We introduce two new large-scale handwriting datasets—capturing both online pen trajectories and offline drawings—collected from healthy participants and patients before and after treatment. These datasets allow us to observe Parkinson's motor signatures with unprecedented clarity. By combining geometric modeling, Beta-Elliptical dynamics, fuzzy perceptual cues, and state-of-the-art deep learning—from BLSTM networks to SqueezeNet, TinySiamese, and VGG architectures—we build systems that can reliably distinguish Parkinson's patients from healthy individuals across multiple writing tasks. The results are strong, consistent, and repeatable. But the story doesn't stop at algorithms. We translate these scientific advances into a mobile application that turns a simple handwriting test into a fast, accessible, and non-invasive screening tool. This opens the door to early detection anywhere—from clinics to remote communities. Looking ahead, we aim to decode treatment responses, identify PD subtypes, and link handwriting traits to genetic markers. Handwriting is not just ink on paper—it's a digital window into brain.`
    },
    {
      name: 'Dr. Mohammed Essaaidi',
      affiliation: 'Full Professor, University Mohammed V, ENSIAS, Rabat',
      image: mohammedessaidi,
      bio: `Prof. Mohamed Essaaidi is a Professor and past Dean of ENSIAS school of Computer Science, Mohammed V University, Rabat, Morocco, past Director General of the Moroccan School of Engineering  Science (EMSI) Group, (2023-2024), Chief of Party of Interactive Digital & XR Center Morocco at UM6P (2020-2025), Past Director of International Cooperation at the Ministry of General Affairs & Governance, Morocco (2019), and past faculty member of Abdelmalek Essaadi University, Tetuan, Morocco (1993-2011). <br>          He is an IEEE Senior Member,  he was the IEEE Morocco Section Founding Chair (2004-2016), IEEE MTT-S/AP-S Morocco Chapter Founding Chair (2008),  IEEE Global Cities Alliance, Middle East & Africa Chair (2020-2022), and he has been the IEEE Humanitarian Technologies Board Programs Committee Chair  and IEEE Special Interest Group on Humanitarian Technologies Global Chair since January (2023-2025), IEEE Public Safety Technology, Education Chair (2021-22), IEEE Global Cities Alliance, MEA Chair (2020-22), IEEE Global Committee on Accreditation Activities, Member (2018-2019), and IEEE Teaching Excellence Hub, Member (2021-22). He is currently. <br>          Furthermore, Prof. Essaaidi serves as an international expert on Education,  AI,  Digital Transformation and Smart Cities for several international organizations such as UN, ITU, UNESCO, EU,  ICESCO and UCLG Africa, and he served as  a member of the OversightCommittee of US National Academies of Science Engineering & Medicine  US - Arab and US Africa Frontiers of Science Engineering & Medicine Symposia (2018-2024). <br>          He has authored and co-authored 10 books and more than 200 papers in international refereed journals and conferences in the field of AI, Electrical & Computer engineering and their diverse applications. In addition, he is the founder and the General Chair / co-chair of several IEEE technically sponsored international conferences such as Information and Communication Technologies International Symposium (2005, 2007), NATO Advance Research Workshop on Information Security Assurance (2005), International Conference of Multimedia Computing and Systems series (2009-2016). He also co-organized and co-chaired IEEE Smart Cities Summit inMay 2020, the US National Academies 5th Arab American Science, Engineering and Medicine Frontiers Symposium in November 2017, Rabat, Morocco, US NSF sponsored workshop on Smart Cities in January 2016 in Rabat, Morocco, and  AI Workshop series (2022-2023). He has also served in the Organizing committees and TPC and presented keynote talks at many other international conferences worldwide on AI, Digital transformation, Smart Cities and Sustainable Development. <br>          Moreover, in the framework of his position as the Director of International Cooperation in the Ministry of General Affairs and Governance (Morocco), he was involved in the coordination of the World Bank Group Morocco Country Partnership Framework (2019-2024) and OECD Morocco Country Program (2019-2024) among other international cooperation programs. In addition, in his leadership positions in engineering education institutions he was involved in engineering programs accreditation activities involving ABET, CDIO and EuRace EE standards and criteria for accreditation and quality assurance. <br>          Prof. Essaaidi is a the recipient of the 2023 IEEE MGA Larry K. Wilson Transnational Award For “exemplary leadership, significant contributions, and sustained excellence in leading IEEE Technical Activities and Humanitarian programs globally”, 2024 IEEE Education Society William E. Sayle II Award For "leadership in and contributions to advancing engineering education and digital transformation",  2024 APEX  Grand Award in the Electronic Media category as the guest coeditor of IEEE HKN THE BRIDGE, Issue 3, Volume 119, “Humanitarian Technologies for a Sustainable Society”, he was inducted in the IEEE Etta Kappa Nu (honor society) in July 2024 in recognition for “excellent scholarship and other attainment”, Grand Prize of Innovation Award BIXPO 2018, Korea, and his biography was listed in Who's Who in The World in 1999.`,
      talkTitle: 'Toward a Holistic Approach to Smart and Sustainable Mobility',
      abstract: 'The rapid growth of urban populations demands a fundamental shift toward resilient, sustainable, and equitable mobility. This talk advocates for a Holistic Approach to Smart and Sustainable Mobility (SSM), moving beyond siloed technological interventions to a comprehensive, citizen-centric strategy that integrates various urban systems. A truly holistic approach places people at the center, utilizing digital technologies like the Internet of Things (IoT), AI, and Big Data as enablers for integrated urban platforms. We will explore a framework for SSM, detailing its materialization through: <br> 1.	Integrated Solutions for managing diverse transport modalities (e.g., MaaS, intelligent traffic systems) to optimize resource allocation. <br> 2. Sustainability and Resilience by integrating green initiatives (e.g., low-emission zones) to align with global goals. <br> 3. Citizen-Centric Governance that fosters participatory planning and uses real-time data to meet the needs of all residents. <br> Adopting this integrated, human-centric view allows cities to effectively transition to an SSM model that drives equitable growth and secures a resilient future.',
    },
    {
      name:"Dr. Mohammed Khalil",
      affiliation: 'Professor, Hassan II University of Casablanca – FSTM, Morocco',
      image: mohammedkhalil,
      bio: `Prof. Mohammed Khalil holds a Ph.D. in Computer Science and has been a faculty member at Hassan II University of Casablanca – FSTM since 2015. His research focuses primarily on artificial intelligence, particularly speech recognition and automated medical diagnosis (medical imaging, ECG and EEG signal analysis). He is also actively engaged in promoting artificial intelligence in Morocco. He is the co-founder and President of MoroccoAI, a non-profit organization dedicated to fostering excellence in AI across the country. Between 2019 and 2021, Prof. Mohammed Khalil served as Chief Digital Officer at Hassan II University of Casablanca, where he contributed to leading the university's digital transformation. From 2021 to 2024, he joined the Cabinet of the Minister of Solidarity, Social Integration, and Family, where he was responsible for overseeing the digital transition of the social sector. During the same period, he also served as a Digital Transformation Expert for the United Nations Development Programme (UNDP).`,
      talkTitle: 'The State of AI in Morocco: Pathways, Priorities, and Future Perspectives',
      abstract: 'This talk will provide an overview of the current state of AI in Morocco and benchmark it against leading national AI strategies worldwide. By comparing global approaches, it will highlight the key indicators Morocco must prioritize to build a sustainable competitive advantage in AI. The presentation will offer actionable recommendations structured around eight strategic pillars from vision to implementation, covering education, research, data governance, digital infrastructure, ethics and regulation, and priority economic sectors.',
    }
  ];

  return (
    <div className="registration-container">
      <h1 className="registration-title">Invited Speakers</h1>
      <div className="speakers-list">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-item-enhanced">
            <div className="speaker-header-section">
              {speaker.image && (
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="speaker-photo-enhanced"
                />
              )}
              <div className="speaker-info-enhanced">
                <h2 className="speaker-name-enhanced">{speaker.name}</h2>
              </div>
            </div>
            
            {speaker.talkTitle && (
              <div className="talk-section">
                <p className="talk-info">
                  <strong className="talk-label">Talk:</strong> {speaker.talkTitle}
                </p>
                
                {speaker.abstract && (
                  <p className="talk-abstract">
                    <strong className="abstract-label">Abstract:</strong> {renderTextWithBreaks(speaker.abstract)}
                  </p>
                )}
                
                <p className="speaker-bio-text">
                  <strong className="bio-label">Biography:</strong> {renderTextWithBreaks(speaker.bio)}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Program component
const Program: React.FC = () => {
  return (
    <div className="registration-container">
      <h1 className="registration-title">TECHNICAL PROGRAM</h1>
      
      <div className="program-content">
        <h2 className="program-day-title">DAY 1: DECEMBER 04, 2025</h2>
        
        <div className="program-schedule">
          <div className="program-item">
            <div className="program-time">08:00 – 09:00</div>
            <div className="program-event">Registration</div>
          </div>
          
          <div className="program-item">
            <div className="program-time">09:00 - 09:30</div>
            <div className="program-event">Opening ceremony</div>
          </div>
          
          <div className="program-item plenary">
            <div className="program-time">09:30 - 10:15</div>
            <div className="program-event">
              <div className="program-event-title">Plenary Talk I</div>
              <div className="program-details">
                <div><strong>Chair:</strong> Prof. Said Raghay, Faculty of Sciences and Techniques, Marrakesh, Morocco</div>
                <div><strong>Speaker:</strong> Prof. Adel M. Alimi, Former Director of ENIS, University of Sfax, Tunisia</div>
                <div><strong>Title:</strong> Deep Learning for Parkinson's Disease Detection from Handwriting</div>
              </div>
            </div>
          </div>
          
          <div className="program-item plenary">
            <div className="program-time">10:15 - 11:00</div>
            <div className="program-event">
              <div className="program-event-title">Plenary Talk II</div>
              <div className="program-details">
                <div><strong>Chair:</strong> Prof. Salah El Hadaj, ENCG, Marrakesh, Morocco</div>
                <div><strong>Speaker:</strong> Prof. Mohamed Khalil, Faculty of Sciences and Techniques, Mohammedia, Morocco</div>
                <div><strong>Title:</strong> The State of AI in Morocco: Pathways, Priorities, and Future Perspectives</div>
              </div>
            </div>
          </div>
          
          <div className="program-item">
            <div className="program-time">11:00 - 11:25</div>
            <div className="program-event">Coffee Break</div>
          </div>
          
          <div className="program-sessions">
            <div className="program-time-range">11:30 - 12:45</div>
            
            <div className="session-group">
              <div className="session-item">
                <div className="session-room">Room A: 11:30 - 12:45</div>
                <div className="session-title">Session I: AI for Healthcare</div>
                <div className="session-chairs">Chairs: Prof. Driss Bouzidi and Prof. Mostapha Bellafqih</div>
                <table className="session-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Corresponding Author & Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>27</td>
                      <td>Othmane ELAZRI – Strong together: Multi-Representation Acoustic Feature Integration for Alzheimer's Disease Detection from Speech</td>
                    </tr>
                    <tr>
                      <td>41</td>
                      <td>Yassine Sembati – AI-Driven Healthcare Networks Integrating SDN, NDN</td>
                    </tr>
                    <tr>
                      <td>109</td>
                      <td>Supraja Chinthala – The Product Manager's Compass : Navigating Responsible Generative AI in Consumer Health and Telecom Services</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Salma Ezaccani – Artificial Intelligence in Obstetric Outcome Prediction: A Comprehensive Review</td>
                    </tr>
                    <tr>
                      <td>33</td>
                      <td>Abderrazzak BENMOUJANE – Integrating Fuzzy Logic with AI in Healthcare: A Comprehensive Review of Applications in Physical and Neurological Health.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="session-item">
                <div className="session-room">Room B: 11:30 - 12:45</div>
                <div className="session-title">Session II: Healthcare & Smart Diagnostics</div>
                <div className="session-chairs">Chairs: Prof. Rachid Latif and Prof. Hicham Bahi</div>
                <table className="session-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Corresponding Author & Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>74</td>
                      <td>Omar BAMAAROUF – EEG-Based Epilepsy Detection Using DWT-PCA and Machine Learning</td>
                    </tr>
                    <tr>
                      <td>78</td>
                      <td>Toya Acharya – Deep Learning and Segmentation Techniques for Non-Invasive Heat Stress Characterization in Dairy Cattle</td>
                    </tr>
                    <tr>
                      <td>80</td>
                      <td>Siham ELBAZ– Feature Extraction Effects on the Classification of sEMG Signals Using a BPNN Classifier</td>
                    </tr>
                    <tr>
                      <td>144</td>
                      <td>Hajar ZEROUANI – Diabetes and Digital Therapy: A Literature Review</td>
                    </tr>
                    <tr>
                      <td>107</td>
                      <td>Toya Acharya - Smart Dairy: Agentic AI-based System for Everyday Dairy Operation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="session-item">
                <div className="session-room">Room C: 11:30 - 12:45</div>
                <div className="session-title">Session III: Big Data & Analytics</div>
                <div className="session-chairs">Chairs: Prof. Mohamed Hanini and Prof. Iman El Mir</div>
                <table className="session-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Corresponding Author & Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>30</td>
                      <td>Ghada Asim – Evaluating the Relationship Between Online Gaming and Mental Health Using Data Mining Techniques</td>
                    </tr>
                    <tr>
                      <td>32</td>
                      <td>Hafsa ELKOUMIKHI – A Survey on Personal Health Knowledge Graphs : Construction, Applications, and Challenges</td>
                    </tr>
                    <tr>
                      <td>57</td>
                      <td>Mehdi AIt SAID – Uncovering Hidden Debts in FinOps Adoption Lessons from Industry Practice</td>
                    </tr>
                    <tr>
                      <td>129</td>
                      <td>Mohcine Baalla– Introducing and analyzing the Fake Relationship Attack in Social IoT</td>
                    </tr>
                    <tr>
                      <td>137</td>
                      <td>Achraf BENMOUMEN – Revealing Bots in Crypto-Focused Social Media Communities via a Data-Driven Framework</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="program-item">
            <div className="program-time">13:00 - 14:00</div>
            <div className="program-event">Lunch</div>
          </div>
          
          <div className="program-item plenary">
            <div className="program-time">14:05 - 14:50</div>
            <div className="program-event">
              <div className="program-event-title">Plenary Talk III</div>
              <div className="program-details">
                <div><strong>Chair:</strong> Prof. Adel M. Alimi, Former Director, University of Sfax, Tunisia</div>
                <div><strong>Speaker:</strong> Prof. Ajith Abraham, Vice Chancellor, Sai University, Founding Dean, School of Artificial Intelligence, Chennai, India</div>
                <div><strong>Title:</strong> Generative AI in Healthcare: Innovations and Challenges</div>
              </div>
            </div>
          </div>
          
          <div className="program-item plenary">
            <div className="program-time">14:55 - 15:40</div>
            <div className="program-event">
              <div className="program-event-title">Plenary Talk IV</div>
              <div className="program-details">
                <div><strong>Chair:</strong> Prof. Noura Aknin, Director of the CED-STSM - UAE, Tetouan, Morocco</div>
                <div><strong>Speaker:</strong> Prof. Mohammed Essaaidi, Former Director of ENSIAS, University Mohammed V, Rabat, Morocco</div>
                <div><strong>Title:</strong> Toward a Holistic Approach to Smart and Sustainable Mobility</div>
              </div>
            </div>
          </div>
          
          <div className="program-item">
            <div className="program-time">15:45 - 16:10</div>
            <div className="program-event">Coffee Break</div>
          </div>
          
          <div className="program-sessions">
            <div className="program-time-range">16:15 - 17:30</div>
            
            <div className="session-group">
              <div className="session-item">
                <div className="session-room">Room A: 16:15 - 17:30</div>
                <div className="session-title">Session IV: Predictive Modeling, Forecasting & Human-Centric Systems</div>
                <div className="session-chairs">Chairs: Prof. Said El Kafhali and Prof. Abdellah Zaaloul</div>
                <table className="session-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Corresponding Author & Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>24</td>
                      <td>Mohamed El Yahyaoui – Climate Change Forecasting: A Review of Machine Learning and Generative AI Models</td>
                    </tr>
                    <tr>
                      <td>58</td>
                      <td>Younes Oulad Sayad – Predicting Fish Catches Along Moroccan Coasts Using Ocean Remote Sensing Data and Machine Learning</td>
                    </tr>
                    <tr>
                      <td>92</td>
                      <td>SALMA OUMOUSSA – Towards Early Crop Classification using Deep Learning</td>
                    </tr>
                    <tr>
                      <td>104</td>
                      <td>IMANE ABDELFADEL – Artificial Intelligence and Inclusive Recruitment : Reducing Bias and Promoting Female Leadership in Morocco and Sub-Saharan Africa</td>
                    </tr>
                    <tr>
                      <td>136</td>
                      <td>Mohammed Laouadi – Markov Chain for Behavior Prediction in Road Safety</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="session-item">
                <div className="session-room">Room B: 16:15 - 17:30</div>
                <div className="session-title">Session V: Recommender Systems & Data Imputation</div>
                <div className="session-chairs">Chairs: Prof. Bouchaib Nassereddine and Prof. Rachid Latif</div>
                <table className="session-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Corresponding Author & Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>105</td>
                      <td>Fatima Ezzahra Senhaji – Missing Value Imputation Methods for Time Series Data: A comprehensive review</td>
                    </tr>
                    <tr>
                      <td>126</td>
                      <td>WAFAE BENSALIM – Smart Water Resilience System for the Oum Er Rbia Basin : GeoAI and GIS Integration with Comparative Deep Learning Forecasts</td>
                    </tr>
                    <tr>
                      <td>127</td>
                      <td>Brahim Ait Ben Ali - A new comprehensive review of recommendation systems for people with autism</td>
                    </tr>
                    <tr>
                      <td>130</td>
                      <td>Ahmeddou IDARROU– Novel approach for Honest Experts Identification on Mastodon via an improved practical Byzantine Fault Tolerance</td>
                    </tr>
                    <tr>
                      <td>140</td>
                      <td>Fatima Zohra LHAFRA – A Design Framework for Diagnosis and Treatment of Dyscalculia using Machine Learning and Recommender Systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="session-item">
                <div className="session-room">Room C: 16:15 – 17:15</div>
                <div className="session-title">Session VI: AI for Computer Vision & Image-Based Applications</div>
                <div className="session-chairs">Chairs: Prof. Adnane Founoun and Prof. Kamal Bouhassoune</div>
                <table className="session-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Corresponding Author & Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>11</td>
                      <td>Amine Aaz El Aarab – SwinEffiNet: A hybrid CNN-Transformer based approach for gastrointestinal anatomical landmarks localization in WCE images</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>Said El Kafhali – Tabular-to-Image Conversion and CNN Feature Extraction for Predicting Academic Success in Higher Education</td>
                    </tr>
                    <tr>
                      <td>68</td>
                      <td>Samiya QANOUNE – Breast Cancer Classification : A Transfer Learning Approach Using EfficientNets</td>
                    </tr>
                    <tr>
                      <td>134</td>
                      <td>Hesham Arafat Ali – Development of an AI-Based Virtual Fitness Trainer using Computer Vision and Natural Language Processing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* DAY 2 */}
        <h2 className="program-day-title">DAY 2: DECEMBER 05, 2025</h2>
        
        <div className="program-schedule">
          <div className="program-item">
            <div className="program-time">08:30 – 09:00</div>
            <div className="program-event">Registration</div>
          </div>
          
          <div className="program-sessions">
            <div className="program-time-range">09:00 - 10:30</div>
            
            <div className="session-group">
              <div className="session-item">
                <div className="session-room">Room A: 09:00 - 10:30</div>
                <div className="session-title">Session VII: AI for Security & Trustworthy Systems</div>
                <div className="session-chairs">Chairs: Prof. Yassine Maleh and Prof. Abdellah Jamali</div>
                <table className="session-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Corresponding Author & Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>99</td>
                      <td>Hamza JAMIRI – Securing IoT Traffic Using Adversarial Learning: From Simulation on IoT-23 To Real-Time One-M2M Integration</td>
                    </tr>
                    <tr>
                      <td>101</td>
                      <td>Kamal Bouhassoune – Towards Secure and Auditable Agentic AI Using Blockchain : A Review and Taxonomy</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Khaoula El habyb – Anomaly Detection for HVAC Systems in Smart Buildings : A Machine Learning Approach</td>
                    </tr>
                    <tr>
                      <td>31</td>
                      <td>Rachid Tahri – Optimizing Intrusion Detection Using Machine Learning and Deep Learning Algorithms</td>
                    </tr>
                    <tr>
                      <td>71</td>
                      <td>Younes Ben Ammou – From Malware to Intelligence : Attributing APT Malware to Nation-state Actors</td>
                    </tr>
                    <tr>
                      <td>95</td>
                      <td>Abdellah RESSAL – A Multi-Layered Approach to GPS Spoofing Detection and Mitigation in Unmanned Aerial Vehicles</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="session-item">
                <div className="session-room">Room B: 09:00 - 10:30</div>
                <div className="session-title">Session VIII: AI for Optimization & Resource Management</div>
                <div className="session-chairs">Chairs: Prof. Abdelghani Ben Tahar and Prof. Abderrahim Marzouk</div>
                <table className="session-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Corresponding Author & Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>26</td>
                      <td>El Mehdi CHTOUKI – Risk-Aware Resource Allocation in Vehicular Fog-Cloud Systems for Emergency Healthcare: An SMDP Approach with Clinical Prioritization</td>
                    </tr>
                    <tr>
                      <td>36</td>
                      <td>ABDELGHANI EZZAH I– A SWOT-Guided Hybrid Optimization Framework for Reducing EV Charging Time</td>
                    </tr>
                    <tr>
                      <td>103</td>
                      <td>KHALDI Mouataz IDRISSI – Supervised Classification for Intelligent Decision-Making Systems: Critical Review, Applications, and Challenges</td>
                    </tr>
                    <tr>
                      <td>139</td>
                      <td>Salma Tika – Energy-Efficient Power Allocation for 6G Massive Communications : A Mean-Field Game Analysis</td>
                    </tr>
                    <tr>
                      <td>35</td>
                      <td>HICHAM EL BOUSTY – Scalable Identification of Influential Nodes: XGBoost-Based Closeness Centrality Approximation</td>
                    </tr>
                    <tr>
                      <td>50</td>
                      <td>OMAR LAMMAMRI – Comparison of LSTM and CNN Models for SOC Estimation in Lithium Polymer Batteries</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="session-item">
                <div className="session-room">Room C: 09:00 - 10:30</div>
                <div className="session-title">Session IX: Advanced AI Models & Emerging Applications</div>
                <div className="session-chairs">Chairs: Prof. Ahmed Boujnoui and Prof. Adnane El Hanjri</div>
                <table className="session-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Corresponding Author & Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>52</td>
                      <td>Zakaria ELBAYED – AI Methods for the Heston–American Free-Boundary PDE : A Comparative Study and ID/OOD Robustness Evaluation</td>
                    </tr>
                    <tr>
                      <td>94</td>
                      <td>Moulay Saddik AIT CHARIF – Toward Benchmarking LLM-Based Multi-Agent Systems in Educational Contexts</td>
                    </tr>
                    <tr>
                      <td>158</td>
                      <td>Fatima LAASSIRI – Enhancing 5G NG RAN Handover with an SDN Controller</td>
                    </tr>
                    <tr>
                      <td>72</td>
                      <td>Wafae Azoulay – Curvature and Jerk-Constrained Trajectories for Safe and Smooth Approaches</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Basma EL MOURTJI – Multi-Agent Q-Learning with Tensorized Q-Function for Adaptive Genetic Algorithms in High-Dimensional Classification</td>
                    </tr>
                    <tr>
                      <td>97</td>
                      <td>Zakaria Naji – The Impact of Context Variation on Mobile Continuous Authentication Using Swipe and Motion Biometrics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="program-item">
            <div className="program-time">10:30 - 10:55</div>
            <div className="program-event">Coffee Break</div>
          </div>
          
          <div className="program-sessions">
            <div className="program-time-range">11:00 - 12:15</div>
            
            <div className="session-group">
              <div className="session-item">
                <div className="session-room">Room A: 11:00 - 12:15</div>
                <div className="session-title">Session X: Sentiment Analysis & Text Mining</div>
                <div className="session-chairs">Chairs: Prof. Mostafa Bellafkih and Prof. Basma Boukenz</div>
                <table className="session-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Corresponding Author & Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>7</td>
                      <td>Brahim Zraibi – A Comparative Study of GRU-Based Architectures for State-of-Health and Remaining Useful Life Estimation in Lithium-Ion Batteries</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Khadija Arradi – Sentiment Analysis of Patient-Generated Social Media Data on Chronic Diseases: A Systematic Exploration of Applications</td>
                    </tr>
                    <tr>
                      <td>75</td>
                      <td>Kamal WALJI – A Systematic Evaluation of Preprocessing, Feature Selection and Machine Learning Models for Sentiment Analysis</td>
                    </tr>
                    <tr>
                      <td>56</td>
                      <td>Hind Chelh – Data Analysis and Collection Methods for Fake News Detection</td>
                    </tr>
                    <tr>
                      <td>106</td>
                      <td>MAHMOUD BOUZID – Audio Deepfake Literature Review & Detection Limitations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="session-item">
                <div className="session-room">Room B: 11:00 - 12:15</div>
                <div className="session-title">Session XI: Workflow Optimization & Smart Systems</div>
                <div className="session-chairs">Chairs: Prof. Iyad Lahsen-Cherif and Prof. Hatam Ettazi</div>
                <table className="session-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Corresponding Author & Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>76</td>
                      <td>Soukaina MIHI – Real-Time Adaptive Multi-Objective Scheduling Model for Cloud Workflows Using LinUCB</td>
                    </tr>
                    <tr>
                      <td>85</td>
                      <td>Hajar KHALLOUKI – Multi-Objective Workflow Scheduling in Cloud Environments: A HEFT-Seeded NSGA-II Model</td>
                    </tr>
                    <tr>
                      <td>81</td>
                      <td>Ahmed Boujnoui – Selfishness Mitigation in ALOHA-based Random Access Mechanism</td>
                    </tr>
                    <tr>
                      <td>84</td>
                      <td>Lahcen Belouaddane – Reducing Security Testing Overhead in DevSecOps Through Risk-Aware Scan Orchestration</td>
                    </tr>
                    <tr>
                      <td>138</td>
                      <td>Mohammed Flissat – A Lightweight SIEM Based Framework for Security Monitoring in Smart Farming Wireless Sensor Networks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="program-item">
            <div className="program-time">14:15 - 15:15</div>
            <div className="program-event">Lunch</div>
          </div>
        </div>

        {/* DAY 3 */}
        <h2 className="program-day-title">DAY 3: DECEMBER 06, 2025</h2>
        
        <div className="program-schedule">
          <div className="program-sessions">
            <div className="program-time-range">10:00 AM – 12:30 PM Time in Morocco (GMT+1) - Virtual Presentations</div>
            
            <div className="session-group">
              <div className="session-item">
                <div className="session-title">Session I</div>
                <div className="session-chairs">Chairs: Prof. Mohamed Adel Alimi and Prof. Kamal Bouhassoune</div>
                <div className="session-link">Link: <a href="https://meet.google.com/gue-cmvo-uuj" target="_blank" rel="noopener noreferrer">meet.google.com/gue-cmvo-uuj</a></div>
                <table className="session-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Corresponding Author & Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>8</td>
                      <td>HAMZA JAKHA – Enhancing Arabic sentiment analysis with contextual embeddings and class imbalance handling using recurrent neural networks</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>Oumaima Ghandour – Hybrid Game-Theoretic and Machine Learning Framework for Fair and Efficient Resource Allocation in Cloud Computing</td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>Solomon Chiekezi NWANERI – Explainable Machine Learning Models for Diabetes Mellitus Prediction: A Comparison of SMOTE-Enhanced Neural Networks and a Genetic Algorithm Optimized XGBoost Models</td>
                    </tr>
                    <tr>
                      <td>27</td>
                      <td>Othmane ELAZRI – Strong together: Multi-Representation Acoustic Feature Integration for Alzheimer's Disease Detection from Speech</td>
                    </tr>
                    <tr>
                      <td>34</td>
                      <td>Moussa Kalli Salissou – Smart Material Selection for Electric Vehicle Chassis Using Artificial Intelligence : to lighter, more robust chassis</td>
                    </tr>
                    <tr>
                      <td>51</td>
                      <td>Asma BOULKAID – Optimal Base Station Placement for UAV Relative Localization: A Greedy-Fuzzy Logic Approach</td>
                    </tr>
                    <tr>
                      <td>60</td>
                      <td>Bahy Youssef Elgendy Labib Elgendy – Prediction of Structural Deformation Using Adaptive Neuro-Fuzzy Inference Systems and Simulation-Based Soft Computing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="session-item">
                <div className="session-title">Session II</div>
                <div className="session-chairs">Chairs: Prof. Ahmed Boujnoui and Prof. Soukaina Mihi</div>
                <div className="session-link">Link: <a href="https://meet.google.com/nvg-cvvw-qne" target="_blank" rel="noopener noreferrer">meet.google.com/nvg-cvvw-qne</a></div>
                <table className="session-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Corresponding Author & Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>66</td>
                      <td>Samaa Ahmed Mostafa Ibrahem – A Systematic Literature Review of Fetal Health Prediction Models: Development, Challenges, and Future Directions</td>
                    </tr>
                    <tr>
                      <td>109</td>
                      <td>Supraja Chinthala – The Product Manager's Compass : Navigating Responsible Generative AI in Consumer Health and Telecom Services</td>
                    </tr>
                    <tr>
                      <td>114</td>
                      <td>Abderrahmane Smaali – Embedded Edge Pipeline for Small-Object Recognition in Industrial Digit Inspection Using YOLO and Lightweight CNNs</td>
                    </tr>
                    <tr>
                      <td>116</td>
                      <td>Ahmed Tealeb – Healtha: Healthcare Recommendation System and Lab Analysis Application</td>
                    </tr>
                    <tr>
                      <td>122</td>
                      <td>Ezzahra BARAICH – Automatic Modulation Classification : A Hybrid Deep Learning Based Approach</td>
                    </tr>
                    <tr>
                      <td>159</td>
                      <td>Abdoulhaidou Moussa Moussa – Medical Mini-Centrifuges : Innovations, Limitations, and Prospects for Use in Morocco</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="session-item">
                <div className="session-title">Session III</div>
                <div className="session-chairs">Chair: Prof. Ghizlane Ourhanou</div>
                <div className="session-link">Link: <a href="https://meet.google.com/euw-gpeb-bvv" target="_blank" rel="noopener noreferrer">meet.google.com/euw-gpeb-bvv</a></div>
                <table className="session-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Corresponding Author & Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5</td>
                      <td>Houda Amazal – Clustering Learner Trajectories to Identify Cognitive Fatigue: A Big Data Analysis of EdNet</td>
                    </tr>
                    <tr>
                      <td>31</td>
                      <td>Abdellah Ouammou – Optimizing Intrusion Detection Using Machine Learning and Deep Learning Algorithms</td>
                    </tr>
                    <tr>
                      <td>62</td>
                      <td>Zahy Y. Elgendy – Vision-Guided Control of a Low-Cost Tendon-Driven Continuum Arm: Object Tracking and Path Following</td>
                    </tr>
                    <tr>
                      <td>85</td>
                      <td>Hajar KHALLOUKI – Multi-Objective Workflow Scheduling in Cloud Environments: A HEFT-Seeded NSGA-II Model</td>
                    </tr>
                    <tr>
                      <td>98</td>
                      <td>Farah Oubelkas – Enhancing Road Safety with VideoMAE: A Self-Supervised Transformer Approach for Traffic Risk Detection</td>
                    </tr>
                    <tr>
                      <td>88</td>
                      <td>Wajdi Elhamzi – A Hybrid AI Model for Enhanced Malware Detection and Classification</td>
                    </tr>
                    <tr>
                      <td>108</td>
                      <td>Kaoutar ERRAKHA – XAI-Enhanced Recommender Systems: A Machine Learning-Based Predictive System for Early Dropout Detection in Learning Management Systems with Recommendation Support</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sponsors component
const Sponsors: React.FC = () => {
  const sponsorLogos = [
    univh1Logo,
    fstsLogo,
    logo1,
    logo2,
    southdakotaLogo,
    uclmLogo,
    teluqLogo,
    aviLogo,
    varLogo,
    academiehassane2,
    cnrstLogo,
    greenticLogo,
    logo3,
    logo4,
    mobitic,
  ];

  return (
    <div className="registration-container">
      <h1 className="registration-title">Partners</h1>
      <div className="sponsors-grid">
        {sponsorLogos.map((sponsor, index) => (
          <div key={index} className="sponsor-item">
            <img src={sponsor} alt={`Sponsor logo ${index + 1}`} className="sponsor-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

// Placeholder Photos component
const Photos: React.FC = () => {
  const bannerImages = [
    DSC_0,
    DSC_00,
    DSC_1,
    DSC_2,
    DSC_3,
    DSC_0003,
    DSC_4,
    DSC_5,
    DSC_6,
    DSC_7,
    DSC_8,
    DSC_10,
    DSC_11,
    DSC_12,
    DSC_0012,
    DSC_13,
    DSC_14,
    DSC_15,
    DSC_16,
    DSC_17,
    DSC_0023,
    DSC_0026,
    DSC_0037,
    DSC_0040,
    DSC_0042,
    DSC_0049,
    DSC_0066,
    DSC_0068,
    DSC_0078,
    DSC_0082,
    DSC_0083,
    DSC_0088,
    DSC_0089,
    DSC_0099,
    DSC_0104,
    DSC_0112,
    DSC_0113,
    DSC_0116,
    DSC_0119,
    DSC_0121,
    DSC_0125,
    DSC_0130,
    DSC_0135,
    DSC_0140,
    DSC_0143,
    DSC_0144,
    DSC_0145,
    DSC_0146,
    DSC_0148,
    DSC_0149,
    DSC_0153,
    DSC_0154,
    DSC_0155,
    DSC_0158,
    DSC_0160,
    DSC_0162,
    DSC_0164,
    DSC_0166,
    DSC_0185,
    DSC_0188,
    DSC_0192,
    DSC_0196,
    DSC_0199,
    DSC_0202,
    DSC_0206,
    DSC_0207,
    DSC_0209,
    DSC_0214,
    DSC_0217,
    DSC_0220,
    DSC_0223,
    DSC_0234,
    DSC_0235,
    DSC_4075,
    DSC_4158,
    DSC_4173,
    DSC_4181,
    DSC_4189,
    DSC_4220,
    DSC_4226,
    DSC_4234,
    DSC_4247,
    DSC_4258,
    DSC_4265,
    DSC_4266,
    DSC_4282,
    DSC_4283,
    DSC_4301,
    DSC_4329,
    DSC_4333,
    DSC_4374,
    DSC_4395,
    DSC_4408,
    DSC_4465,
    DSC_4486,
    DSC_4488,
    DSC_4501,
    DSC_4506,
    DSC_4513,
    DSC_4523,
    DSC_4529,
    DSC_4530,
    DSC_4540,
    DSC_4582,
    DSC_4584,
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([]);
  const loadedImagesRef = React.useRef<boolean[]>([]);

  // Preload first 12 images (visible on initial load)
  useEffect(() => {
    const preloadCount = Math.min(12, bannerImages.length);
    const preloadImages = bannerImages.slice(0, preloadCount);
    
    // Initialize arrays
    const initialLoaded = new Array(bannerImages.length).fill(false);
    const initialVisible = new Array(bannerImages.length).fill(false);
    loadedImagesRef.current = initialLoaded;
    
    preloadImages.forEach((imageSrc, index) => {
      initialVisible[index] = true;
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => {
          const updated = [...prev];
          updated[index] = true;
          loadedImagesRef.current = updated;
          return updated;
        });
      };
      img.src = imageSrc;
    });
    
    setVisibleImages(initialVisible);
    setLoadedImages(initialLoaded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px', // Start loading 50px before image enters viewport
      threshold: 0.01,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleImages(prev => {
            if (prev[index]) return prev; // Already visible
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
          
          // Load image if not already loaded
          if (!loadedImagesRef.current[index]) {
            const img = new Image();
            img.onload = () => {
              setLoadedImages(prev => {
                const updated = [...prev];
                updated[index] = true;
                loadedImagesRef.current = updated;
                return updated;
              });
            };
            img.src = bannerImages[index];
          }
        }
      });
    }, observerOptions);

    const imageElements = document.querySelectorAll('[data-index]');
    imageElements.forEach((el) => observer.observe(el));

    return () => {
      imageElements.forEach((el) => observer.unobserve(el));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bannerImages.length]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="photos-container">
      <h1 className="photos-title">AISDS' 25 Conference Photo Gallery</h1>
      <div className="photo-grid">
        {bannerImages.map((image, index) => {
          const isLoaded = loadedImages[index] || false;
          const shouldLoad = visibleImages[index] || false;
          
          return (
            <div
              key={index}
              className={`photo-item ${index % 5 === 0 ? 'vertical-span-2' : ''}`}
              onClick={() => handleImageClick(index)}
              data-index={index}
            >
              {shouldLoad ? (
                <>
                  {!isLoaded && (
                    <div className="image-placeholder">
                      <div className="loading-spinner"></div>
                    </div>
                  )}
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className={`gallery-image ${isLoaded ? 'loaded' : 'loading'}`}
                    loading={index < 12 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index < 6 ? "high" : "auto"}
                  />
                </>
              ) : (
                <div className="image-placeholder">
                  <div className="loading-spinner"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedImageIndex !== null && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={bannerImages[selectedImageIndex]} 
              alt="Enlarged view" 
              className="modal-image"
              loading="eager"
            />
            <button className="modal-close" onClick={handleCloseModal}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Photos AICV'23 component
const PhotosAICV: React.FC = () => {
  const bannerImages = [
    AICV_DSC_4764,
    AICV_DSC_4773,
    AICV_DSC_4784,
    AICV_DSC_4785,
    AICV_DSC_4790,
    AICV_DSC_4792,
    AICV_DSC_4802,
    AICV_DSC_4811,
    AICV_DSC_4814,
    AICV_DSC_4816,
    AICV_DSC_4817,
    AICV_DSC_4823,
    AICV_DSC_4830,
    AICV_DSC_4847,
    AICV_DSC_4848,
    AICV_DSC_4853,
    AICV_DSC_4855,
    AICV_DSC_4858,
    AICV_DSC_4862,
    AICV_DSC_4880,
    AICV_DSC_4895,
    AICV_DSC_4900,
    AICV_DSC_4925,
    AICV_DSC_4926,
    AICV_DSC_4927,
    AICV_DSC_4930,
    AICV_DSC_4944,
    AICV_DSC_4947,
    AICV_DSC_4949,
    AICV_DSC_4965,
    AICV_DSC_4976,
    AICV_DSC_4977,
    AICV_DSC_4984,
    AICV_DSC_4987,
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([]);
  const loadedImagesRef = React.useRef<boolean[]>([]);

  // Preload first 12 images (visible on initial load)
  useEffect(() => {
    const preloadCount = Math.min(12, bannerImages.length);
    const preloadImages = bannerImages.slice(0, preloadCount);
    
    // Initialize arrays
    const initialLoaded = new Array(bannerImages.length).fill(false);
    const initialVisible = new Array(bannerImages.length).fill(false);
    loadedImagesRef.current = initialLoaded;
    
    preloadImages.forEach((imageSrc, index) => {
      initialVisible[index] = true;
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => {
          const updated = [...prev];
          updated[index] = true;
          loadedImagesRef.current = updated;
          return updated;
        });
      };
      img.src = imageSrc;
    });
    
    setVisibleImages(initialVisible);
    setLoadedImages(initialLoaded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px', // Start loading 50px before image enters viewport
      threshold: 0.01,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleImages(prev => {
            if (prev[index]) return prev; // Already visible
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
          
          // Load image if not already loaded
          if (!loadedImagesRef.current[index]) {
            const img = new Image();
            img.onload = () => {
              setLoadedImages(prev => {
                const updated = [...prev];
                updated[index] = true;
                loadedImagesRef.current = updated;
                return updated;
              });
            };
            img.src = bannerImages[index];
          }
        }
      });
    }, observerOptions);

    const imageElements = document.querySelectorAll('[data-index]');
    imageElements.forEach((el) => observer.observe(el));

    return () => {
      imageElements.forEach((el) => observer.unobserve(el));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bannerImages.length]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="photos-container">
      <h1 className="photos-title">AICV' 23 Conference Photo Gallery</h1>
      <div className="photo-grid">
        {bannerImages.map((image, index) => {
          const isLoaded = loadedImages[index] || false;
          const shouldLoad = visibleImages[index] || false;
          
          return (
            <div
              key={index}
              className={`photo-item ${index % 5 === 0 ? 'vertical-span-2' : ''}`}
              onClick={() => handleImageClick(index)}
              data-index={index}
            >
              {shouldLoad ? (
                <>
                  {!isLoaded && (
                    <div className="image-placeholder">
                      <div className="loading-spinner"></div>
                    </div>
                  )}
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className={`gallery-image ${isLoaded ? 'loaded' : 'loading'}`}
                    loading={index < 12 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index < 6 ? "high" : "auto"}
                  />
                </>
              ) : (
                <div className="image-placeholder">
                  <div className="loading-spinner"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedImageIndex !== null && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={bannerImages[selectedImageIndex]} 
              alt="Enlarged view" 
              className="modal-image"
              loading="eager"
            />
            <button className="modal-close" onClick={handleCloseModal}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
};

// ScrollToTop component
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Retour en haut"
    >
      <IconWrapper icon={FaArrowUp} />
    </button>
  );
};

// Footer component
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contacts</h3>
          <h4>Prof. Abdelkrim Haqiq</h4>
          <p>Email: abdelkrim.haqiq@uhp.ac.ma</p>
          <h4>Prof. Aboul Ella Hassanien</h4>
          <p>Email: aboitcairo@cu.edu.eg</p>
        </div>
      </div>
      <div className="footer-bottom">
      <p className="footer-developer">
          Developed by: <a href="mailto:iliass.haqiq@gmail.com" className="developer-link">Iliass HAQIQ</a>
        </p>
        <p>&copy; AISDS' 2025. All Rights Reserved.</p>
        
      </div>
    </footer>
  );
};

// Add visitor tracking hook
const useVisitorTracking = () => {
  useEffect(() => {
    // Track page visits using localStorage
    const visits = parseInt(localStorage.getItem('visitorCount') || '0');
    const newVisits = visits + 1;
    localStorage.setItem('visitorCount', newVisits.toString());
    
    // Track unique visitors
    if (!sessionStorage.getItem('hasVisited')) {
      sessionStorage.setItem('hasVisited', 'true');
      const uniqueVisits = parseInt(localStorage.getItem('uniqueVisitors') || '0');
      localStorage.setItem('uniqueVisitors', (uniqueVisits + 1).toString());
    }
    
    // Track last visit date
    localStorage.setItem('lastVisit', new Date().toISOString());
  }, []);
};

// Main App component
const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add visitor tracking
  useVisitorTracking();

  return (
    <Router>
      <div className="app-container">
        {/* Remove VisitorStats component - tracking still happens via useVisitorTracking hook */}
        <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
          <Link to="/" className="navbar-logo">
            <img src={AISDSLogo2 } alt="AICV" className="logo-image" />
          </Link>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <IconWrapper icon={isMenuOpen ? FaTimes : FaBars} />
          </button>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <MenuLink to="/" icon={<IconWrapper icon={FaHome} />} onCloseMenu={() => setIsMenuOpen(false)}>Home</MenuLink>
            <MenuLink to="/call-for-papers" icon={<IconWrapper icon={FaFileAlt} />} onCloseMenu={() => setIsMenuOpen(false)}>Call For Papers</MenuLink>
            <MenuLink to="/paper-submission" icon={<IconWrapper icon={FaUpload} />} onCloseMenu={() => setIsMenuOpen(false)}>Submission</MenuLink>
            <MenuLink to="/registration" icon={<IconWrapper icon={FaUserPlus} />} onCloseMenu={() => setIsMenuOpen(false)}>Registration</MenuLink>
            <MenuLink to="/committees" icon={<IconWrapper icon={FaUsers} />} onCloseMenu={() => setIsMenuOpen(false)}>Committees</MenuLink>
            <MenuLink to="/invited-speaker" icon={<IconWrapper icon={FaMicrophone} />} onCloseMenu={() => setIsMenuOpen(false)}>Speakers</MenuLink>
            <MenuLink to="/program" icon={<IconWrapper icon={FaCalendarAlt} />} onCloseMenu={() => setIsMenuOpen(false)}>Program</MenuLink>
            <MenuLink to="/photos" icon={<IconWrapper icon={FaImages} />} onCloseMenu={() => setIsMenuOpen(false)}>Photos AISDS'25</MenuLink>
            <MenuLink to="/photos-aicv" icon={<IconWrapper icon={FaImages} />} onCloseMenu={() => setIsMenuOpen(false)}>Photos AICV'23</MenuLink>
            <MenuLink to="/sponsors" icon={<IconWrapper icon={FaHandshake} />} onCloseMenu={() => setIsMenuOpen(false)}>Partners</MenuLink>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/paper-submission" element={<PaperSubmission />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/invited-speaker" element={<InvitedSpeaker />} />
            <Route path="/program" element={<Program />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/photos-aicv" element={<PhotosAICV />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </div>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
