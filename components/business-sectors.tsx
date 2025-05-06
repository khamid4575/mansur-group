"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Hotel, Plane } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BusinessSectors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const sectors = [
    {
      id: "construction",
      title: "Construction",
      description:
        "Building the future with innovative construction solutions, from residential developments to commercial complexes and infrastructure projects.",
      icon: <Building2 className="h-12 w-12 text-amber-500" />,
      image: "/construction.jpg",
      link: "#construction",
    },
    {
      id: "tourism",
      title: "Tourism",
      description:
        "Crafting unforgettable experiences through our tourism services, showcasing the best destinations with expert guides and personalized itineraries.",
      icon: <Plane className="h-12 w-12 text-amber-500" />,
      image: "/istanbul.webp",
      link: "#tourism",
    },
    {
      id: "hospitality",
      title: "Hotels & Hospitality",
      description:
        "Delivering exceptional hospitality through our premium hotel properties, where comfort meets luxury and every guest feels special.",
      icon: <Hotel className="h-12 w-12 text-amber-500" />,
      image: "/ihthotel.jpg",
      link: "#hospitality",
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="sectors">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Business Sectors</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8" />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Mansur Group operates across multiple industries, bringing excellence and innovation to every sector.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden border-none shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sector.image || "/placeholder.svg"}
                    alt={sector.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-center mb-4">{sector.icon}</div>
                  <CardTitle className="text-2xl text-center">{sector.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 text-center">{sector.description}</p>
                </CardContent>
                <CardFooter className="pt-0 flex justify-center">
                  <Link href={sector.link}>
                    <Button variant="outline" className="group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
