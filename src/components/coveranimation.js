import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import Ruby from '../../static/ruby.png'
import Javascript from '../../static/js.png'
import Raect from '../../static/react.png'
import Css from '../../static/css.png'
import Html from '../../static/html.png'
import Redux from '../../static/redux.png'

const spring = {
  type: "spring",
  damping: 70,
  stiffness: 20
};

const initialColors = [Ruby, Javascript, Raect, Redux, Css, Html];

const Slides = () => {
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)),1500);
  }, [colors]);

  return (
    <div className="d-flex justify-content-end mt-5">
      {colors.map(background => (
        <motion.img
          className="mr-2"
          src={background}
          key={background}
          layoutTransition={spring}
          style={{ background }}
        />
      ))}
    </div>
  );
};


export default Slides;