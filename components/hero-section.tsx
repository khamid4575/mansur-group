"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Language from "@/components/language";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          // src="/placeholder.svg?height=1080&width=1920"
          src="/bobur34.jpg"
          alt="Mansur Group Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <motion.div
        className="absolute top-8 right-8 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
      >
        <Language />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">{t("hero.title")}</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Mansur Group
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Excellence in Construction, Tourism, and Hospitality
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href={"#sectors"}>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white"
              >
                Explore Our Services
              </Button>
            </Link>
            <Link href={"#contact"}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-gray-600 hover:text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <ArrowDown className="h-8 w-8 text-white" />
      </motion.div>
    </section>
  );
}
