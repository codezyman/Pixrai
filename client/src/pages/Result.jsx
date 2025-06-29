import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };
  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative">
          <img src={image} alt="" className="max-w-sm rounded" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          />
        </div>
        {loading && <p>Loading......</p>}
      </div>

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full items-center">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-4 max-sm:w-20 placeholder-color"
          />
          <button
  type="submit"
  className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
>
  Generate
</button>

        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10">
          <p
            onClick={() => {
              setIsImageLoaded(false);
            }}
            className="bg-white border border-purple-500 text-purple-700 px-8 py-3 rounded-full cursor-pointer font-semibold shadow-sm hover:bg-purple-50 transition-colors"
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-3 rounded-full cursor-pointer font-semibold shadow-md hover:from-pink-500 hover:to-purple-500 transition-colors"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
