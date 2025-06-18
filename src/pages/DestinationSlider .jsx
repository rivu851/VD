// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

// const DestinationSlider = () => {
//   const [hiddenGemsIndex, setHiddenGemsIndex] = useState(0);
//   const [trendingIndex, setTrendingIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(true);

//   const hiddenGems = [
//     {
//       id: 2,
//       name: "Bishnupur",
//       path:"/bishupur",
//       image: "https://assets.zeezest.com/images/PROD_bishnupur_1704899861960_thumb_800.jpeg"
//     },
//     {
//       id: 3,
//       name: "Doars",
//       path:"/doars",
//       image: "https://assets.zeezest.com/images/PROD_dooars%20%281%29_1704900895264_thumb_800.jpeg"
//     },
//     {
//       id: 4,
//       name: "Jhargram",
//       path:"/jhargram",
//       image: "https://assets.zeezest.com/images/PROD_jhargram_1704899616152_thumb_800.jpeg"
//     },
//     {
//       id: 5,
//       name: "Kankrajhor",
//       path:"/kankrajhor",
//       image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrKWqd3Q4j6aZpHc78frzFD6o6KipIArimjgsB4ed_yCW4FNnAoe3a1KP8TETdKEwF1PFvGA8kCKBCa6QcTls66edRML7ohpE7sQEIHDuv5DS0gUPmvH5r98Khf_mEDGEYLuKu2=w675-h390-n-k-no"
//     },
//     {
//       id: 6,
//       name: "Ayodha Pahar",
//       path:"/AyodhaPahar", 
//       image: "https://assets.zeezest.com/images/PROD_ayodhya%20pahar_1704899966106_thumb_800.jpeg"
//     },
//     {
//       id: 7,
//       name: "Jaldapara National Park",
//       image: "https://assets.zeezest.com/images/PROD_jaldapara%20national%20park_1704900855695_thumb_800.jpeg"
//     },
//     {
//       id: 8,
//       name: "Sandakhpu",
//       image: "https://assets.zeezest.com/images/PROD_sandakphu_1704901003293_thumb_800.jpeg"
//     },
//     {
//       id: 9,
//       name: "Kalimpong",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdVie8VtqkTsECR-K1zIU6qt5s885qVYAezA&s"
//     },
//   ];
//   const trendingDestinations = [
 
//     {
//       id: 7,
//       name: "Purulia",
//       image: "https://in.images.search.yahoo.com/images/view;_ylt=Awr1SbLuIE1odFcC03C9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzkyOTVjZTZkOWUyZjE2NWEyNzY5ZmFlMTIzMmRmMzkzBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DPurulia%2Blimage%26type%3DE210IN1589G91908%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D1&w=810&h=540&imgurl=www.oyorooms.com%2Ftravel-guide%2Fwp-content%2Fuploads%2F2019%2F12%2FGeneric-6-5.jpg&rurl=https%3A%2F%2Fwww.oyorooms.com%2Ftravel-guide%2Fplaces-to-visit-in-purulia%2F&size=149KB&p=Purulia+limage&oid=9295ce6d9e2f165a2769fae1232df393&fr2=piv-web&fr=mcafee&tt=9+Stunning+Places+to+Visit+in+Purulia+for+a+Remarkable+Trip&b=0&ni=21&no=1&ts=&tab=organic&sigr=l6KgoSibYIc3&sigb=UzUUke7C_V61&sigi=NR_vjvG35A7o&sigt=NxtR0x_XJugr&.crumb=WUbxkp.0Q8W&fr=mcafee&fr2=piv-web&type=E210IN1589G91908"

