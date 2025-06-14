import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { FaHome, FaFileAlt, FaUpload, FaUserPlus, FaMicrophone, FaHandshake,FaBars, FaTimes, FaUsers } from 'react-icons/fa';
import './App.css';
import greenticLogo from './images/greentic.png';
import fegLogo from './images/feg.jpg';
import varLogo from './images/var.jpg';
import aviLogo from './images/avi.png';
import teluqLogo from './images/teluq.png';
import uclmLogo from './images/uclm.png';
import ensa from './images/ensa.png';
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
import santosh from './People/santaosh.jpg';
import bazboza from './People/bazboza.jpg';
import ir2mlabLogo from './logo/ir2mlab.png';
import srgeLogo from './logo/srge.jpg';

import ajithAbraham from './invitedspeakers/ajith abraham.jpg';
import kcSantosh from './invitedspeakers/kc santosh.png';
import adelAlimi from './invitedspeakers/adel alimi.jpg';
import mohammedkinidiri from './People/mohammedkinidiri.jpg';
import mohammedessaidi from './invitedspeakers/mohammed essaidi.png'
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import AICVLogo from './images/AICV.png';
import logoGrandeTaille from './images/logo-grande-taille.png';
import springerLogo from './logo/springer.png';





import previousEditionImage from './AICV/all1.jpg';

import aicv2020Image from './AICV/AICV2020.webp';
import aicv2021Image from './AICV/AICV2021.webp';
import aicv2023Image from './AICV/AICV2023.webp';

import Marrakechimg2 from './banner/Marrakechimg2.jpg';
import marrakechimg4 from './banner/marrakechimg4.jpg';
import marrakechimg5 from './banner/marrakechimg5.jpg';
import marrakechimg3_banner from './banner/marrakechimg3.jpg';

