import React from 'react'
import { Footer,Slider } from './';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from "./images/main.jpg"
import img2 from "./images/main2.jpg"
import img3 from "./images/hero.jpg"

export default function Layer(){
    return(
        <>
            <div className="container px-4 py-4" id="custom-cards">
      <h2 className="pb-2 border-bottom text-warning">Features</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
          <div className="card card-cover h-90 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${img3})`, backgroundPosition:"center",backgroundSize:"cover"  }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 fs-2 fw-bold"><br />Enjoy Seamless Streaming</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card card-cover h-80 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${img2})`, backgroundPosition:"center",backgroundSize:"cover"  }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 fs-2 fw-bold"><br />Experience <br /> ad-free videos</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card card-cover h-80 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${img1})` , backgroundPosition:"right",backgroundSize:"cover" }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 fs-2 fw-bold"><br />Dive into the real world</h3>
            </div>
          </div>
        </div>  
      </div>
    </div>
    <div className="container">
    <h2 className="pb-2 border-bottom text-warning">Frequent questions</h2>
    <br /><br />

    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>What is STREAMHUB ?</b></Accordion.Header>
        <Accordion.Body>
        If you're referring to your video-sharing platform, then StreamHuB is a vibrant and exciting place for users to watch, upload, and share diverse video content. Think of it as YouTube with a fresh, community-focused twist, offering seamless streaming, advanced search, and features that encourage interaction and engagement.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><b> What makes StreamHuB's streaming seamless?</b></Accordion.Header>
        <Accordion.Body>
       <b> Adaptive streaming:</b> Adjusts video quality automatically based on your internet connection, ensuring smooth playback even on limited bandwidth. <br />
       <b>Pre-buffering:</b> Starts buffering upcoming videos in the background, minimizing pauses and interruptions. <br />  
       <b>Offline viewing:</b> Download videos for offline viewing, perfect for commuting or traveling.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> <b> How does StreamHuB keep me updated on new videos?</b></Accordion.Header>
        <Accordion.Body>
        <b>Personalized Recommendations:</b> StreamHuB learns your preferences and suggests new videos you might enjoy, based on your watch history and likes. <br />
        <b>Channels and Subscriptions:</b> Follow your favorite creators and get notified when they upload new content. <br />
        <b>Trending Page:</b> Discover the hottest videos on StreamHuB, across different categories and genres. <br />
        <b>Curated Playlists:</b> Explore thematic playlists created by StreamHuB editors and fellow users.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> <b>How powerful is StreamHuB's search engine?</b> </Accordion.Header>
        <Accordion.Body>
          <b>Advanced algorithms:</b> Use keywords, categories, filters, and voice search to find the videos you're looking for, including specific scenes or moments within videos. <br />
          <b>Auto-suggestions:</b> As you type, StreamHuB suggests relevant searches and trending topics. <br />
          <b>Related videos:</b> Explore similar content after watching a video, for rabbit-hole adventures
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" >
        <Accordion.Header><b>How does StreamHuB engage viewers beyond just watching videos?</b></Accordion.Header>
        <Accordion.Body>
          <b>Interactive elements:</b> Like, comment, share, and subscribe to connect with creators and build a community around your favorite content. <br />
          <b>Live streams:</b> Interact with creators and other viewers in real-time through live broadcasts. <br />
          <b>Playlists and watch parties:</b> Create and share curated playlists, or co-watch videos with friends in real-time.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><b> How does StreamHuB ensure high-quality videos and accessibility?</b></Accordion.Header>
        <Accordion.Body>
        <b>Multiple resolutions:</b> Choose from various video qualities, from low data usage to stunning high definition. <br />
        <b>Subtitles and closed captions:</b> Enjoy videos in different languages or with additional text support for hearing-impaired viewers. <br />
        <b>Content recommendations:</b> Discover hidden gems and high-quality creators that might not be on your radar yet.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header> <b>What are your plans for the future of StreamHuB?</b> </Accordion.Header>
        <Accordion.Body>
        We're constantly innovating to enhance the StreamHuB experience. We plan to introduce new features like interactive video elements, advanced search and recommendation algorithms, and even original content programming. Stay tuned for exciting updates!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header> <b>How does StreamHuB compare to other video platforms?</b></Accordion.Header>
        <Accordion.Body>
        StreamHuB aims to stand out with its user-friendly interface, diverse content library, strong focus on creator communities, and commitment to creating a safe and inclusive space for everyone. We encourage you to try us out and see the difference!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    
    </div>

    <br />
    <div className="container">
    <h2 className="pb-2 border-bottom text-warning py-5 mb-0">The Creator</h2>
    <hr />
     <br />
    <Slider /> 
    </div>
    <br />
    <Footer />
        </>
    );
}