//     },
//     {
//       id: 8,
//         name: "Kashmir",
//       path:"/kashmir",
//       image: "https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407-scaled.jpg"
//     },
//     {
//       id: 9,
//        name: "Delhi",
//        path:"/delhi",
//       image: "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
//     },
//     {
//       id: 10,
//       name: "Paris",
//       path:"/paris",
//       image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=600&auto=format&fit=crop&q=60"
//     },
//     {
//       id: 11,
//        name: "Kerala",
//        path:"/kerala",
//       image: "https://tse4.mm.bing.net/th?id=OIP.1LmC3AubOyv1mN-FzKU7BAHaE8&pid=Api&P=0&h=180"
//     },
//     {
//       id: 12,
//       name: "Andaman",
//       path:"/andaman",
//       image: "https://tse4.mm.bing.net/th?id=OIP.Vo6dXy0kKreXtnbsnzNeagHaEL&pid=Api&P=0&h=180"
//     }
//   ];
//   const createInfiniteArray = (arr) => [...arr, ...arr, ...arr];
//   const infiniteHiddenGems = createInfiniteArray(hiddenGems);
//   const infiniteTrendingDestinations = createInfiniteArray(trendingDestinations);
//   useEffect(() => {
//     if (!isPaused) {
//       const interval = setInterval(() => setHiddenGemsIndex(prev => prev + 1), 3000);
//       return () => clearInterval(interval);
//     }
//   }, [isPaused]);
//   useEffect(() => {
//     if (!isPaused) {
//       const interval = setInterval(() => setTrendingIndex(prev => prev + 1), 3000);
//       return () => clearInterval(interval);
//     }
//   }, [isPaused]);

//   useEffect(() => {
//     if (hiddenGemsIndex >= hiddenGems.length) {
//       setIsTransitioning(false);
//       setHiddenGemsIndex(0);
//       setTimeout(() => setIsTransitioning(true), 50);
//     }
//   }, [hiddenGemsIndex, hiddenGems.length]);

//   useEffect(() => {
//     if (trendingIndex >= trendingDestinations.length) {
//       setIsTransitioning(false);
//       setTrendingIndex(0);
//       setTimeout(() => setIsTransitioning(true), 50);
//     }
//   }, [trendingIndex, trendingDestinations.length]);

//   const nextHiddenGemsSlide = () => setHiddenGemsIndex(prev => prev + 1);
//   const prevHiddenGemsSlide = () => {
//     if (hiddenGemsIndex === 0) {
//       setIsTransitioning(false);
//       setHiddenGemsIndex(hiddenGems.length);
//       setTimeout(() => {
//         setIsTransitioning(true);
//         setHiddenGemsIndex(hiddenGems.length - 1);
//       }, 50);
//     } else {
//       setHiddenGemsIndex(prev => prev - 1);
//     }
//   };
//   const nextTrendingSlide = () => setTrendingIndex(prev => prev + 1);
//   const prevTrendingSlide = () => {
//     if (trendingIndex === 0) {
//       setIsTransitioning(false);
//       setTrendingIndex(trendingDestinations.length);
//       setTimeout(() => {
//         setIsTransitioning(true);
//         setTrendingIndex(trendingDestinations.length - 1);
//       }, 50);
//     } else {
//       setTrendingIndex(prev => prev - 1);
//     }
//   };