// Import images from AICV23 Conference_ Photo Gallery
import DSC_4773 from './AICV23 Conference_ Photo Gallery/DSC_4773.jpg';
import DSC_4949 from './AICV23 Conference_ Photo Gallery/DSC_4949.jpg';
import DSC_4817 from './AICV23 Conference_ Photo Gallery/DSC_4817.jpg';
import DSC_4987 from './AICV23 Conference_ Photo Gallery/DSC_4987.jpg';
import DSC_4976 from './AICV23 Conference_ Photo Gallery/DSC_4976.jpg';
import DSC_4927 from './AICV23 Conference_ Photo Gallery/DSC_4927.jpg';
import DSC_4785 from './AICV23 Conference_ Photo Gallery/DSC_4785.jpg';
import DSC_4802 from './AICV23 Conference_ Photo Gallery/DSC_4802.jpg';
import DSC_4862 from './AICV23 Conference_ Photo Gallery/DSC_4862.jpg';
import DSC_4853 from './AICV23 Conference_ Photo Gallery/DSC_4853.jpg';
import DSC_4792 from './AICV23 Conference_ Photo Gallery/DSC_4792.jpg';
import DSC_4811 from './AICV23 Conference_ Photo Gallery/DSC_4811.jpg';
import DSC_4784 from './AICV23 Conference_ Photo Gallery/DSC_4784.jpg';
import DSC_4858 from './AICV23 Conference_ Photo Gallery/DSC_4858.jpg';
import DSC_4925 from './AICV23 Conference_ Photo Gallery/DSC_4925.jpg';
import DSC_4764 from './AICV23 Conference_ Photo Gallery/DSC_4764.jpg';
import DSC_4965 from './AICV23 Conference_ Photo Gallery/DSC_4965.jpg';
import DSC_4977 from './AICV23 Conference_ Photo Gallery/DSC_4977.jpg';
import DSC_4823 from './AICV23 Conference_ Photo Gallery/DSC_4823.jpg';
import DSC_4848 from './AICV23 Conference_ Photo Gallery/DSC_4848.jpg';
import DSC_4926 from './AICV23 Conference_ Photo Gallery/DSC_4926.jpg';
import DSC_4814 from './AICV23 Conference_ Photo Gallery/DSC_4814.jpg';
import DSC_4790 from './AICV23 Conference_ Photo Gallery/DSC_4790.jpg';
import DSC_4880 from './AICV23 Conference_ Photo Gallery/DSC_4880.jpg';
import DSC_4984 from './AICV23 Conference_ Photo Gallery/DSC_4984.jpg';
import DSC_4847 from './AICV23 Conference_ Photo Gallery/DSC_4847.jpg';
import DSC_4816 from './AICV23 Conference_ Photo Gallery/DSC_4816.jpg';
import DSC_4944 from './AICV23 Conference_ Photo Gallery/DSC_4944.jpg';
import DSC_4900 from './AICV23 Conference_ Photo Gallery/DSC_4900.jpg';
import DSC_4855 from './AICV23 Conference_ Photo Gallery/DSC_4855.jpg';
import DSC_4930 from './AICV23 Conference_ Photo Gallery/DSC_4930.jpg';
import DSC_4947 from './AICV23 Conference_ Photo Gallery/DSC_4947.jpg';
import DSC_4895 from './AICV23 Conference_ Photo Gallery/DSC_4895.jpg';
import DSC_4830 from './AICV23 Conference_ Photo Gallery/DSC_4830.jpg';

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
const IconWrapper = ({ icon: Icon, className }: { icon: IconType; className?: string }) => {
  const IconComponent = Icon as React.ComponentType<{ className?: string }>;
  return <IconComponent className={className} />;
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
          <h1>Artificial Intelligence and Computer Vision (AICV'2025)</h1>
          <p className="carousel-date">December 04 - 06 2025</p>
          <p className="carousel-location">MARRAKESH MOROCCO</p>
        </div>
      </div>

      {/* Add Springer logo here, before the Organizers section */}
      

      {/* Combined Main Content Section */}
      <section className="home-main-content">
        {/* Conference Overview Section */}
        <div className="conference-overview">
          <h2 className="conference-overview-title">Artificial Intelligence and Computer Vision (AICV'2025)</h2>
          <p className="conference-overview-text">
            We welcome your participation and contribution to the 4 th International Conference on
            Artificial Intelligence and Computer Vision (AICV'2025), which will be held in Marrakech,
            Morocco during December 04 - 06, 2025. AICV'2025 is organized by the Computer,
            Networks, Mobility and Modeling Laboratory (IR2M), Faculty of Sciences and Techniques,
            Hassan 1st University, Settat, Morocco and the Scientific Research Group in Egypt (SRGE),
            Cairo University. Egypt.
          </p>
          <p className="conference-overview-text">
            AICV'2025 is organized to provide an international forum that brings together those
            actively involved in the areas of interest and reports on up-to-the-minute innovations and
            developments to summarize the state-of-the-art and to exchange ideas and advances in all
            aspects of Artificial Intelligence, Computer Vision and Soft Computing Techniques.
          </p>
        </div>

        {/* Add the new logo here */}
        <div className="logo-grande-taille-container">
          <img src={logoGrandeTaille} alt="AICV Conference Logo" className="logo-grande-taille" />
        </div>

        {/* Important Dates Section */}
        <div className="important-dates">
          <h2 className="important-dates-title">Important Dates</h2>
          <ul className="important-dates-list">
            <li><span className="date">August 31, 2025</span><span className="event-text">Paper submission deadline</span></li>
            <li><span className="date">September 30, 2025</span><span className="event-text">Acceptance notification</span></li>
            <li><span className="date">October 15, 2025</span><span className="event-text">Submission camera ready and registration</span></li>
            <li><span className="date">December 04 - 06, 2025</span><span className="event-text">Conference dates</span></li>
          </ul>
        </div>

        {/* Previous Edition Section (Combined) */}
        <div className="previous-edition">
          <h2 className="previous-edition-title">Previous Editions</h2>
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
          <h2 className="previous-editions-image-links-title">Previous Edition Proceedings</h2>
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
        { name: 'KC Santosh', affiliation: 'Department of Computer Science, University of South Dakota, USA', image: santosh },
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
        { name: 'Track 1: Machine and Deep learning', type: 'trackTitle' },
        { name: 'Abdellah Adib', affiliation: 'FST- Mohammedia, Hassan II University, Casablanca, Morocco' },
        { name: 'Said El Kafhali', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Sam Goundar', affiliation: 'RMIT University, School of Computing, Hanoi, Vietnam' },
        { name: 'Track 2: Computational Intelligence', type: 'trackTitle' },
        { name: 'Adam Slowik', affiliation: 'Koszalin University of Technology, Koszalin, Poland' },
        { name: 'Mohamed Nemiche', affiliation: 'Polydisciplinary Faculty of Taza, Sidi Mohamed Ben Abdellah University, Morocco' },
        { name: 'Said Raghay', affiliation: 'Faculty of Sciences and Techniques - Guéliz, Marrakesh, Morocco' },
        { name: 'Track 3: Mining and Data Analysis', type: 'trackTitle' },
        { name: 'Brahim Ouhbi', affiliation: 'National School of Arts and Crafts (ENSAM), Meknès, Morocco' },
        { name: 'Krishnaveni Marimuthu', affiliation: 'Avinashilingam Institute for Home Science and Higher Education for Women, Deemed University, Coimbatore, India' },
        { name: 'Mohamed Hanini', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Track 4: Robotics and Automation', type: 'trackTitle' },
        { name: 'Aurelio Bermúdez Marín', affiliation: 'Albacete Research Institute of Informatics, Castilla-La Mancha University, Abacete, Spain' },
        { name: 'Driss Bouzidi', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
        { name: 'Nizar Rokbani', affiliation: 'High Institute of Applied Sciences and Technology, University of Sousse, Tunisia' },
        { name: 'Track 5: Image Processing and Computer Vision', type: 'trackTitle' },
        { name: 'Driss El Ouadghiri', affiliation: 'Faculty of Sciences, Meknès, Morocco' },
        { name: 'Nabil Laachfoubi', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Rafael Casado González', affiliation: 'Albacete Research Institute of Informatics, Castilla-La Mancha University, Abacete, Spain' },
        { name: 'Track 6: Secure and Trustworthy AI in Computer Vision Systems', type: 'trackTitle' },
        { name: 'Ashraf Matrawy', affiliation: 'School of Information Technology, Carleton University, Ottawa, Canada' },
        { name: 'Ghizlane Orhanou', affiliation: 'Faculty of Sciences, Rabat, Morocco' },
        { name: 'Yassine Maleh', affiliation: 'National School of Applied Sciences, Khouribga, Morocco' },
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
        { name: 'Soukaina Mihi', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Wafae Azoulay', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Youssef Hilali', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
        { name: 'Zakaria Soufiane Hafdi', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
      ]
    },
  ];

  const tpcMembers = [
    { name: 'Abdelouahed Tajer', affiliation: 'ENSA, Cadi Ayyad University, Marrakesh, Morocco' },
    { name: 'Abdellah Adib', affiliation: 'FST - Mohammedia, Hassan II University, Casablanca, Morocco' },
    { name: 'Abdelghani Bentahar', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Abdelhay Haqiq', affiliation: 'School of Information Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'Abdellah Ezzati', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Abdellah Jamali', affiliation: 'ENSA - Berrechid, Hassan 1st University, Settat, Morocco' },
    { name: 'Abdellah Najid', affiliation: 'INPT, Rabat, Morocco' },
    { name: 'Abdellah Ouammou', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Abdellah Zaaloul', affiliation: 'Faculty of Economics and Management, Settat, Morocco' },
    { name: 'Abdellatif Kobbane', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
    { name: 'Abdelmajid Badri', affiliation: 'ENSAM, Hassan II University, Casablanca, Morocco' },
    { name: 'Abdelmajid Hajami', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Abderrahim Marzouk', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Abderrahim Sekkaki', affiliation: 'Facutly of Sciences Aïn Chock, Hassan II University, Casablanca, Morocco' },
    { name: 'Abdessamad Bellouch', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Abdul Nasser Nour', affiliation: 'An-Najah National University, Palestine' },
    { name: 'Adam Slowik', affiliation: 'Koszalin University of Technology, Koszalin, Poland' },
    { name: 'Adnane El Hanjri', affiliation: 'EMSI, Tangier, Morocco' },
    { name: 'Adnane Founoun', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Adnane Latif', affiliation: 'ENSA, Cadi Ayyad University, Marrakesh, Morocco' },
    { name: 'Ahlame Begdouri', affiliation: 'FST, My Abdellah University, Fès, Morocco' },
    { name: 'Ahmed Boujnoui', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
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
    { name: 'Andrea Molinari', affiliation: 'University of Trento, Italy' },
    { name: 'Anas Abou El Kalam', affiliation: 'ENSA, Cadi Ayyad University, Marrakesh, Morocco' },
    { name: 'Araby Madbouly', affiliation: 'Muscat College, Oman' },
    { name: 'Arezou Harraf', affiliation: 'Box Hill College Kuwait, Kuwait' },
    { name: 'Ashraf Darwish', affiliation: 'Helwan University, Egypt' },
    { name: 'Asmae Bengag', affiliation: 'ENSA - Berrechid, Hassan 1st University, Settat, Morocco' },
    { name: 'Aziz El Fazziki', affiliation: 'Faculty of Sciences Semlalia, Cadi Ayyad University, Marrakesh, Morocco' },
    { name: 'Azza Ahmed Abdo Ali', affiliation: 'Abdulrahman Bin Faisal University, Saudi Arabia' },
    { name: 'Baek-Young Choi', affiliation: 'Universities of Missouri – Kansas City, USA' },
    { name: 'Basheer Al-Haimi', affiliation: 'Hebei University, China' },
    { name: 'Basma Boukenze', affiliation: 'School of Information Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'Bouabid El Ouahidi', affiliation: 'Faculty of Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'Brahim Ouhbi', affiliation: 'ENSAM, Moulay Ismail University, Meknès, Morocco' },
    { name: 'Chakib Ben Njima', affiliation: 'ENIM, Sousse University, Tunisia' },
    { name: 'Chin-Shiuh Shieh', affiliation: 'National Kaohsiung University of Science and Technology, Taiwan' },
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
    { name: 'Fatiha Lakrami', affiliation: 'Faculty of Sciences, Chouaïb Doukali University, El Jadida, Morocco' },
    { name: 'Fatima Laasri', affiliation: 'Higher School of Technology, El Kelaâ Sraghna, Caddi Ayad University, Marrakesh' },
    { name: 'Ghizlane Orhanou', affiliation: 'Faculty of Sciences, Mohammed V University, Rabat, Morocco' },
    { name: 'Habib M. Kammoun', affiliation: 'Faculty of Science, University of Sfax, Tunisia' },
    { name: 'Hafssa Benaboud', affiliation: 'Facuty of Sciences, Mohammed V University, Rabat , Morocco' },
    { name: 'Haitam Ettazi', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Hajar Mousannif', affiliation: 'Faculty of Sciences Semlalia, Cadi Ayyad University, Marrakesh, Morocco' },
    { name: 'Hamid Taramit', affiliation: 'Center for Computational Simulation, Universidad Politécnica de Madrid, Spain' },
    { name: 'Hanan El Bakkali', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
    { name: 'Hatem Ben Sta', affiliation: 'University Tunis El Manar, Tunisia' },
    { name: 'Heba Askr', affiliation: 'Faculty of computers and AI, University of Sadat City, Egypt' },
    { name: 'Heba M. Abdel-Atty', affiliation: 'Port Said University Egypt' },
    { name: 'Heba Mahmoud Afify', affiliation: 'Higher Institute of Engineering in Shorouk Academy, Egypt' },
    { name: 'Heba Nashaat', affiliation: 'Port Said University Egypt' },
    { name: 'Heba Y. M. Soliman', affiliation: 'Port Said University Egypt' },
    { name: 'Hicham Tribak', affiliation: 'Polydisciplinary Faculty, Ouarzazate, Morocco' },
    { name: 'Hicjham Ben Alla', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Hind Mikram', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Houssam Halmaoui', affiliation: 'ISMAC, Rabat, Morocco' },
    { name: 'Ibraheem Kasim Ibraheem', affiliation: 'Dijlah University College, Baghdad, Iraq' },
    { name: 'Ibrahima Faye', affiliation: 'Universiti Teknologi PETRONAS, Malaysia' },
    { name: 'Idriss Chana', affiliation: 'EST, My Ismail University, Méknes, Morocco' },
    { name: 'Iman Elmir', affiliation: 'I2S, Hassan 1st University, Settat, Morocco' },
    { name: 'Imane Hilal', affiliation: 'ESI, Mohammed V University, Rabat, Morocco' },
    { name: 'Jamal Zahi', affiliation: 'Faculty of Economics and Management, Settat, Morocco' },
    { name: 'Jaouad Dabounou', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Joshua A. Abolarinwa', affiliation: 'Namibia University of Science and Technology, Namibia' },
    { name: 'Kamal Bouhassoune', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Karmela Aleksis Maslac', affiliation: 'Zagreb School of Economics and Management, Croatia' },
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
    { name: 'Lavika Goel', affiliation: 'Malaviya, National Institute of Technology (NIT), Jaipur- India' },
    { name: 'Loubna Hamami', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
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
    { name: 'Mohamed Hanini', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Mohamed Hossam Ahmed', affiliation: 'School of Electrical Engineering and Computer Science, Ottawa, Canada' },
    { name: 'Mohamed Kissi', affiliation: 'FST - Mohammedia, Hassan II University, Casablanca, Morocco' },
    { name: 'Mohamed Mohamed Elsakka', affiliation: 'Port Said University Egypt' },
    { name: 'Mohamed Moughit', affiliation: 'ENSAM, Hassan II University, Casablanca, Morocco' },
    { name: 'Mohamed Nabil', affiliation: 'Faculty of Sciences, Chouaïb Doukali University, El Jadida, Morocco' },
    { name: 'Mohamed Naimi', affiliation: 'ENSA - Berrechid, Hassan 1st University, Settat, Morocco' },
    { name: 'Mohamed Nemiche', affiliation: 'Polydisciplinary Faculty of Taza, Sidi Mohamed Ben Abdellah University, Morocco' },
    { name: 'Mohamed Sabbane', affiliation: 'Facuty of Sciences, My Ismail University, Meknès, Morocco' },
    { name: 'Mohamed Sadik', affiliation: 'ENSA - Berrechid, Hassan 1st University, Settat, Morocco' },
    { name: 'Mohammed Abdel-Rahman Marey', affiliation: 'MISR University, Egypt' },
    { name: 'Mohammed Ridounai', affiliation: 'EST, Hassan II University, Casablanca, Morocco' },
    { name: 'Mostafa Belkasmi', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
    { name: 'Mostafa Bellafkih', affiliation: 'INPT, Rabat, Morocco' },
    { name: 'Mostafa Ezziyyani', affiliation: 'FST, Abdelmalek Essaadi University,Tangier, Morocco' },
    { name: 'Mostafa Saadi', affiliation: 'ENSA - Khouribga, Moulay Slimane University, Morocco' },
    { name: 'Mostapha Zbakh', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
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
    { name: 'Niketa Gandhi', affiliation: 'MIRLabs, Washington, USA' },
    { name: 'Nizar Rokbani', affiliation: 'High Institute of Applied Sciences and Technology, University of Sousse, Tunisia' },
    { name: 'Noreddine Gherabi', affiliation: 'ENSA - Khouribga, Morocco' },
    { name: 'Noura Aknin', affiliation: 'Faculty of Sciences, Abdelmalek Essaâdi University, Tétouan, Morocco' },
    { name: 'Omar El Beggar', affiliation: 'FST - Mohammedia, Hassan II University, Casablanca, Morocco' },
    { name: 'Omar El Beqqali', affiliation: 'Faculty of Sciences, Fès, Morocco' },
    { name: 'Ouail Ouchetto', affiliation: 'FSJES, Université Hassan II, Casablanca, Morocco' },
    { name: 'Parthasarathy Subashini', affiliation: 'Deemed University, Coimbatore, India' },
    { name: 'Pavel Krömer', affiliation: 'VSB Technical University of Ostrava, Czech Republic' },
    { name: 'Peter J. Tonelato', affiliation: 'School of Medicine, University of Missouri, Columbia MO, USA' },
    { name: 'Qasim Zureigat', affiliation: 'Sulaiman AlRajhi School of Business, Saudia Arabia' },
    { name: 'Rachid Dakir', affiliation: 'Polydisciplinary Faculty, Ouarzazate, Morocco' },
    { name: 'Rachid Latif', affiliation: 'ENSA, Ibn Zohr University, Agadir, Morocco' },
    { name: 'Rachida Ajhoun', affiliation: 'ENSIAS, Mohammed V University, Rabat, Morocco' },
    { name: 'Rajendran Sobha Ajin Singh', affiliation: 'Painary P.O mIdukki, Kerala, India' },
    { name: 'Rania Ahmed Mohamed', affiliation: 'Modern University for the Technology & Information, Egypt' },
    { name: 'Rania Hodhod', affiliation: 'Columbus State University, USA' },
    { name: 'Rasha Saleh Abouelyazid', affiliation: 'Egyptian Chinese University, Egypt' },
    { name: 'Rawya Y. Rizk', affiliation: 'Port Said University, Egypt' },
    { name: 'Rehab F. Abdel-Kader', affiliation: 'Port Said University Egypt' },
    { name: 'S.P. Raja', affiliation: 'R&D Institute of Science and Technology, Tamil Nadu, India' },
    { name: 'Safaa Mahrach', affiliation: 'Higher School of Technology, Beni Mellal, Morocco' },
    { name: 'Said Ben Alla', affiliation: 'ENSA - Berrechid, Hassan 1st University, Settat, Morocco' },
    { name: 'Said El Kafhali', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Said Jai Andaloussi', affiliation: 'FS Aïn Chock, Hassan II University, Casablanca, Morocco' },
    { name: 'Said Raghay', affiliation: 'FST, Cadi Ayyad University, Marrakech, Morocco' },
    { name: 'Said Rakrak', affiliation: 'FST, Cadi Ayyad University, Marrakech, Morocco' },
    { name: 'Salah El Hadaj', affiliation: 'ENCG, Cadi Ayyad University, Marrakesh, Morocco' },
    { name: 'Sanaa El Filali', affiliation: 'Faculty of Sciences Ben M\'Sick, Hassan II University, Casablanca, Morocco' },
    { name: 'Sara Arezki', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Shakir Ullah', affiliation: 'Stratford University, USA' },
    { name: 'Sherif M. Abuelenin', affiliation: 'Port Said University Egypt' },
    { name: 'Sofia Douda', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Soukaina Mihi', affiliation: 'FST, Hassan 1st University, Settat, Morocco' },
    { name: 'Sundaramurthy Gayathri Devi', affiliation: 'Deemed University, Coimbatore, India' },
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
    "Machine and Deep learning": [
      "Ambient intelligence",
      "Big Data Visualization",
      "Blockchains",
      "Cognitive intelligence",
      "Cloud computing",
      "Cellular computing",
      "Complex Systems",
      "Deep learning",
      "Expert Systems",
      "Feature Elicitation",
      "Game AI",
      "Image Classification",
      "Intelligent Systems",
      "Knowledge Representation",
      "Learning theory",
      "Multitasking and Transfer Learning",
      "Natural Language Processing",
      "Neural Networks and applications",
      "Probabilistic Reasoning",
      "Recommender Systems",
      "Reinforcement Learning",
      "Real-time Decisions",
      "Supervised Learning",
      "System Interpretability",
      "Semantic Analysis",
      "Structure Discovery",
      "Unsupervised Learning"
    ],
    "Computational Intelligence": [
      "Combinatorial and numerical optimization",
      "Differential Evolution",
      "Evolutionary computing",
      "Fuzzy systems",
      "Fuzzy Quadratic programming",
      "Genetic Algorithm",
      "Genetic Programming",
      "Gene Expression",
      "Multi criteria decision making",
      "Nature Inspired Computing",
      "Natural Heuristic Methods",
      "Nature-inspired metaheuristic algorithms",
      "Rough Sets",
      "Soft Computing",
      "Swarm intelligence"
    ],
    "Mining and Data Analysis": [
      "Data Access",
      "Data Mining Foundations",
      "Parallel and Distributed Data mining Algorithms",
      "Data Streams Mining, Graph Mining",
      "Spatial Data mining, Text Video",
      "Multimedia Data Mining",
      "Web Mining",
      "Pre-processing Techniques",
      "Visualization",
      "Security and Information Hiding in Data Mining",
      "Data Mining Applications",
      "Databases",
      "Bioinformatics",
      "Biometrics",
      "Financial Modeling",
      "Forecasting",
      "Classification and Clustering",
      "Social Networks",
      "Educational Data Mining",
      "Knowledge Processing",
      "Data and Knowledge Representation",
      "Knowledge Discovery Framework and Process",
      "Integration of Data Warehousing",
      "Integrating Constraints and Knowledge in the KDD Process",
      "Exploring Data Analysis",
      "Explaining Discovered Knowledge",
      "Statistical Techniques for Generating a Robust",
      "Consistent Data Model",
      "Interactive Data Exploration/Visualization and Discovery",
      "Languages and Interfaces for Data Mining",
      "Mining Trends"
    ],
    "Robotics and Automation": [
      "Agricultural Robotics",
      "Applications of Autonomous Intelligent Robots",
      "Autonomous Robotic Systems",
      "Computer Vision and Image Processing",
      "Control Architectures and Programming",
      "Cooperative Perception",
      "Cooperative Planning and Task Allocation",
      "Dexterous Manipulation and Grasping",
      "Educational Robotics",
      "Entertainment Robots",
      "Evolutionary Robotics",
      "Humanoid Robotics",
      "Human-Robot Interaction",
      "Intelligent Control systems",
      "Localization, Mapping, and Navigation",
      "Locomotion and Actuation Systems",
      "Multi-Robot Coordination",
      "Multi-Robot Systems",
      "Planning, Reasoning and Modelling",
      "Recognition and Tracking",
      "Robot Learning",
      "Robotic Competitions",
      "Robotic Simulation and control",
      "Sensors and Sensor Integration",
      "Swarm Robotics",
      "Space Robotics",
      "Underwater Robotics"
    ],
    "Image Processing and Computer Vision": [
      "Activity Detection/ Recognition",
      "Biometrics, Forensics, Content Protection",
      "Computational Imaging",
      "Compressed Image/ Video Analytics",
      "Document Image Analysis",
      "Document and Synthetic Visual Processing",
      "Human Computer Interaction",
      "Image/ Video Scene Understanding",
      "Image/ Video Retrieval",
      "Image Enhancement /Super Resolution / Restoration",
      "Image/ Video Processing for Autonomous Vehicles",
      "Image/ Video Security",
      "Medical Image Analysis",
      "Motion and Tracking",
      "Remote Sensing, Hyperspectral Image Processing",
      "Segmentation and Shape Representation",
      "Visual Sensor Hardware",
      "Vision based Human GAIT Analysis"
    ],
    "Security in AI and Computer Vision": [
      "AI-based Cybersecurity",
      "AI fairness",
      "Cryptography for AI",
      "Explainable AI for Cybersecurity",
      "Generative AI Security",
      "AI-Driven Security Systems and Intrusion Detection",
      "Privacy Concerns in AI and Computer Vision",
      "Adversarial Attacks and Robustness in Computer Vision",
      "Robustness and Generalization of Vision Models under Adversarial Conditions",
      "Explainability and Interpretability for Secure Vision Systems",
      "Privacy-Preserving Vision AI, including Federated Learning and Differential Privacy",
      "Poisoning and Evasion Attacks in Vision Datasets and Models",
      "Defense Mechanisms: Detection, Mitigation, and Certified Defenses",
      "Secure Deployment of Vision AI in Edge and IoT Devices",
      "Ethical and Regulatory Aspects of Secure AI in Vision",
      "Model Watermarking, Ownership, and Integrity Verification",
      "Security Evaluation Benchmarks and Real-World Case Studies"
    ]
  };

  return (
    <div className="registration-container">
      <h1 className="registration-title">Call For Papers</h1>
      <div className="registration-info">
        <p>
          We welcome your participation and contribution to the 4<sup>th</sup> International Conference on
          Artificial Intelligence and Computer Vision (AICV'2025), which will be held in Marrakesh,
          Morocco during December 04 - 06, 2025. AICV'2025 is organized by the Computer,
          Networks, Mobility and Modeling Laboratory (IR2M), Faculty of Sciences and Techniques,
          Hassan 1st University, Settat, Morocco and the Scientific Research Group in Egypt (SRGE),
          Cairo University. Egypt.
        </p>
        <p>
          AICV'2025 is organized to provide an international forum that brings together those
          actively involved in the areas of interest and reports on up-to-the-minute innovations and
          developments to summarize the state-of-the-art and to exchange ideas and advances in all
          aspects of Artificial Intelligence, Computer Vision and Soft Computing Techniques. The
          conference contains also the following tracks:
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
          All accepted papers will be published in the conference proceedings, which will be
          published by Springer <span style={{ color: '#dc2626', fontWeight: 'bold' }}>(To be approved)</span> in the series of Lecture Notes on Data Engineering
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

    <div className="submission-deadline">
      Submission Deadline: August 31, 2025
    </div>

    <div className="registration-info"> 
      <p>The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
      <p>
        Authors are invited to submit original research contributions not concurrently submitted elsewhere trought CMT Microsoft. Normal
        length papers should be 8-10 pages, formatted in <a href="https://www.springer.com/gp/authors-editors/conference-proceedings/editors/word-template/19338734?srsltid=AfmBOoqsbSW-OUhSl4q7rBixSRfSYLn9uF5q_2JrkctDtu4zm-YtT39h">Springer's single column format</a> and <a href="https://www.springer.com/in/livingreviews/latex-templates?Frontend@footer-livingreviews.bottom3.url?=&srsltid=AfmBOoqxg23X9qSzjWcsfSNuOPa1qNuqiFdbPD1EGRWdEPFRZKIDsuHv">Springer's single latex format</a>.
      </p>
      <p>
        Submitted papers will be refereed by at least three reviewers for quality, correctness, originality, and relevance. Notification and
        reviews will be communicated via email. Authors of the best papers will be invited to extend their papers for inclusion in a special
        issue of some journals indexed by SCOPUS and EI.
      </p>
    </div>

    <h2 className="rate-title">Web Submission:</h2>

    <div className="registration-info">
      <p>
        <a href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fegyptscience-srge.com%2FAISI2025%2FTemplate.docx&wdOrigin=BROWSELINK">Word Template</a>
      </p>
    </div>

    <div className="registration-info">
      <p>
        All accepted conference papers will be presented at the conference and included in the published proceedings by Springer <span style={{ color: '#dc2626', fontWeight: 'bold' }}>(To be approved)</span>.
      </p>
      

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
    { category: 'Regular Author', early: '1 900 MAD', late: '2 400 MAD' },
    { category: 'Student Author', early: '1 500 MAD', late: '1 900 MAD' },
    { category: 'Extra paper', early: '800 MAD', late: '1 000 MAD' },
    { category: 'Non Author', early: '1 200 MAD', late: '1 600 MAD' },
  ];

  return (
    <div className="registration-container">
      <h2 className="registration-title">Registration</h2>
      
      <div className="registration-deadline">
      Registration deadline for participants: (Early registration) is October 01, 2025
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
  const speakers = [
    {
      name: 'Dr. Ajith Abraham',
      affiliation: 'Vice Chancellor, Sai University, Chennai, India. Founding Dean, School of Artificial Intelligence.',
      image: ajithAbraham,
      bio: `Prof. Ajith received his Ph.D. degree in Computer Science from Monash University, Melbourne, Australia (2001) and a Master of Science degree from Nanyang Technological University, Singapore (1998). Ajith's research experience includes over 35 years in the Industry and Academia. He has a world wide academic experience. As an Investigator / Co-Investigator, he is part of research grants worth over 110 Million US$. Ajith works in a multi-disciplinary environment involving machine intelligence, cyber-physical systems, Internet of things, network security, sensor networks, Web intelligence, data mining and applied to various real world problems. He has given more than 250+ plenary lectures and conference tutorials in these areas. He has authored / co-authored over 1500+ publications (with colleagues from nearly 70+ countries) and has an h-index of 120+. Some of his research works have also won best paper awards at International conferences.\nCurrently he is the Vice Chancellor at Sai University, Chennai and the Founding Dean of the School of Artificial Intelligence. Prior to this appointment he was the Vice Chancellor at Bennett University (Times Group) and Dean of Faculty of Computing and Data Science at FLAME University, Pune India. He was the Founding Director of Machine Intelligence Research Labs (MIR Labs - http://www.mirlabs.org), which has members from 100+ countries. He was the Chair of IEEE Systems Man and Cybernetics Society Technical Committee on Soft Computing (2008-2021) and a Distinguished Lecturer of IEEE Computer Society representing Europe (2011-2013). He serves/served the editorial board of over 50 International journals.`
    },
    {
      name: 'Dr. KC (Casey) Santosh',
      affiliation: 'Chair of the Department of Computer Science and founding director of the AI Lab at the University of South Dakota (USD)',
      image: kcSantosh,
      bio: `Prof. KC Santosh is the Chair of the Department of Computer Science (since 2020) and founding director of the AI Lab (since 2015) at the University of South Dakota (USD). He served as Graduate Program Director for seven years (2017–24) and was previously a research fellow at NIH and a PostDoc at INRIA (France). At USD, he has overseen five degree-granting programs, including six specializations and certificates, managed 15 faculty and three staff, supported ~500 students, and administered a budget of over $2.2 million, including research grants. With over $8.7 million in funding (DOD, NSF, and ED, to name a few), he has authored 10 books and 250+ research articles (such as IEEE TPAMI, IEEE TAI, and IEEE TMI). He serves as an associate editor for IEEE Trans on AI, IEEE Trans of Medical Imaging and Int J of Machine Learning & Cybernetics and leads review panels for NSF and Mitacs (Canada). He is a trained leader, having completed leadership programs such as Deans/Chairs 1.0 (CCAS, Spring 2021), Deans/Chairs 2.0 (CCAS, Summer 2024), and the President Executive Leadership Training (USD, 2021/22). He leads AI+x initiative that primarily includes curriculum innovation, South Dakota Biomedical Computation Collaborative (supported by a $6.5M award from the U.S. Department of Education) and USD's AI symposium (IEEE). He brings extensive experience in curriculum innovation—particularly in interdisciplinary initiatives and shared governance (e.g., physics, business analytics, psychology, biology, and biomedical engineering, etc.)—as well as in program assessment and evaluation (as PEV), including ABET accreditation during the 2016/17 and 2022/23 cycles. His leadership has driven a 4,000% growth in AI enrollment at USD. His contributions have established USD as a pioneer in AI programs within the state of South Dakota. In fundraising, he secured a $2.0 million endowment to further strengthen the reputation of the department. He is a member of the NIST's AI Safety Institute Consortium and a U.S. Speaker for AI education.`
    },
    {
      name: 'Dr. Adel M. Alimi',
      affiliation: 'Full Professor, University of Sfax, ENIS, Tunisia',
      image: adelAlimi,
      bio: `Prof. Adel M. Alimi graduated in Electrical Engineering in 1990 (from ENIS, Sfax, Tunisia). He obtained a PhD (from Ecole Polytechnique of Montreal, Canada) and then an HDR (from ENIS, Sfax, Tunisia) both in Electrical & Computer Engineering in 1995 and 2000 respectively. He has been Full Professor in Electrical Engineering since 2006, at the University of Sfax, ENIS (National Engineering School of Sfax), that he joined in 1996 as Assistant Professor and then as Associate Professor in 2001. He is Distinguisheed Visiting Professor at the University of Johannesburg, South Africa (Faculty of Engineering & the Built Environment, Department of Electrical & Electronic Engineering Science) (since 2024). He is founder and was Director of the research REGIM Lab in intelligent Machines (1997-2020). He also was Director of the National Engineering School of Sfax, University of Sfax, Tunisia (2005-2011), and was its Deputy Director & Director of Studies (2003-2005). He was Director of the Tunisia Erasmus+ Office (2018-2020). He was Visiting Professor at the University of Johannesburg, South Africa (Faculty of Engineering & the Built Environment, Department of Electrical & Electronic Engineering Science) (2021-2023). He was Visiting Professor at the University of Applied Sciences of Weingarten, Germany (2002). Prof. Alimi Scientific Production: - h index=38 (Web of Science), 43 (Scopus), 54 (Google Scholar) - - - - - Citations=7.3+k (Web of Science), 9.9+k (Scopus), 16.6+k (Google Scholar) 210+ Scientific Journal Papers 532+ Scientific Conference Papers 122+ PhD Thesis defended 20+ national patents Prof. Alimi managed funds of 2.8+M TND & 1.5+M € for 10+ national scientific projects and 30+ international scientific projects. Prof. Alimi received: - Tunisian Presidency Award for Scientific Research and Technology, 2010 - Tunisian National Order of Merit, at the title of the Education and Science Sector, 2006`
    },
    {
      name: 'Dr. Mohammed Essaaidi',
      affiliation: 'Full Professor, University Mohammed V, ENSIAS, Rabat',
      image: mohammedessaidi,
      bio: `Prof. Mohamed Essaaidi is a Full Professor and past Dean of ENSIAS, National Higher School for Computer Science and Systems Analysis, Mohammed V University, Rabat, Morocco (2011-2023). He was a Director General of the Moroccan School of Engineering Science (EMSI) Group, (2023 - 2024), Chief of Party of Interactive Digital Center Morocco at UM6P (since November 2020), Past Director of International Cooperation at the Ministry of General Affairs &amp; Governance, Morocco (2019), and past faculty member of the of Abdelmalek Essaadi University, Tetuan, Morocco (1993-2011). He was the IEEE Global Cities Alliance, Middle East &amp; Africa Chairman (2020-2022), and he has been the IEEE Humanitarian Technologies Board Programs Committee Chair and IEEE Special Interest Group on Humanitarian Technologies Global Chair (since January 2023), IEEE EAB Teaching Excellence Editorial Hub, Member (2021-2022), and IEEE Public Safety Technology, Education Chair (2021-22). He is also the founder and past Chairman of the IEEE Morocco Section (2005-2016), co-founder and chair of several IEEE Organizational Units in Morocco during the last two decades. He has authored and co-authored 10 books and more than 200 papers in international refereed journals and conferences in the field of Electrical and Computer engineering and its diverse applications. Furthermore, Prof. Essaaidi served as an international expert on Digital Transformation and Smart Cities for several international organizations such as UN, ITU, UNESCO, EU, ICESCO and UCLG Africa, and he is a member of the Oversight Committee of US National Academies of Science Engineering &amp; Medicine US – Arab and US-Africa Frontiers of Science Engineering &amp; Medicine Symposia (Since 2020). Moreover, in the framework of his position as the Director of International Cooperation in the Ministry of General Affairs and Governance (Morocco), he was involved in the coordination of the World Bank Group Morocco Country Partnership Framework (2019-2024) and OECD Morocco Country Program (2019-2024) among other internationa cooperation programs.`
    }
    // You can add other invited speakers here
  ];

  return (
    <div className="registration-container">
      <h1 className="registration-title">Invited Speakers</h1>
      <div className="speakers-list">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-item">
            {speaker.image && (
              <img
                src={speaker.image}
                alt={speaker.name}
                className="speaker-photo"
              />
            )}
            <div className="speaker-info">
              <h2 className="speaker-name">{speaker.name}</h2>
              <p className="speaker-affiliation">{speaker.affiliation}</p>
              {speaker.bio && <p className="speaker-bio">{speaker.bio}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="speakers-announcement" style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>More speakers will be announced shortly. Check back soon for updates!</p>
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
    cnrstLogo,
    greenticLogo,
    fegLogo,
    logo3,
    logo4,
    ensa,
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
    DSC_4773,
    DSC_4949,
    DSC_4817,
    DSC_4987,
    DSC_4976,
    DSC_4927,
    DSC_4785,
    DSC_4802,
    DSC_4862,
    DSC_4853,
    DSC_4792,
    DSC_4811,
    DSC_4784,
    DSC_4858,
    DSC_4925,
    DSC_4764,
    DSC_4965,
    DSC_4977,
    DSC_4823,
    DSC_4848,
    DSC_4926,
    DSC_4814,
    DSC_4790,
    DSC_4880,
    DSC_4984,
    DSC_4847,
    DSC_4816,
    DSC_4944,
    DSC_4900,
    DSC_4855,
    DSC_4930,
    DSC_4947,
    DSC_4895,
    DSC_4830,
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="photos-container">
      <h1 className="photos-title">AICV23 Conference Photo Gallery</h1>
      <div className="photo-grid">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`photo-item ${index % 5 === 0 ? 'vertical-span-2' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={bannerImages[selectedImageIndex]} alt="Enlarged view" className="modal-image" />
            <button className="modal-close" onClick={handleCloseModal}>&times;</button>
          </div>
        </div>
      )}
    </div>
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
        {/* New section for Organizers */}
      </div>
      <div className="footer-bottom">
        <p>&copy; AICV 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// Main App component
const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const marrakechImages = [Marrakechimg2, marrakechimg4, marrakechimg5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % marrakechImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [marrakechImages.length]);

  return (
    <Router basename="/AICV25">
      <div className="app-container">
        <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
        <nav className="navbar">
          <Link to="/" className="navbar-logo">
            <img src={AICVLogo} alt="AICV" className="logo-image" />
          </Link>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <IconWrapper icon={isMenuOpen ? FaTimes : FaBars} />
          </button>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <MenuLink to="/" icon={<IconWrapper icon={FaHome} />}>Home</MenuLink>
            <MenuLink to="/call-for-papers" icon={<IconWrapper icon={FaFileAlt} />}>Call For Papers</MenuLink>
            <MenuLink to="/paper-submission" icon={<IconWrapper icon={FaUpload} />}>Paper Submission</MenuLink>
            <MenuLink to="/registration" icon={<IconWrapper icon={FaUserPlus} />}>Registration</MenuLink>
            <MenuLink to="/committees" icon={<IconWrapper icon={FaUsers} />}>Committees</MenuLink>
            <MenuLink to="/invited-speaker" icon={<IconWrapper icon={FaMicrophone} />}>Invited Speakers</MenuLink>
            <MenuLink to="/photos" icon={<IconWrapper icon={FaFileAlt} />}>Photos</MenuLink>
            <MenuLink to="/sponsors" icon={<IconWrapper icon={FaHandshake} />}>Partners</MenuLink>
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
            <Route path="/photos" element={<Photos />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
