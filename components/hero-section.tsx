"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Language from "@/components/language";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = [
  "/2.webp",
  "/1.webp",
  "/3.webp",
  "/4.webp",
  "/5.webp",
  "/6.webp",
  "/7.webp",
  "/8.webp",
  "/9.webp",
  "/10.webp",
  "/11.webp",
  "/12.webp",
];

export default function HeroSection() {
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Har 4 soniyada rasmni almashish uchun interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval); // Komponent o'chirilganda intervalni tozalash
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      {/* Rasmlar va qoplama uchun konteyner */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Mansur Group Hero Background"
            fill
            className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0} // Birinchi rasm uchun tez yuklash
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Qora qoplama */}
      </div>

      {/* Til tanlash komponenti */}
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

      {/* Matn va tugmalar */}
      <div className="container relative z-10 mx-auto px-4 text-center md:text-start">
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
            className="text-xl md:text-2xl max-w-3xl mx-auto md:mx-0 mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link href={"#sectors"}>
              <Button
                size="lg"
                className="w-36 bg-amber-500 hover:bg-amber-600 text-white lg:text-lg"
              >
                {t("hero.ourServices")}
              </Button>
            </Link>
            <Link href={"#contact"}>
              <Button
                size="lg"
                variant="outline"
                className="w-36 border-white text-white hover:text-gray-600 bg-transparent lg:text-lg"
              >
                {t("hero.contactUs")}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Pastga yo‘naltiruvchi o‘q */}
      <motion.div
        className="absolute bottom-8"
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