"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Mansur Group</h3>
            <p className="text-gray-400 mb-4">
              {/* Excellence in Construction, Tourism, and Hospitality */}
              {t("hero.description")}
              </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -3, color: "#4267B2" }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, color: "#1DA1F2" }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, color: "#E1306C" }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, color: "#0077B5" }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {/* Quick Links */}
              {t("footer.quickLinks")}
              </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {/* Home */}
                  {t("footer.homePage")}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {/* About Us */}
                  {t("about.title")}
                </Link>
              </li>
              <li>
                <Link href="#sectors" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {/* Our Sectors */}
                  {t("footer.ourBusinesses")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {/* Contact */}
                  {t("contactUs.title")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {/* Our Businesses */}
              {t("footer.ourBusinesses")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#construction" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {/* Construction */}
                  {t("footer.construction")}
                </Link>
              </li>
              <li>
                <Link href="#tourism" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {/* Tourism */}
                  {t("footer.tourism")}
                </Link>
              </li>
              <li>
                <Link href="#hospitality" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {/* Hotels & Hospitality */}
                  {t("footer.hospitality")}
                </Link>
              </li>
              <li>
                <Link href="#finance" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {/* Finance */}
                  {t("footer.finance")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {/* Legal */}
              {t("footer.legal")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {/* Privacy Policy */}
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {/* Terms of Service */}
                  {t("footer.termsOfUse")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {/* Cookie Policy */}
                  {t("footer.cookiePolicy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Mansur Group. {t("footer.allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  )
}

    // "footer": {
    //     "quickLinks": "Tezkor havolalar",
    //     "homePage": "Bosh sahifa",
    //     "ourBusinesses": "Bizneslarimiz",
    //     "construction": "Qurilish",
    //     "tourism": "Turizm",
    //     "hospitality": "Mehmondo'stlik",
    //     "finance": "Moliyaviy xizmatlar",
    //     "legal": "Huquqiy",
    //     "privacyPolicy": "Maxfiylik siyosati",
    //     "termsOfUse": "Foydalanish shartlari",
    //     "cookiePolicy": "Cookie siyosati",
    //     "allRightsReserved": "Barcha huquqlar himoyalangan"
    // }
