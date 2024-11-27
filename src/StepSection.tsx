import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import DNA from "./DNA";
import { OrbitControls } from "@react-three/drei";
import RNA from "./RNA";
import Cell from "./Cell";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

export default function StepSection({ step, title, description, reverse }) {
  console.log(step)
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className={`h-screen flex ${reverse ? "flex-row-reverse" : ""} relative justify-between`}
    >
      <motion.p
        variants={item}
        className={`absolute top-10 ${reverse ? "right-10" : "left-10"} text-4xl font-bold`}
      >
        {step} Paso
      </motion.p>
      <div className="m-auto">
        <motion.p
          variants={item}
          className="m-auto text-center font-medium w-1/2 text-2xl"
        >
          {description}
        </motion.p>
      </div>
      {parseInt(step[0]) < 2 ? <Canvas className="w-1/2">
      <ambientLight intensity={100} />
      <OrbitControls />
          <spotLight position={[2, 2, 2]} intensity={100} />
          {/* <DNA scale={0.002} rotation={[90, 0, 0]} position={[0, 2, 0]} /> */}
          <RNA scale={0.002}  position={[0, -3, 0]} />
      </Canvas> : parseInt(step[0]) == 2 ? <video width="600" height="500" className="m-auto flex" autoPlay  loop >
      <source className="mx-auto" src="/cas92.mp4" type="video/mp4"/>
</video> : parseInt(step[0]) == 3 ? <video width="600" height="500" className="m-auto flex" autoPlay  loop >
      <source className="mx-auto" src="/cas9.mp4" type="video/mp4"/>
</video> : parseInt(step[0]) == 4 ? <Canvas className="w-1/2">
      <ambientLight intensity={100} />
      <OrbitControls />
          <spotLight position={[2, 2, 2]} intensity={100} />
          <DNA scale={0.002} rotation={[90, 0, 0]} position={[0, 2, 0]} />
          {/* <RNA scale={0.002}  position={[0, -3, 0]} /> */}
      </Canvas>  : parseInt(step[0]) ?   <Canvas className="w-1/2">
      <ambientLight intensity={100} />
      <OrbitControls />
          <spotLight position={[4, 4, 4]} intensity={100} />
          <Cell scale={0.6} rotation={[90, 0, 0]} position={[0, 2, 0]} />
          {/* <RNA scale={0.002}  position={[0, -3, 0]} /> */}
      </Canvas>:<></>}
    </motion.div>
  );
}
