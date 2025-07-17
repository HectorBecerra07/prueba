import React from "react";
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <div className="font-sans text-gray-800">
      {/* NUESTRA HISTORIA */}
      <section className="py-20 bg-gray-50 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "#ccff00" }}
        >
          NUESTRA HISTORIA
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/img/nosotros/historia1.jpg"
              alt="Historia Darmax"
              className="rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed">
              Darmax nació con un sueño: transformar la manera en que las personas acceden al agua y a productos esenciales, creando soluciones que generen bienestar y nuevas oportunidades.
              <br /><br />
              Detrás de este sueño está Max, un joven emprendedor que, con solo 17 años, se inició en la venta de purificadores caseros y suministros para purificadoras. Su curiosidad lo llevó a descubrir el potencial de las máquinas vending de agua purificada.
              <br /><br />
              Con los ahorros generados por su trabajo y el apoyo de su familia, adquirió su primera purificadora: <strong>DARMAX</strong>.
              <br /><br />
              Más que vender tecnología, creamos oportunidades. Impulsamos a personas a emprender, a cuidar el agua y a mejorar su entorno. Lo hacemos con disciplina, integridad, compromiso y pasión.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-12 text-center text-lg leading-relaxed"
        >
          En Darmax creemos que, con las herramientas correctas, una sola idea puede cambiar una vida, y una vida puede transformar una comunidad.
        </motion.p>
      </section>

      {/* MISIÓN */}
      <section className="py-20 bg-white px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "#ccff00" }}
        >
          MISIÓN
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed text-center"
        >
          Ser líderes en innovación, desarrollo, venta, distribución y mantenimiento de máquinas vending automáticas de alta calidad.
          <br /><br />
          En Darmax, empoderamos a emprendedores mediante modelos de negocio rentables y sostenibles. Nos comprometemos a brindar satisfacción mediante servicio excepcional, mejorando la calidad de vida de las familias mexicanas.
        </motion.div>
      </section>

      {/* VISIÓN */}
      <section className="py-20 bg-gray-50 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "#ccff00" }}
        >
          VISIÓN
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed text-center"
        >
          Ser una empresa referente en tecnología de vanguardia, ofreciendo soluciones automatizadas que mejoren la vida diaria al facilitar el acceso a productos esenciales.
          <br /><br />
          Aspiramos a transformar comunidades mediante modelos accesibles, fomentando el emprendimiento y generando impacto positivo basado en la innovación, responsabilidad social y sostenibilidad.
        </motion.div>
      </section>

      {/* VALORES */}
      <section className="py-20 bg-white px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "#ccff00" }}
        >
          VALORES
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "DISCIPLINA - Enfoque riguroso y ordenado para garantizar resultados.",
            "CONSTANCIA - Esfuerzo diario para mantenerse en la vanguardia tecnológica.",
            "RESPONSABILIDAD - Compromiso con clientes, colaboradores y medio ambiente.",
            "INTEGRIDAD - Actuar con honestidad, construyendo relaciones de confianza.",
            "LIDERAZGO - Inspiramos con visión hacia la innovación y excelencia.",
            "COMPROMISO - Productos y servicios que aportan valor real y duradero.",
          ].map((valor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-700 leading-relaxed text-center">{valor}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
