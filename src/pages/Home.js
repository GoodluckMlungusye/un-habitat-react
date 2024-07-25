import React from "react";
import VideoContainer from "../components/VideoContainer";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import PaceCourse from "../components/PaceCourse";
import HomeWebinars from "../components/HomeWebinars";
import Social from "../components/Social";

export default function Home() {
    return (
        <section className="home">
            <VideoContainer />
            <Hero/>
            <Portfolio/>
            <PaceCourse/>
            <HomeWebinars/>
            <Social/>
        </section>
    )
  }