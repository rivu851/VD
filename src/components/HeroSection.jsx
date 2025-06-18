import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const images = [
  "https://plus.unsplash.com/premium_photo-1661963643348-e95c6387ee8a?q=100&w=3000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=100&w=3000&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1682091907070-4985a6fbe6d2?q=100&w=3000&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1663127647641-6d5ded8bf5f9?q=100&w=3000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464757494038-157e877f60d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661885523029-fc960a2bb4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664461663120-b39152ba92ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1460627390041-532a28402358?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1678727128546-154b1725c336?q=80&w=2149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const HeroSection = () => {
  const { t } = useTranslation();
  const { user } = useAppContext();
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      });
      await Promise.all(promises);
      setLoaded(true);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (loaded) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [loaded]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {loaded &&
        images.map((image, i) => (
          <img
            key={i}
            src={image}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h2 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
          {t("herosec.heroTitle")}
        </h2>
        <p className="text-xl font-medium max-w-3xl">
          {t("herosec.heroSubtitle")}
        </p>
        <Link
          to={user == null ? "/login" : "/explore"}
          className="bg-red-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-red-700 transition duration-300"
        >
          {t("herosec.explore")}
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
