import React from "react";
import { motion } from "motion/react";

const Features = () => {
  const features = [
    {
      icon: "🎨",
      title: "AI-Powered Generation",
      description: "Advanced AI models create stunning, high-quality images from your text descriptions in seconds.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Generate images in under 10 seconds. No waiting, no queues - instant results every time.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🔒",
      title: "Commercial Rights",
      description: "All generated images come with full commercial usage rights. Use them for any project.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "📱",
      title: "Mobile Optimized",
      description: "Perfect experience on all devices. Create images on your phone, tablet, or desktop.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "🎯",
      title: "High Resolution",
      description: "Generate images in high resolution suitable for professional use and printing.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "💡",
      title: "Creative Freedom",
      description: "Unlimited creativity with no restrictions. Generate any style, any concept, any time.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Everything you need to bring your creative vision to life. 
            Professional tools for professional results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 card-hover"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 text-2xl`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-shadow">
              Ready to <span className="text-gradient">Transform</span> Your Ideas?
            </h3>
            <p className="text-secondary mb-6 leading-relaxed">
              Join thousands of creators who are already using Pixrai to bring their imagination to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/result'}
                className="px-8 py-3 rounded-xl btn-primary text-white font-semibold hover-lift"
              >
                Start Creating
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/buy'}
                className="px-8 py-3 rounded-xl btn-secondary font-semibold hover-lift"
              >
                View Pricing
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 
