"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CircleDollarSign,
  Handshake,
  Hotel,
  Mountain,
  Plane,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function BusinessSectors() {
  //   "businesses": {
  //     "title": "Biznes tarmoqlarimiz",
  //     "charvak": {
  //         "title": "Travel Advisor",
  //         "description": "Chorvoqdagi eng yaxshi dam olish maskanlarini bir platformada jamlagan keng qamrovli loyiha."
  //     },
  //     "infinitytour": {
  //         "title": "Infinity Tour",
  //         "description": "Sayyohlik xizmatlarimiz orqali unutilmas tajribalarni yaratish, eng yaxshi yo'nalishlarni mutaxassis gidlar va shaxsiy marshrutlar bilan namoyish qilish."
  //     },
  //     "hospitality": {
  //         "title": "UzHA",
  //         "description": "Mehmonxona va boshqa turar joylar, Restoranlar hamda ularning mahsulot va xizmat ta'minotchilarini birlashtiradi."
  //     },
  //     "finance": {
  //         "title": "Shosh Finance Advisor",
  //         "description": "Buxgalteriya va moliyaviy boshqaruv bilan shug‘ullanuvchi tashkilot. Soliq va moliyaviy xavflardan himoya qiladi. Hujjatlarni tartibga keltiradi."
  //     },
  //     "hotelsupply": {
  //         "title": "Hotel Supply",
  //         "description": "Mehmonxonalar va restoranlar uchun ishonchli, tez va sifatli ta’minot — Hotel Supply biznesingizning barqaror tayanchi."
  //     },
  //     "innovativeConstruction": {
  //         "title": "Innovatsion Qurilish",
  //         "description": "Turar-joylardan tortib savdo majmualari va infratuzilma loyihalarigacha innovatsion qurilish yechimlari bilan kelajakni qurish."
  //     }
  // },
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const sectors = [
    {
      id: "charvak",
      title: t("businesses.charvak.title"),
      description: t("businesses.charvak.description"),
      icon: <Mountain className="h-12 w-12 text-amber-500" />,
      image: "/pyramids.jpg",
      link: "https://charvak.uz",
    },
    {
      id: "infinity-tour",
      title: t("businesses.infinitytour.title"),
      description: t("businesses.infinitytour.description"),
      icon: <Plane className="h-12 w-12 text-amber-500" />,
      image: "/istanbul.webp",
      link: "https://infinitytour.uz",
    },
    {
      id: "hospitality",
      title: t("businesses.hospitality.title"),
      description: t("businesses.hospitality.description"),
      icon: <Hotel className="h-12 w-12 text-amber-500" />,
      image: "/ihthotel.jpg",
      link: "https://uzha.uz",
    },
    {
      id: "finance",
      title: t("businesses.finance.title"),
      description: t("businesses.finance.description"),
      icon: <CircleDollarSign className="h-12 w-12 text-amber-500" />,
      image: "/accounting.webp",
      link: "https://shoshfinance.uz/",
    },
    {
      id: "hotel-suply",
      title: t("businesses.hotelsupply.title"),
      description: t("businesses.hotelsupply.description"),
      icon: <Handshake className="h-12 w-12 text-amber-500" />,
      image: "/supply.webp",
      link: "https://supplypartners.uz/",
    },
    {
      id: "innovatsion-qurilish",
      title: t("businesses.innovativeConstruction.title"),
      description: t("businesses.innovativeConstruction.description"),
      icon: <Building2 className="h-12 w-12 text-amber-500" />,
      image: "/construction.jpg",
      link: "#construction",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="sectors">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            {/* Our Business Sectors */}
            {t("businesses.title")}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8" />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {/* Mansur Group operates across multiple industries, bringing
            excellence and innovation to every sector. */}
            {t("businesses.description")}
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
                  <CardTitle className="text-2xl text-center">
                    {sector.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 text-center">
                    {sector.description}
                  </p>
                </CardContent>
                <CardFooter className="pt-0 flex justify-center">
                  <Link href={sector.link}>
                    <Button variant="outline" className="group">
                      {t("businesses.learnMore")}
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
  );
}
