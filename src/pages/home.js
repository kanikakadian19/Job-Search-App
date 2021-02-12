import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services"
import FeaturedRoom from "../components/FeaturedRoom";
//import styledHero from "../components/styledHero"; 
export default function home() {
    return (
        <>
        <Hero>
            <Banner title="job hunt" subtitle="one stop place to get employed">
            <Link to= "/room" className="btn-primary"> JOBS FOR YOU</Link>
            </Banner>
        </Hero>
        <Services></Services>
        <FeaturedRoom></FeaturedRoom>
        </>
    );
};
