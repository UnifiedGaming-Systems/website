import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Features25 from '../components/features25'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bubbly Talkative Flamingo</title>
        <meta property="og:title" content="Bubbly Talkative Flamingo" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">BlueSky</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">Twitter</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">GitHub</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">#</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">Games</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Download Launcher</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Support</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text24">Download UnifiedGameLauncher</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text25">
              Get ready to dive into your favorite games with our gaming
              launcher. Ready to combine your games in 1 place, from GOG.com™,
              Steam™, Epic Games™, Xbox™ and PlayStation™.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text26">Download our Products</span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text27">User-Friendly Interface</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text28">
              Easy access to all installed games
            </span>
          </Fragment>
        }
      ></Features24>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text29">Easy Game Management</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text30">
              Effortlessly manage and launch all your favorite games from one
              convenient platform.
            </span>
          </Fragment>
        }
      ></Features25>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text31">You can contact us anytime on:</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text32">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text33">Twitter</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text34">BlueSky</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text35">
              Head to Twitter and tag @UnifiedGamingSys, and we will help you
              from there!
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text36">
              Head to BlueSky, and tag @unifiedgaming-systems.mazeymoos.com, and
              we will help you from there
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text37">Download Launcher</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text38">FAQ</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text39">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text40">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text41">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text42">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
