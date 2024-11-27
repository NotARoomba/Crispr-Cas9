import React from "react";
import { motion, Variants } from "framer-motion";
import StepSection from "./StepSection";

export default function Home() {
  const steps = [
    {
      step: "1er",
      description:
        "Se diseña una secuencia de ARN guía (gRNA) que es complementaria a la región de ADN que se quiere editar. Este gRNA guía a la proteína Cas9 hasta el genoma exacto que tiene que ser modificado.",
      reverse: false,
    },
    {
      step: "2do",
      description:
        "El gRNA y el Cas9, una proteína enzimática capaz de cortar el ADN, son introducidos en la célula. Esto puede hacerse mediante diversos métodos, como electroporación, transfección o usando virus para entregar el material genético.",
      reverse: true,
    },
    {
      step: "3ro",
      description:
        "Una vez dentro de la célula, el gRNA se une al ADN objetivo por bases complementarias. La proteína Cas9 corta ambas cadenas de ADN en el sitio específico que indica el gRNA.",
      reverse: false,
    },
    {
      step: "4to",
      description:
        "Tras el corte del ADN, la célula intenta reparar el daño de dos maneras: Reparación por unión no homóloga de extremos (NHEJ) Reparación por recombinación homóloga (HR).",
      reverse: true,
    },
    {
      step: "5to",
      description:
        "Una vez realizada la reparación, las células que han sido editadas se seleccionan y se verifican para confirmar que la edición del genoma ha sido exitosa.",
      reverse: false,
    },
    {
      step: "6to",
      description:
        "Finalmente, las células que han sido modificadas con éxito se cultivan y, si es necesario, se seleccionan para su uso en investigaciones o aplicaciones posteriores.",
      reverse: true,
    },
  ];
  const item = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  };
  const bounce: Variants = {
    visible: {
      y: -10,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="bg-black h-full text-white">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        className="h-screen flex flex-col"
      >
        <div className="m-auto text-center gap-2">
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
            }}
            className="text-8xl font-bold mb-0"
          >
            CRISPR
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
            }}
          >
            Alejandra Restrepo | Nathan Alspaugh | Gabriela Cortés
          </motion.p>
        </div>
        <motion.p
        variants={item}
        animate="visible"
        className="mx-auto -translate-y-12 font-semibold text-2xl"
      >
        <motion.p variants={bounce}>Scroll</motion.p>
      </motion.p>
      </motion.div>
      {steps.map(({ step, description, reverse }, index) => (
        <StepSection
          key={index}
          step={step}
          title={`${step} Paso`}
          description={description}
          reverse={reverse}
        />
      ))}
    </div>
  );
}
