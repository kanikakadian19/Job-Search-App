import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import RoomContainer from "../components/RoomContainer"
function room() {
    
        return (
        <><Hero hero="roomsHero">
                <Banner title="our jobs">
                <Link to="/" className="btn-primary">return home</Link>
                </Banner>
        </Hero>

       <RoomContainer />
      </>
        );
};

export default room;
