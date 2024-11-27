import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import DNA from "./DNA";
import { OrbitControls } from "@react-three/drei";

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
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className={`h-screen flex ${reverse ? "flex-row-reverse" : ""} relative`}
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
      <Canvas className="w-1/2">
      <ambientLight intensity={100} />
      <OrbitControls />
          <spotLight position={[2, 2, 2]} intensity={100} />
          <DNA scale={0.002} rotation={[90, 0, 0]} position={[0, 2, 0]} />
      </Canvas>
    </motion.div>
  );
}
