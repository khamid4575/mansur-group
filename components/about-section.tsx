"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            About Mansur Group
          </motion.h2>

          <motion.div variants={itemVariants} className="w-20 h-1 bg-amber-500 mx-auto mb-8" />

          <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-8">
            Founded with a vision of excellence, Mansur Group has established itself as a leader across multiple
            industries. Our diverse portfolio spans construction, tourism, and hospitality, delivering exceptional
            quality and service in every sector.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-8">
            With decades of combined experience, our team brings expertise, innovation, and dedication to every project.
            We pride ourselves on building lasting relationships with our clients and partners, creating value that
            stands the test of time.
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Mission</h3>
              <p className="text-gray-700">
                To deliver exceptional quality and value across all our business sectors, exceeding expectations and
                setting new standards of excellence.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Vision</h3>
              <p className="text-gray-700">
                To be the preferred choice in our industries, recognized for innovation, quality, and customer
                satisfaction.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Values</h3>
              <p className="text-gray-700">
                Integrity, excellence, innovation, and customer focus guide everything we do at Mansur Group.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
