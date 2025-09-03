import { motion } from "framer-motion";
import { HeartPulse, Smile, Brain, AlertTriangle } from "lucide-react";

const features = [
  {
    title: "Advanced Skin Analysis",
    icon: <HeartPulse className="text-red-600" size={32} />,
    points: [
      "Acne Assessment: Detection, severity, type identification, mapping",
      "Pigmentation Analysis: Melasma, freckles, sun spots, hyperpigmentation",
      "Texture Analysis: Pores, roughness, fine lines, wrinkles",
      "Hydration Monitoring: Oil/dryness levels, dehydration signs",
      "Inflammation Detection: Redness, irritation, rosacea, eczema",
      "Barrier Function: Skin integrity & damage detection",
      "Photo Damage: Sun exposure effects, age spots",
    ],
    gradient: "from-red-100 to-pink-100",
  },
  {
    title: "Facial Analysis",
    icon: <Smile className="text-red-600" size={32} />,
    points: [
      "Symmetry: Facial balance & asymmetry detection",
      "Circulation: Blood flow, under-eye health, capillary visibility",
      "Structural Analysis: Proportion & landmark detection",
    ],
    gradient: "from-pink-100 to-purple-100",
  },
  {
    title: "Lifestyle Impact Analysis",
    icon: <Brain className="text-red-600" size={32} />,
    points: [
      "Sleep Quality: Dark circles, puffiness, fatigue signs",
      "Stress: Visible stress effects on facial features",
      "Nutritional Indicators: Deficiency signs in skin health",
      "Hydration Levels: Overall water balance status",
    ],
    gradient: "from-yellow-100 to-orange-100",
  },
  {
    title: "Risk Assessment",
    icon: <AlertTriangle className="text-red-600" size={32} />,
    points: [
      "Skin Cancer Risk: Early warning detection system",
      "Premature Aging: Factors contributing to accelerated aging",
      "Chronic Stress: Long-term stress markers",
      "Hormonal Balance: Imbalance signs in skin condition",
    ],
    gradient: "from-green-100 to-emerald-100",
  },
];

const SkinCare = () => {
  return (
    <section className="bg-gradient-to-b from-red-50 to-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-red-700 mb-6 text-center"
        >
          Advanced Skin Care & Analysis
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto text-center leading-relaxed mb-16"
        >
          At <span className="font-semibold">Karn - Blood and Organ Donor</span>, 
          we extend our mission of health and wellness by offering advanced skin 
          analysis. Our goal is to ensure donors maintain their overall well-being 
          while supporting life-saving causes.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-8 rounded-3xl shadow-lg bg-gradient-to-br ${feature.gradient} hover:shadow-2xl hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-center gap-4 mb-5">
                {feature.icon}
                <h3 className="text-2xl font-bold text-red-700">{feature.title}</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
        >
        
          {/* Start Button */}
  <div className="mb-4">
    <a
      href="https://health-mirror.vercel.app/" // replace with your external link
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Start
      </button>
    </a>
  </div>

          By combining advanced skin analysis with lifestyle and risk assessment, 
          <span className="font-semibold"> Karn</span> not only protects donors but also 
          promotes holistic health and well-being. 💖
        </motion.p>
      </div>
    </section>
  );
};

export default SkinCare;
