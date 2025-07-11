"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"

export default function ContactSection() {
  const t = useTranslations("")
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            {/* Contact Us */}
            {t("contactUs.title")}
            </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8" />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {/* Get in touch with our team to learn more about our services or to discuss your next project. */}
            {t("contactUs.description")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {/* Full Name */}
                        {t("contactUs.name")}
                      </label>
                      <Input id="name" placeholder={t("contactUs.name")} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {/* Email Address */}
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Email" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      {/* Subject */}
                      {t("contactUs.subject")}
                    </label>
                    <Input id="subject" placeholder={t("contactUs.subject")} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {/* Message */}
                      {t("contactUs.message")}
                    </label>
                    <Textarea id="message" placeholder={t("contactUs.message")} rows={5} />
                  </div>

                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                    {/* Send Message */}
                    {t("contactUs.sendMessage")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <CardContent className="p-6 space-y-8">
                <h3 className="text-xl font-semibold mb-4">
                  {/* Contact Information */}
                  {t("contactUs.toContact")}
                  </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-amber-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">
                        {/* Address */}
                        {t("contactUs.addressTitle")}
                      </h4>
                      <p className="text-gray-600 mt-1">
                        {/* Tashkent, Yunusabad District, Bobur Street, 34 */}
                        {t("contactUs.address")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-amber-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">{t("contactUs.phone")}</h4>
                      <p className="text-gray-600 mt-1">+998 (90) 176 62 50</p>
                      <p className="text-gray-600">+998 (95) 177 92 52</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-amber-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600 mt-1">info@mansurgroup.uz</p>
                      {/* <p className="text-gray-600">contact@mansurgroup.com</p> */}
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-medium mb-3">
                    {/* Business Hours */}
                    {t("contactUs.workTime")}
                  </h4>
                  <p className="text-gray-600">
                    {/* Monday - Friday: 9:00 AM - 6:00 PM */}
                    {t("contactUs.workTimeDescription")}
                  </p>
                  {/* <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p> */}
                  {/* <p className="text-gray-600">Sunday: Closed</p> */}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