//   const renderSlider = (items, index, next, prev, title) => (
//     <div className="mb-16">
//       <h2 className="text-3xl font-bold text-gray-900 mb-10 font-serif">{title}</h2>
//       <div className="relative overflow-hidden">
//         <div
//           className={`flex gap-8 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
//           style={{ transform: `translateX(-${index * 300}px)` }}
//         >
//           {items.map((destination, i) => (
//             <div
//               key={`${destination.id}-${i}`}
//               className="flex-shrink-0 w-72 group cursor-pointer"
//               onMouseEnter={() => setIsPaused(true)}
//               onMouseLeave={() => setIsPaused(false)}
//             >
//               <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 ease-out hover:-translate-y-1">
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={destination.image}
//                     alt={destination.name}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//                 <div className="p-5">
//                   <h3 className="text-xl font-bold text-gray-800 mb-1 font-sans">{destination.name}</h3>
//                   <p className="text-gray-600 text-sm">{destination.state || destination.country || "Beautiful Destination"}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Arrows */}
//         <button
//           onClick={prev}
//           className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/90 shadow-md rounded-full p-2 hover:bg-white transition-all duration-200 z-10 border border-gray-200 hover:shadow-lg"
//           aria-label="Previous"
//         >
//           <ChevronLeft className="w-6 h-6 text-gray-700" />
//         </button>
//         <button
//           onClick={next}
//           className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/90 shadow-md rounded-full p-2 hover:bg-white transition-all duration-200 z-10 border border-gray-200 hover:shadow-lg"
//           aria-label="Next"
//         >
//           <ChevronRight className="w-6 h-6 text-gray-700" />
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-7xl mx-auto">
//         {renderSlider(infiniteHiddenGems, hiddenGemsIndex, nextHiddenGemsSlide, prevHiddenGemsSlide, "Hidden Gems of India")}
//         {renderSlider(infiniteTrendingDestinations, trendingIndex, nextTrendingSlide, prevTrendingSlide, "Trending Destinations")}
//       </div>
//     </div>
//   );
// };
// export default DestinationSlider;





