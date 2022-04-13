import React from 'react';
import Typical from "react-typical"
import SocialMediaGroup from './SocialMediaGroup';

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={2}
        wrapper="p"
        steps={[
          "React Native Developer", 2000,
          "NodeJs Developer", 2000,
          "UI/UX Designer", 2000,
          "React Developer", 2000,
          "Full Stack Developer", 2000,
        ]}
      />
    );
  },
  (props, prevprops) => true
);

TypingAnimation.displayName = "TypingAnimation"

const HomeSection = () => {
  return (
    <div className="w-full h-full max-w-4xl mx-auto">
      <h6 className="text-xl font-notoSerif text-gray-300">Hello, I&apos;m</h6>
      <h1 className="mt-3 font-bold text-5xl tracking-normal text-primary-light">ALİ POLAT</h1>

      <div className="mt-4 md:mt-3 text-2xl font-normal text-transparent bg-gradient-to-r from-cyan-300 via-purple-700 to-pink-800 bg-clip-text">
        <TypingAnimation />
      </div>

      <div className="flex items-center space-x-4 mt-8 text-3xl">
        <SocialMediaGroup />
      </div>

      <h1 className="mt-16 text-xl font-notoSerif text-gray-200">
        I am a Full Stack Developer with experience developing frontend and backend systems.
        <br />
        I enjoy doing this job.
      </h1>
    </div>
  );
};

export default HomeSection;