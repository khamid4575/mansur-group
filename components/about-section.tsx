// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";

// export default function AboutSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   return (
//     <section className="py-20 bg-white" id="about">
//       <div className="container mx-auto px-4" ref={ref}>
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="max-w-4xl mx-auto text-center"
//         >
//           <motion.h2
//             variants={itemVariants}
//             className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
//           >
//             {/* About Mansur Group */}
//             Mansur Group haqida
//           </motion.h2>

//           <motion.div
//             variants={itemVariants}
//             className="w-20 h-1 bg-amber-500 mx-auto mb-8"
//           />

//           <motion.p
//             variants={itemVariants}
//             className="text-lg text-gray-700 mb-8"
//           >
//             {/* Founded with a vision of excellence, Mansur Group has established itself as a leader across multiple
//             industries. Our diverse portfolio spans construction, tourism, and hospitality, delivering exceptional
//             quality and service in every sector. */}
//             Mansur Group bugungi kunda bir nechta sohalarda yetakchi o‘rinni
//             egallab kelmoqda. Bizning keng qamrovli faoliyatimiz qurilish,
//             turizm va mehmondo‘stlik sohalarini o‘z ichiga olib, har bir
//             yo‘nalishda yuqori sifat va xizmatni taqdim etadi.
//           </motion.p>

//           <motion.p
//             variants={itemVariants}
//             className="text-lg text-gray-700 mb-8"
//           >
//             {/* With decades of combined experience, our team brings expertise,
//             innovation, and dedication to every project. We pride ourselves on
//             building lasting relationships with our clients and partners,
//             creating value that stands the test of time. */}
//             Yillar davomida orttirilgan tajriba asosida jamoamiz har bir
//             loyihaga bilim, yangilik va mas’uliyat bilan yondashadi. Biz
//             mijozlar va hamkorlar bilan mustahkam va uzoq muddatli aloqalar
//             o‘rnatishni qadrlaymiz, vaqt o‘tishi bilan o‘z qiymatini
//             yo‘qotmaydigan natijalarni taqdim etamiz.
//           </motion.p>

//           <motion.div
//             variants={itemVariants}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
//           >
//             <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
//               <h3 className="text-xl font-semibold mb-2 text-gray-900">
//                 {/* Our Mission */}
//                 Vazifamiz
//               </h3>
//               <p className="text-gray-700">
//                 {/* To deliver exceptional quality and value across all our business
//                 sectors, exceeding expectations and setting new standards of
//                 excellence. */}
//                 Yuqori darajadagi sifat va qiymatni taqdim etish, mijozlarning
//                 kutganidan yuqori natijalar ko‘rsatish va mukammallikda yangi
//                 standartlar o‘rnatish.
//               </p>
//             </div>

//             <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
//               <h3 className="text-xl font-semibold mb-2 text-gray-900">
//                 {/* Our Vision */}
//                 Maqsadimiz
//               </h3>
//               <p className="text-gray-700">
//                 {/* To be the preferred choice in our industries, recognized for
//                 innovation, quality, and customer satisfaction. */}
//                 Faoliyatimizda innovatsiya, yuqori sifat va mijozlar
//                 mamnuniyatini ta’minlash orqali afzal tanlovga aylanishni maqsad
//                 qilganmiz.
//               </p>
//             </div>

//             <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
//               <h3 className="text-xl font-semibold mb-2 text-gray-900">
//                 {/* Our Values */}
//                 Qadriyatlarimiz
//               </h3>
//               <p className="text-gray-700">
//                 {/* Integrity, excellence, innovation, and customer focus guide
//                 everything we do at Mansur Group. */}
//                 Har bir ishimizda halollik, mukammallik, innovatsiya va
//                 mijozlarga e'tibor asosiy yo‘l-yo‘riq bo‘lib xizmat qiladi.
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Award, TrendingUp, Users, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export default function AboutSection() {
  const t = useTranslations();
  const stats = [
    { value: "18+", label: t("about.experience"), icon: Award },
    { value: "12+", label: t("about.projects"), icon: CheckCircle },
    { value: "15+", label: t("about.team"), icon: Users },
    { value: "10+", label: t("about.awards"), icon: TrendingUp },
  ];

  const features = [
    {
      title: t("about.excellence"),
      description: t("about.excellenceDescription"),
    },
    {
      title: t("about.innovation"),
      description: t("about.innovationDescription"),
    },
    {
      title: t("about.sustainability"),
      description: t("about.sustainabilityDescription"),
    },
    {
      title: t("about.customerFocus"),
      description: t("about.customerFocusDescription"),
    },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50"
      id="about"
    >
      {/* Background blur elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber-200 blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-blue-200 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div custom={0} variants={fadeIn}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-1 bg-amber-500 mb-6"
              />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {/* About <span className="text-amber-500">Mansur Group</span> */}
                {t("about.title")}
              </h2>
            </motion.div>

            <motion.p
              custom={1}
              variants={fadeIn}
              className="text-lg text-gray-700"
            >
              {t("about.p1")}
            </motion.p>

            <motion.p
              custom={2}
              variants={fadeIn}
              className="text-lg text-gray-700"
            >
              {t("about.p2")}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  variants={fadeIn}
                  custom={3 + i}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image with parallax */}
          <div className="relative z-50">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/Xusan Tuxtaev.webp"
                alt="Xusan Tuxtaev"
                width={600}
                height={800}
                className="w-full max-h-[800px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{t("about.ourLegacy")}</h3>
                <p className="text-gray-200">{t("about.since")}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              custom={8}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 bg-white rounded-xl shadow-xl p-6 z-20 w-4/5 max-w-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {t("about.ourAchievements")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={fadeIn}
                      custom={9 + i}
                      className="text-center p-2"
                    >
                      <div className="flex justify-center mb-2">
                        <Icon className="h-6 w-6 text-amber-500" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mission & Vision */}
        <motion.div
          variants={fadeIn}
          // custom={14}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-white text-amber-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Rocket className="h-5 w-5" />
              </span>
              {t("about.ourMission")}
            </h3>
            <p className="text-white/90 text-lg">
              {t("about.ourMissionDescription")}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Users className="h-5 w-5" />
              </span>
              {t("about.ourVision")}
            </h3>
            <p className="text-white/90 text-lg">
              {t("about.ourVisionDescription")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
