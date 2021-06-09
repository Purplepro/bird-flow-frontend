import React from 'react';
import birdvid from './videos/birdvid.mp4'
const Welcome = (props) => {
    return (
        <div>
          
            <section>
            <form className="bird_search_form">
                <div>
                    {/* search database on home page */}
                <label className="HomeSearch">Name</label>  
                <input className="birdSearch"></input>

                <label className="HomeSearch">Region</label>  
                <input className="birdSearch"></input>

                <label className="HomeSearch">State</label>  
                <input className="birdSearch"></input>

                <button className="btn btn-primary specialButton">Submit</button>
                
                </div>
            </form>

            <video autoPlay loop muted  className="video1">
             
                <source src={birdvid} type="video/mp4"/>
            </video>
            </section>
        
        </div>
    )
}

export default Welcome;