import './MyStyle.css'
import cv from './assets/cv.pdf';
import codeBck from './assets/image/code7.jpg';
import profile2 from './assets/image/profile2.jpg';
import profile21 from './assets/image/profile21.jpg';
import javascript from './assets/image/javascript.png';
import html from './assets/image/html.png';
import css from './assets/image/css.png';
import reactImg from './assets/image/react.png';
import php from './assets/image/php.png';
import laravel from './assets/image/laravel.png';
import hafmara from './assets/image/hafmara.png';
import ciecobon from './assets/image/ciecobon.png';
import elizabeth from './assets/image/elizabeth.png';
import polcoopinventory from './assets/image/polcoopinventory.png';
import softnet from './assets/image/softnet.png';
import vinemondfarms from './assets/image/vinemondfarms.png';
import hafmarasuper from './assets/image/hafmarasuper.png';
import supermarket from './assets/image/supermarket.png';
import Navigation from './Navigation'
import { faLinkedinIn, faGithub, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div>
      <div>
        <Navigation/>
   <section>
    <div className="herocontainer">
    <div className="herosection" style={{backgroundImage: `url(${codeBck})` }}>
    </div> 
<div className="heroimg">
<img src={profile2} alt="Profile 2" />
</div>
</div>
</section>

<section>
<div className="about">
    <div className="name">
        <h2>obafemi david adeniyi</h2>
    </div>
    <div className="position">
        <p>software engineer</p>
    </div>
    <div className="socialmedia">
        <div className="socialflex">
        <ul>

        <li>
          <a href="https://www.linkedin.com/in/davprincecode" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            </li>
        <li>
          <a href="https://github.com/davprincecode" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          </a>
          </li>
        <li>
          <a href="https://twitter.com/davprincecode" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
            </a>
            </li>

        <li>
          <a href="https://facebook.com/Davprincecode" target="_blank">
            
          <FontAwesomeIcon icon={faFacebookF} />
            
            </a>
          
          </li>
        </ul>
        </div>
    </div>
</div>
</section>

<section>
<div className="aboutme" id="aboutmee">
    <div className="aboutmeheader">
        <h2>about <span className="secondcolor">me</span></h2>
    </div>

    <div className="aboutmeflex">
        <div className="aboutmeimg">
            <img src={profile21} alt="profile" />
        </div>
        <div className="aboutmecontent">
            <p>Experienced Full Stack web developer and software engineer with a demonstrated history of projects done and ongoing project. Skilled in HTML5, Cascading Style Sheets (CSS), javaScript, php and laravel.</p>
        </div>
    </div>

   <div className="aboutmecv">
    <div className="cv">
        <a href={cv}>download cv</a>
    </div>
    <div className="email">
        <a href="tel: +2348138457885">contact me</a>
    </div>
   </div>

</div>
</section>

<section>
<div className="resumecontainer" id="resume">
    <div className="resumeheader">
        <h2>my <span className="secondcolor">resume</span></h2>
    </div>

<div className="resumeflex">

<div className="education">
    <div className="eduheader">
        <h4>education</h4>
    </div>
    <div className="educationcontainer">
        <div className="date">
            <h6>November 2022 - Present</h6>
        </div>
        <div className="schooltitle">
            <h2>ladoke akintola university of technology</h2>
            <p>computer science</p>
        </div>
    </div>
</div>


<div className="experience">
    <div className="experienceheader">
        <h4>experience</h4>
    </div>

    <div className="experiencecontainer">
        <div className="date">
            <h6>August 2022 - Present</h6>
        </div>
        <div className="experiencetitle">
            <h2>softnet professionals solution</h2>
            <p>Tech Lead (Contract)</p>
        </div>
    </div>

    <div className="experiencecontainer">
        <div className="date">
            <h6>February 2023 - July 2023</h6>
        </div>
        <div className="experiencetitle">
            <h2>Digitaal INC</h2>
            <p>Php Developer (Internship)</p>
        </div>
    </div>

    <div className="experiencecontainer">
        <div className="date">
            <h6>February 2022 - July 2022</h6>
        </div>
        <div className="experiencetitle">
            <h2>BitsPlease</h2>
            <p>Php Developer(Internship)</p>
        </div>
    </div>

    

</div>

</div>

</div>
</section>

<section>
<div className="stack">
    <div className="stackheader">
        <h2>my <span className="secondcolor">tech stack</span> </h2>
        <p>technology i`ve been working with recently</p>
    </div>
    <i className="fab fa-html"></i>
<div className="stackiconholder">
    <div className="stackicon">
        <img src={html} />
        <p>html</p>
    </div>
    <div className="stackicon">
        <img src={css} />
        <p >css</p>
    </div>
    <div className="stackicon">
        <img src={javascript} />
        <p style={{textAlign: "left", marginLeft: "-20px" }}>javascript</p>
    </div>
    <div className="stackicon">
        <img src={reactImg} />
        <p>react</p>
    </div>
    <div className="stackicon">
        <img src={php} />
        <p>php</p>
    </div>
    <div className="stackicon">
        <img src={laravel} />
        <p>laravel</p>
    </div>
   {/* pppp */}
</div>

</div>
</section>

<section>
<div className="projectcontainer" id="project">
    <div className="projectheader">
        <h2>my <span className="secondcolor">projects</span> </h2>
        <p>Things I’ve built so far</p>
    </div>
    <div className="projectholder">
        
        <div className="projectitem">
           <a href="https://hafmara.com" target="_blank">
             <div className="projectimg">
                <img src={hafmara} />
            </div>
            <div className="projecttitle">
                <p>website</p>
                    <h4>hafmara supermarket</h4>
            </div>
            </a>
        </div>
      
        <div className="projectitem">
          <a href="ciecobobon.davtechie.org" target="_blank">
            <div className="projectimg">
                <img src={ciecobon} />
            </div>
            <div className="projecttitle">
                <p>website</p>
                    <h4>ciecobon company</h4>
            </div>
            </a>
        </div>
      

        <div className="projectitem">
           <a href="elizabeth.davtechie.org"  target="_blank">
             <div className="projectimg">
                <img src={elizabeth} />
            </div>
            <div className="projecttitle">
                <p>supermarket management system</p>
                    <h4>Elizabeth Resorts and motels</h4>
            </div>
            </a>
        </div>
       
        <div className="projectitem">
          <a href="polcoop.davtechie.org"  target="_blank">
            <div className="projectimg">
                <img src={polcoopinventory}/>
            </div>
            <div className="projecttitle">
                <p>inventory management system</p>
                    <h4>nigeria police cooperative</h4>    
            </div>
            </a>
        </div>
      

        <div className="projectitem">
          <a href="softnetprofessionals.com"  target="_blank">
            <div className="projectimg">
                <img src={softnet} />
            </div>
            <div className="projecttitle">
                <p>website</p>
                    <h4>softnet professionals solution limited</h4>
            </div>
            </a>
        </div>
   

        <div className="projectitem">
          <a href="vinemondfarms.org" target="_blank">
            <div className="projectimg">
                <img src={vinemondfarms} />
            </div>
            <div className="projecttitle">
                <p>website</p>
                    <h4>vinemond farms limited</h4>
            </div>
            </a>
        </div>


        <div className="projectitem">
           <a href="hafmara.softnetprofessionals.com">
             <div className="projectimg">
                <img src={hafmarasuper} />
            </div>
            <div className="projecttitle">
                <p>supermarket management system</p>
                
                    <h4>hafmara supermarket</h4>      
            </div>
          </a>
        </div>
        

        <div className="projectitem">
           <a href="elizabethresort.davtechie.org">
             <div className="projectimg">
                <img src={supermarket} />
            </div>
            <div className="projecttitle">
                <p>supermarket management system</p>
                    <h4>elizabeth resorts and motels</h4>
            </div>
            </a>
        </div>
      
       
    </div>
</div>
</section>

<section>
    <footer>
        <div className="socialmedia" id="contact">
            <p className="t">Find me on social media...</p>
            <div className="socialmflex">
            <ul>
            <li>
  <a href="https://www.linkedin.com/in/davprincecode" target="_blank">
    <FontAwesomeIcon icon={faLinkedinIn} />
  </a>
</li>
<li>
  <a href="https://github.com/davprincecode" target="_blank">
    <FontAwesomeIcon icon={faGithub} />
  </a>
</li>
<li>
  <a href="https://twitter.com/davprincecode" target="_blank">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
</li>
<li>
  <a href="https://facebook.com/Davprincecode" target="_blank">
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
</li>
           </ul>
            </div>
         <p>+2348138457885</p>
         <p>obafemidavidadeniyi@gmail.com</p>

         <div className="allright">
            <p>alright reserved 2023</p>
         </div>
        </div>
    </footer>
</section>

</div>

    </div>
  )
}

export default App
