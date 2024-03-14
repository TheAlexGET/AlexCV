import React, { useRef } from "react";
import MyImage from "./UI/MyImage/MyImage";
import { useSpring, useInView, animated } from "@react-spring/web";
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import { useUrl } from "../hooks/useUrl";
import satelite from '/src/assets/satellite4.svg'
const AboutMe = () => {
  const parralax = useRef(true)
  const [p_left, slideFromLeft] = useInView(() => ({
    from: { x: -200 },
    to: {x: 0},
    config: {
      duration: 500
    }
  }));

  const [p_right, slideFromRight] = useInView(() => ({
    from: { x: 100 },
    to: {x: 0},
    config: {
      duration: 500
    }
  }));

  return (
    <div className="about">
      <Parallax ref={parralax} pages={1}>
      <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: useUrl('stars', true),
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer offset={0.60} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={satelite} style={{ width: '15%', marginLeft: '30px' }} />
        </ParallaxLayer>
      </Parallax>
      <MyImage></MyImage>
      <div className="about__text">
        <h1>About Me</h1>
        <animated.p
          id="paragraph_1"
          className='about__paragraph'
          ref={p_left}
          style={ window.innerWidth > 988 ? { ...slideFromLeft } : {}}
        >
          I am a dedicated 18-year-old front-end developer with a profound
          interest in web development, particularly in utilizing the power of
          React. From a young age, I've been fascinated by the possibilities of
          the digital realm, and I've immersed myself in the world of coding to
          bring my ideas to life on the web.
        </animated.p>

        <animated.p id="paragraph_2" className='about__paragraph' ref={p_right} style={ window.innerWidth > 988 ? { ...slideFromRight }: {}}>
          My journey into front-end development began with a curiosity-driven
          exploration of HTML, CSS, and JavaScript. However, it was when I
          discovered React that my passion truly ignited. The declarative and
          component-based nature of React resonated with me, and I quickly
          realized its potential to revolutionize the way we build dynamic and
          responsive user interfaces.
        </animated.p>

        <animated.p id="paragraph_3" className='about__paragraph' ref={p_left} style={ window.innerWidth > 988 ? { ...slideFromLeft } : {}}>
          With React as my toolkit, I've embarked on numerous projects, each one
          a canvas for creativity and innovation. Whether it's crafting reusable
          components, managing state with precision, or harnessing the power of
          virtual DOM for optimal performance, I relish the challenge of pushing
          the boundaries of what's possible in web development.
        </animated.p>
      </div>
    </div>
  );
};

export default AboutMe;
