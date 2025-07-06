import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-20 py-12"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Customer testimonials
      </h1>
      <p className="text-gray-500 mb-12">What Our Users Are Saying</p>

      <div className="flex flex-wrap gap-10 px-4">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/40 backdrop-blur-md p-8 rounded-lg shadow-lg border border-white/20 max-w-md min-h-[350px] m-auto cursor-pointer hover:scale-[1.02] transition-all flex flex-col justify-between flex-1 h-full"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt=""
                className="rounded-full w-14"
              />
              <h2 className="text-x1 font-semibold mt-3 text-white">{testimonial.name}</h2>
              <p className="text-gray-300 mb-4">{testimonial.role}</p>
              <div className="flex mb-4">
                {Array(testimonial.stars)
                  .fill()
                  .map((item, index) => (
                    <img key={index} src={assets.rating_star} alt="" />
                  ))}
              </div>
              <p className="text-center text-base text-white drop-shadow-sm">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