import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DestinationSlider = () => {
  const { t } = useTranslation();
  const [hiddenGemsIndex, setHiddenGemsIndex] = useState(0);
  const [trendingIndex, setTrendingIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const navigate = useNavigate();

  const hiddenGems = [
    {
      id: 2,
      name: t('destinationSlider.hiddenGems.bishnupur.name'),
      path: "/bishupur",
      image: "https://assets.zeezest.com/images/PROD_bishnupur_1704899861960_thumb_800.jpeg"
    },
    {
      id: 3,
      name: t('destinationSlider.hiddenGems.doars.name'),
      path: "/doars",
      image: "https://assets.zeezest.com/images/PROD_dooars%20%281%29_1704900895264_thumb_800.jpeg"
    },
    {
      id: 4,
      name: t('destinationSlider.hiddenGems.jhargram.name'),
      path: "/jhargram",
      image: "https://assets.zeezest.com/images/PROD_jhargram_1704899616152_thumb_800.jpeg"
    },
    {
      id: 5,
      name: t('destinationSlider.hiddenGems.kankrajhor.name'),
      path: "/kankrajhor",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrKWqd3Q4j6aZpHc78frzFD6o6KipIArimjgsB4ed_yCW4FNnAoe3a1KP8TETdKEwF1PFvGA8kCKBCa6QcTls66edRML7ohpE7sQEIHDuv5DS0gUPmvH5r98Khf_mEDGEYLuKu2=w675-h390-n-k-no"
    },
    {
      id: 6,
      name: t('destinationSlider.hiddenGems.ayodhaPahar.name'),
      path: "/AyodhaPahar", 
      image: "https://assets.zeezest.com/images/PROD_ayodhya%20pahar_1704899966106_thumb_800.jpeg"
    },
    {
      id: 7,
      name: t('destinationSlider.hiddenGems.jaldapara.name'),
      path: "/jaldapara",
      image: "https://assets.zeezest.com/images/PROD_jaldapara%20national%20park_1704900855695_thumb_800.jpeg"
    },
    {
      id: 8,
      name: t('destinationSlider.hiddenGems.sandakhpu.name'),
      path: "/sandakhpu",
      image: "https://assets.zeezest.com/images/PROD_sandakphu_1704901003293_thumb_800.jpeg"
    },
    {
      id: 9,
      name: t('destinationSlider.hiddenGems.kalimpong.name'),
      path: "/kalimpong",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdVie8VtqkTsECR-K1zIU6qt5s885qVYAezA&s"
    },
  ];

  const trendingDestinations = [
    {
      id: 7,
      name: t('destinationSlider.trending.purulia.name'),
      path: "/purulia",
      image: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/18073726/Purulia5.png"
    },
    {
      id: 8,
      name: t('destinationSlider.trending.kashmir.name'),
      path: "/kashmir",
      image: "https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407-scaled.jpg"
    },
    {
      id: 9,
      name: t('destinationSlider.trending.delhi.name'),
      path: "/delhi",
      image: "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
    },
    {
      id: 10,
      name: t('destinationSlider.trending.paris.name'),
      path: "/paris",
      image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 11,
      name: t('destinationSlider.trending.kerala.name'),
      path: "/kerala",
      image: "https://tse4.mm.bing.net/th?id=OIP.1LmC3AubOyv1mN-FzKU7BAHaE8&pid=Api&P=0&h=180"
    },
    {
      id: 12,
      name: t('destinationSlider.trending.andaman.name'),
      path: "/andaman",
      image: "https://tse4.mm.bing.net/th?id=OIP.Vo6dXy0kKreXtnbsnzNeagHaEL&pid=Api&P=0&h=180"
    }
  ];

  const createInfiniteArray = (arr) => [...arr, ...arr, ...arr];
  const infiniteHiddenGems = createInfiniteArray(hiddenGems);
  const infiniteTrendingDestinations = createInfiniteArray(trendingDestinations);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => setHiddenGemsIndex(prev => prev + 1), 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => setTrendingIndex(prev => prev + 1), 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  useEffect(() => {
    if (hiddenGemsIndex >= hiddenGems.length) {
      setIsTransitioning(false);
      setHiddenGemsIndex(0);
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [hiddenGemsIndex, hiddenGems.length]);

  useEffect(() => {
    if (trendingIndex >= trendingDestinations.length) {
      setIsTransitioning(false);
      setTrendingIndex(0);
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [trendingIndex, trendingDestinations.length]);

  const nextHiddenGemsSlide = () => setHiddenGemsIndex(prev => prev + 1);
  const prevHiddenGemsSlide = () => {
    if (hiddenGemsIndex === 0) {
      setIsTransitioning(false);
      setHiddenGemsIndex(hiddenGems.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setHiddenGemsIndex(hiddenGems.length - 1);
      }, 50);
    } else {
      setHiddenGemsIndex(prev => prev - 1);
    }
  };

  const nextTrendingSlide = () => setTrendingIndex(prev => prev + 1);
  const prevTrendingSlide = () => {
    if (trendingIndex === 0) {
      setIsTransitioning(false);
      setTrendingIndex(trendingDestinations.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setTrendingIndex(trendingDestinations.length - 1);
      }, 50);
    } else {
      setTrendingIndex(prev => prev - 1);
    }
  };

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const renderSlider = (items, index, next, prev, titleKey) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 font-serif">{t(titleKey)}</h2>
      <div className="relative overflow-hidden">
        <div
          className={`flex gap-8 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${index * 300}px)` }}
        >
          {items.map((destination, i) => (
            <div
              key={`${destination.id}-${i}`}
              className="flex-shrink-0 w-72 group cursor-pointer"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => handleCardClick(destination.path)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 ease-out hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-1 font-sans">{destination.name}</h3>
                  <p className="text-gray-600 text-sm">{t('destinationSlider.defaultDescription')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/90 shadow-md rounded-full p-2 hover:bg-white transition-all duration-200 z-10 border border-gray-200 hover:shadow-lg"
          aria-label={t('destinationSlider.previousButton')}
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/90 shadow-md rounded-full p-2 hover:bg-white transition-all duration-200 z-10 border border-gray-200 hover:shadow-lg"
          aria-label={t('destinationSlider.nextButton')}
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {renderSlider(infiniteHiddenGems, hiddenGemsIndex, nextHiddenGemsSlide, prevHiddenGemsSlide, "destinationSlider.hiddenGemsTitle")}
        {renderSlider(infiniteTrendingDestinations, trendingIndex, nextTrendingSlide, prevTrendingSlide, "destinationSlider.trendingTitle")}
      </div>
    </div>
  );
};

export default DestinationSlider;