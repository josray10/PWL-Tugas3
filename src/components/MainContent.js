import React from "react";
import profilePic from "../assets/figure1.png"
const MainContent = () => {
  return (
    <div class="about">
      <div>
        <h2 class="about-heading-secondary">About</h2>
        <h1 class="about-heading-primary">
          <span class="about-heading-hightlight">Jossy Saragih</span>
        </h1>
      </div>
      <div class="about-description-box">
        <div>
          <p>
            I am 7th semester informatics student in Institut Teknologi
            Sumatera. I am a person who is curious about new things. I am also
            active in doing work. My weakness is that it takes a long time to
            get along with friends.
          </p>
        </div>
        <div class="about-image-box">
          <img src={profilePic} alt="avatar jossy" class="about-image" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
