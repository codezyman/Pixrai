import React from "react";
import { motion } from "motion/react";
import Features from "../components/Features";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
            <span className="text-gradient">Features</span> & Capabilities
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover everything Pixrai has to offer. From AI-powered image generation 
            to professional tools designed for creators.
          </p>
        </motion.div>

        {/* Detailed Features */}
        <Features />

        {/* Additional Features Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow">
              Advanced <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
              Professional features for professional results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">🎨 Style Variety</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  Generate images in any style you can imagine - from photorealistic to artistic, 
                  from minimalist to complex, from modern to vintage.
                </p>
                <ul className="text-secondary space-y-2">
                  <li>• Photorealistic portraits and landscapes</li>
                  <li>• Artistic and abstract compositions</li>
                  <li>• Cartoon and illustration styles</li>
                  <li>• Vintage and retro aesthetics</li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-effect rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">⚡ Performance</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  Optimized for speed and reliability. Generate images faster than ever before.
                </p>
                <ul className="text-secondary space-y-2">
                  <li>• Average generation time: 5-10 seconds</li>
                  <li>• 99.9% uptime guarantee</li>
                  <li>• Global CDN for fast loading</li>
                  <li>• No queue system - instant processing</li>
                </ul>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">🔒 Security & Privacy</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  Your data and creations are protected with enterprise-grade security.
                </p>
                <ul className="text-secondary space-y-2">
                  <li>• End-to-end encryption</li>
                  <li>• GDPR compliant</li>
                  <li>• Secure payment processing</li>
                  <li>• Private image generation</li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-effect rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">📱 Cross-Platform</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  Access pixrai from anywhere, on any device, with a consistent experience.
                </p>
                <ul className="text-secondary space-y-2">
                  <li>• Responsive web design</li>
                  <li>• Mobile-optimized interface</li>
                  <li>• Works on all browsers</li>
                  <li>• Progressive Web App ready</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Use Cases Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow">
              Perfect for <span className="text-gradient">Every Creator</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
              Whether you're a professional designer or just getting started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Designers",
                description: "Create mockups, concepts, and visual assets for your projects",
                icon: "🎨"
              },
              {
                title: "Marketers",
                description: "Generate social media content, ads, and promotional materials",
                icon: "📈"
              },
              {
                title: "Content Creators",
                description: "Create unique visuals for blogs, videos, and social media",
                icon: "📝"
              },
              {
                title: "Developers",
                description: "Generate placeholder images and UI mockups",
                icon: "💻"
              },
              {
                title: "Entrepreneurs",
                description: "Create branding materials and marketing assets",
                icon: "🚀"
              },
              {
                title: "Students",
                description: "Visualize concepts and create project presentations",
                icon: "📚"
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 text-center card-hover"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{useCase.title}</h3>
                <p className="text-secondary leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-shadow">
              Ready to <span className="text-gradient">Get Started</span>?
            </h3>
            <p className="text-secondary mb-6 leading-relaxed">
              Join thousands of creators who are already using pixrai to bring their ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/result'}
                className="px-8 py-3 rounded-xl btn-primary text-white font-semibold hover-lift"
              >
                Start Creating Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/buy'}
                className="px-8 py-3 rounded-xl btn-secondary font-semibold hover-lift"
              >
                View Pricing Plans
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage; 
