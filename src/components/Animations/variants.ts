import { Variants } from "framer-motion";

export const fadeIn = (direction = "up"): Variants => {
  return {
    initial: {
      y: direction === "up" ? 40 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};

export const opacityAnimation=():Variants=>{
  return {
    initial:{
      opacity: 0 
    },
    whileInView:{
      opacity:1
    },
     animate: {
      transition: {
        duration: 1.5,
      
      },
    },
   
  }
}

