import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // your English translations go here
          herosec: {
            heroTitle: "Discover Your Next Adventure",
            heroSubtitle:
              "Unforgettable journeys start here. Explore breathtaking destinations around the world.",
            explore: "Explore Now",
          },
          navbar: {
            logoText: "Voyager",
            menuToggle: "Toggle menu",
            searchPlaceholder: "Search places...",
            searchButton: "Search",
            login: "Login",
            register: "Register",
            profileButton: "Open profile",
            profileImageAlt: "User profile",
            closeMenu: "Close menu",
            sidebarItems: {
              home: "Home",
              weather: "Weather",
              map: "Map",
              booking: "Booking",
              community: "Community",
              emergency: "Emergency",
              contact: "Contact",
            },
          },
          destinationSlider: {
            hiddenGemsTitle: "Hidden Gems of India",
            trendingTitle: "Trending Destinations",
            previousButton: "Previous",
            nextButton: "Next",
            defaultDescription: "Beautiful Destination",
            hiddenGems: {
              bishnupur: { name: "Bishnupur" },
              doars: { name: "Doars" },
              jhargram: { name: "Jhargram" },
              kankrajhor: { name: "Kankrajhor" },
              ayodhaPahar: { name: "Ayodha Pahar" },
              jaldapara: { name: "Jaldapara National Park" },
              sandakhpu: { name: "Sandakhpu" },
              kalimpong: { name: "Kalimpong" },
            },
            trending: {
              purulia: { name: "Purulia" },
              kashmir: { name: "Kashmir" },
              delhi: { name: "Delhi" },
              paris: { name: "Paris" },
              kerala: { name: "Kerala" },
              andaman: { name: "Andaman" },
            },
          },
          community: {
            title: "Travel Community",
            subtitle:
              "Share your adventures, discover hidden gems, and connect with fellow travelers",
            tabs: {
              feed: "Community Feed",
              share: "Share Experience",
            },
            filters: {
              title: "Filters",
              searchPlaceholder: "Search posts...",
              categories: "Categories",
              allPosts: "All Posts",
              popularTags: "Popular Tags",
            },
            categories: {
              all: "all",
              beach: "Beach",
              adventure: "Adventure",
              heritage: "Heritage",
              hillStation: "Hill Station",
              wildlife: "Wildlife",
              spiritual: "Spiritual",
            },
            tags: {
              beach: "beach",
              hiddenGems: "hidden-gems",
              seafood: "seafood",
              sunset: "sunset",
              soloTravel: "solo-travel",
              adventure: "adventure",
              mountains: "mountains",
              biking: "biking",
              heritage: "heritage",
              culture: "culture",
              familyTrip: "family-trip",
              palaces: "palaces",
              budgetTravel: "budget-travel",
            },
            timeAgo: {
              days: "{{count}} days ago",
              week: "{{count}} week ago",
              weeks: "{{count}} weeks ago",
            },
            noPosts: {
              title: "No posts found",
              message:
                "Try adjusting your search or filters to find more travel experiences.",
            },
            posts: {
              sarah: {
                name: "Sarah Johnson",
                location: "Mumbai, India",
                destination: "Goa, India",
                title: "Hidden Beaches of South Goa - A Paradise Found!",
                content:
                  "Just returned from an incredible 5-day trip to South Goa. Discovered some amazing hidden beaches that are not crowded with tourists. Butterfly Beach was absolutely stunning during sunset! The local seafood at the beach shacks was phenomenal. Highly recommend staying at Palolem for a peaceful experience.",
              },
              raj: {
                name: "Raj Patel",
                location: "Delhi, India",
                destination: "Ladakh, India",
                title: "Solo Adventure in Ladakh - Life Changing Experience",
                content:
                  "Completed my solo bike trip to Ladakh last month. The journey through Manali-Leh highway was challenging but absolutely worth it. Met incredible people, witnessed breathtaking landscapes, and pushed my limits. The monasteries in Leh are peaceful and offer great insights into Buddhist culture.",
              },
              priya: {
                name: "Priya Sharma",
                location: "Bangalore, India",
                destination: "Rajasthan, India",
                title: "Royal Heritage Tour - Palaces and Culture",
                content:
                  "Explored the royal heritage of Rajasthan with my family. Visited Jaipur, Udaipur, and Jodhpur. The architecture is mind-blowing and the hospitality is unmatched. Don't miss the puppet shows and traditional Rajasthani cuisine. The City Palace in Udaipur is a must-visit!",
              },
            },
          },

          weather: {
            title: "Weather Comparison App",
            singleCity: "🌍 Single City",
            compareCities: "🌎 Compare Cities",
            enterCity: "Enter city name",
            checkWeather: "Check Weather",
            compare: "Compare",
            loading: "Loading...",
            cityNotFound: "City not found",
            forecastUnavailable: "Forecast data unavailable",
            enterBothCities: "Please enter both city names",
            currentWeather: "Current Weather",
            feelsLike: "Feels Like",
            humidity: "Humidity",
            wind: "Wind",
            pressure: "Pressure",
            fiveDayForecast: "5-Day Forecast",
            seasonalOutlook: "🌤 Seasonal Outlook",
            travelRecommendations: "✈️ Travel Recommendations",
            packingSuggestions: "🧳 Packing Suggestions",
            bestTimeToVisit: "📅 Best Time to Visit",
            comparisonSummary: "✈️ Travel Comparison Summary",
            temperaturesSimilar:
              "🌡 Temperatures are quite similar in both cities right now",
            warmerThan:
              "🌡 {{city1}} is {{diff}}°C warmer than {{city2}} currently",
            seasonalComparison:
              "📅 {{city1}} is in {{season1}}, while {{city2}} is in {{season2}}",
            preferWarmer:
              "✈️ If you prefer warmer weather, {{city}} would be better right now",
            preferCooler:
              "✈️ If you prefer cooler weather, {{city}} would be better right now",
            outlook: "🌤 Currently in {{season}}: {{description}}",
            nextMonths: "Next 2 months: {{description}}",
            weatherData: "Weather data provided by OpenWeatherMap",
            seasonalEstimates:
              "Seasonal predictions are estimates based on hemisphere location",
            packingItems: {
              heavyCoat: "🧥 Heavy winter coat",
              scarfGloves: "🧣 Scarf and gloves",
              thermalUnderwear: "🧦 Thermal underwear",
              waterproofBoots: "🥾 Waterproof boots",
              warmJacket: "🧥 Warm jacket",
              layeredClothing: "🧥 Layered clothing",
              lightScarf: "🧣 Light scarf",
              longPants: "👖 Long pants",
              lightJacket: "👕 Light jacket or sweater",
              tshirts: "👚 T-shirts",
              comfortablePants: "👖 Comfortable pants",
              walkingShoes: "👟 Walking shoes",
              lightweightClothing: "👕 Lightweight clothing",
              shorts: "🩳 Shorts and t-shirts",
              sunHat: "🧢 Sun hat",
              sunscreen: "🧴 Sunscreen",
              sunglasses: "🕶 Sunglasses",
            },
            seasons: {
              spring: "Spring",
              summer: "Summer",
              autumn: "Autumn",
              winter: "Winter",
            },
            weatherConditions: {
              warm: "Warm temperatures (avg {{temp}}°C)",
              coolingToAutumn:
                "Cooling down to autumn (expect {{min}} to {{max}}°C)",
              transitionToWinter:
                "Transition to winter (expect {{min}} to {{max}}°C)",
              cold: "Cold temperatures (avg {{temp}}°C)",
              warmingToSpring:
                "Warming up to spring (expect {{min}} to {{max}}°C)",
              transitionToSummer:
                "Transition to summer (expect {{min}} to {{max}}°C)",
              mild: "Mild temperatures (avg {{temp}}°C)",
              warmingToSummer:
                "Warming to summer (expect {{min}} to {{max}}°C)",
              coolingToWinter:
                "Cooling to winter (expect {{min}} to {{max}}°C)",
            },
          },
          emergency: {
            title: "Emergency Assistance",
            findingLocation: "Finding your precise location...",
            yourLocation: "Your Current Location",
            locationCoordinatesOnly: "Location coordinates only",
            coordinates: "Coordinates: {lat}, {lng}",
            openInMaps: "Open in Google Maps",
            nearestHospitals: "Nearest Hospitals",
            nearestPolice: "Nearest Police Stations",
            distanceAway: "{distance} km away",
            whatsappHelp: "WhatsApp for Help",
            noHospitalsFound: "No hospitals found in database",
            noPoliceFound: "No police stations found in database",
            retryLocation: "Retry Location",
            whatsappMessage:
              "Emergency! I need help at this location: https://www.google.com/maps?q={lat},{lng}",
            errors: {
              geolocationNotSupported:
                "Geolocation is not supported by this browser.",
              permissionDenied:
                "Location access was denied. Please enable location services.",
              positionUnavailable: "Location information is unavailable.",
              timeout: "The request to get location timed out.",
              unknown: "An unknown error occurred while getting location.",
              noAddressData: "No address data received",
              addressFetchFailed:
                "Failed to fetch address details. Using coordinates only.",
              nearbyFacilities: "Error loading nearby facilities",
              invalidPhone: "Invalid phone number",
            },
          },
          footer: {
            brandName: "Voyager",
            tagline: "Your ultimate travel companion for seamless journeys.",
            phone: "+91 8292986414",
            email: "support@voyager.com",
            address: "Kolkata, India",
            aboutUs: {
              title: "About Us",
              ourStory: "Our Story",
              team: "Team",
              careers: "Careers",
              press: "Press",
            },
            support: {
              title: "Support",
              faqs: "FAQs",
              contact: "Contact",
              privacyPolicy: "Privacy Policy",
              terms: "Terms",
            },
            resources: {
              title: "Resources",
              blog: "Blog",
              guides: "Guides",
              webinars: "Webinars",
              helpCenter: "Help Center",
            },
            newsletter: {
              title: "Newsletter",
              description: "Subscribe to get travel tips and exclusive offers.",
              placeholder: "Your email address",
              subscribeButton: "Subscribe",
            },
            copyright: "© {{year}} Voyager. All rights reserved.",
            privacyPolicyLink: "Privacy Policy",
            termsOfServiceLink: "Terms of Service",
            cookiesLink: "Cookies",
          },
        },
      },
      hi: {
        translation: {
          // your Hindi translations go here
          herosec: {
            heroTitle: "अपना अगला साहसिक कार्य खोजें",
            heroSubtitle:
              "अविस्मरणीय यात्राएँ यहाँ से शुरू होती हैं। दुनिया भर के अद्भुत स्थलों की खोज करें।",
            explore: "अब खोजें",
          },
          navbar: {
            logoText: "वायेजर",
            menuToggle: "मेनू टॉगल करें",
            searchPlaceholder: "स्थान खोजें...",
            searchButton: "खोजें",
            login: "लॉग इन",
            register: "रजिस्टर",
            profileButton: "प्रोफ़ाइल खोलें",
            profileImageAlt: "उपयोगकर्ता प्रोफ़ाइल",
            closeMenu: "मेनू बंद करें",
            sidebarItems: {
              home: "होम",
              weather: "मौसम",
              map: "नक्शा",
              booking: "बुकिंग",
              community: "समुदाय",
              emergency: "आपातकाल",
              contact: "संपर्क",
            },
          },
          destinationSlider: {
            hiddenGemsTitle: "भारत के छुपे हुए रत्न",
            trendingTitle: "लोकप्रिय स्थान",
            previousButton: "पिछला",
            nextButton: "अगला",
            defaultDescription: "सुंदर स्थान",
            hiddenGems: {
              bishnupur: { name: "बिष्णुपुर" },
              doars: { name: "डुआर्स" },
              jhargram: { name: "झाड़ग्राम" },
              kankrajhor: { name: "कांकराजहोर" },
              ayodhaPahar: { name: "अयोध्या पहाड़" },
              jaldapara: { name: "जलदापारा राष्ट्रीय उद्यान" },
              sandakhpu: { name: "सन्दक्फू" },
              kalimpong: { name: "कालिम्पोंग" },
            },
            trending: {
              purulia: { name: "पुरुलिया" },
              kashmir: { name: "कश्मीर" },
              delhi: { name: "दिल्ली" },
              paris: { name: "पेरिस" },
              kerala: { name: "केरल" },
              andaman: { name: "अंडमान" },
            },
          },
          community: {
            title: "यात्रा समुदाय",
            subtitle:
              "अपने रोमांच साझा करें, छिपे हुए रत्नों की खोज करें और अन्य यात्रियों से जुड़ें",
            tabs: {
              feed: "समुदाय फीड",
              share: "अनुभव साझा करें",
            },
            filters: {
              title: "फिल्टर",
              searchPlaceholder: "पोस्ट खोजें...",
              categories: "श्रेणियाँ",
              allPosts: "सभी पोस्ट",
              popularTags: "लोकप्रिय टैग",
            },
            categories: {
              all: "सभी",
              beach: "समुद्र तट",
              adventure: "साहसिक",
              heritage: "विरासत",
              hillStation: "हिल स्टेशन",
              wildlife: "वन्यजीव",
              spiritual: "आध्यात्मिक",
            },
            tags: {
              beach: "समुद्र-तट",
              hiddenGems: "छिपे-रत्न",
              seafood: "समुद्री-भोजन",
              sunset: "सूर्यास्त",
              soloTravel: "एकल-यात्रा",
              adventure: "साहसिक",
              mountains: "पहाड़",
              biking: "बाइकिंग",
              heritage: "विरासत",
              culture: "संस्कृति",
              familyTrip: "परिवार-यात्रा",
              palaces: "महल",
              budgetTravel: "कम-खर्चीली-यात्रा",
            },
            timeAgo: {
              days: "{{count}} दिन पहले",
              week: "{{count}} सप्ताह पहले",
              weeks: "{{count}} सप्ताह पहले",
            },
            noPosts: {
              title: "कोई पोस्ट नहीं मिली",
              message:
                "अधिक यात्रा अनुभव खोजने के लिए अपनी खोज या फिल्टर समायोजित करें।",
            },
            posts: {
              sarah: {
                name: "सारा जॉनसन",
                location: "मुंबई, भारत",
                destination: "गोवा, भारत",
                title: "दक्षिण गोवा के छिपे हुए समुद्र तट - एक स्वर्ग की खोज!",
                content:
                  "दक्षिण गोवा की अविश्वसनीय 5-दिवसीय यात्रा से लौटी। कुछ अद्भुत छिपे हुए समुद्र तटों की खोज की जो पर्यटकों से भरे नहीं हैं। सूर्यास्त के समय बटरफ्लाई बीच बिल्कुल आश्चर्यजनक था! समुद्र तट के झोंपड़ों पर स्थानीय समुद्री भोजन अद्भुत था। शांतिपूर्ण अनुभव के लिए पालोलेम में रहने की अत्यधिक सलाह देते हैं।",
              },
              raj: {
                name: "राज पटेल",
                location: "दिल्ली, भारत",
                destination: "लद्दाख, भारत",
                title: "लद्दाख में एकल साहसिक यात्रा - जीवन बदलने वाला अनुभव",
                content:
                  "पिछले महीने लद्दाख की अपनी एकल बाइक यात्रा पूरी की। मनाली-लेह राजमार्ग के माध्यम से यात्रा चुनौतीपूर्ण थी लेकिन बिल्कुल सार्थक थी। अविश्वसनीय लोगों से मिले, लुभावने परिदृश्य देखे और अपनी सीमाओं को पार किया। लेह में मठ शांतिपूर्ण हैं और बौद्ध संस्कृति में महान अंतर्दृष्टि प्रदान करते हैं।",
              },
              priya: {
                name: "प्रिया शर्मा",
                location: "बैंगलोर, भारत",
                destination: "राजस्थान, भारत",
                title: "शाही विरासत यात्रा - महल और संस्कृति",
                content:
                  "अपने परिवार के साथ राजस्थान की शाही विरासत का पता लगाया। जयपुर, उदयपुर और जोधपुर का दौरा किया। वास्तुकला मनमोहक है और आतिथ्य अतुलनीय है। कठपुतली शो और पारंपरिक राजस्थानी व्यंजनों को न चूकें। उदयपुर का सिटी पैलेस अवश्य देखें!",
              },
            },
          },

          weather: {
            title: "मौसम तुलना ऐप",
            singleCity: "🌍 एकल शहर",
            compareCities: "🌎 शहरों की तुलना करें",
            enterCity: "शहर का नाम दर्ज करें",
            checkWeather: "मौसम जांचें",
            compare: "तुलना करें",
            loading: "लोड हो रहा है...",
            cityNotFound: "शहर नहीं मिला",
            forecastUnavailable: "पूर्वानुमान डेटा उपलब्ध नहीं",
            enterBothCities: "कृपया दोनों शहरों के नाम दर्ज करें",
            currentWeather: "वर्तमान मौसम",
            feelsLike: "अनुभूत तापमान",
            humidity: "नमी",
            wind: "हवा",
            pressure: "दबाव",
            fiveDayForecast: "5-दिन का पूर्वानुमान",
            seasonalOutlook: "🌤 मौसमी दृष्टिकोण",
            travelRecommendations: "✈️ यात्रा सिफारिशें",
            packingSuggestions: "🧳 पैकिंग सुझाव",
            bestTimeToVisit: "📅 यात्रा का सर्वोत्तम समय",
            comparisonSummary: "✈️ यात्रा तुलना सारांश",
            temperaturesSimilar: "🌡 दोनों शहरों में अभी तापमान काफी समान है",
            warmerThan: "🌡 {{city1}} अभी {{city2}} से {{diff}}°C गर्म है",
            seasonalComparison:
              "📅 {{city1}} में {{season1}} है, जबकि {{city2}} में {{season2}} है",
            preferWarmer:
              "✈️ यदि आप गर्म मौसम पसंद करते हैं, तो {{city}} अभी बेहतर होगा",
            preferCooler:
              "✈️ यदि आप ठंडा मौसम पसंद करते हैं, तो {{city}} अभी बेहतर होगा",
            outlook: "🌤 वर्तमान में {{season}} में: {{description}}",
            nextMonths: "अगले 2 महीने: {{description}}",
            weatherData: "मौसम डेटा OpenWeatherMap द्वारा प्रदान किया गया",
            seasonalEstimates:
              "मौसमी भविष्यवाणियाँ गोलार्ध स्थान के आधार पर अनुमान हैं",
            packingItems: {
              heavyCoat: "🧥 भारी शीतकालीन कोट",
              scarfGloves: "🧣 स्कार्फ और दस्ताने",
              thermalUnderwear: "🧦 थर्मल अंडरवियर",
              waterproofBoots: "🥾 वाटरप्रूफ बूट",
              warmJacket: "🧥 गर्म जैकेट",
              layeredClothing: "🧥 परतदार कपड़े",
              lightScarf: "🧣 हल्का स्कार्फ",
              longPants: "👖 लंबी पैंट",
              lightJacket: "👕 हल्का जैकेट या स्वेटर",
              tshirts: "👚 टी-शर्ट",
              comfortablePants: "👖 आरामदायक पैंट",
              walkingShoes: "👟 चलने के जूते",
              lightweightClothing: "👕 हल्के कपड़े",
              shorts: "🩳 शॉर्ट्स और टी-शर्ट",
              sunHat: "🧢 धूप की टोपी",
              sunscreen: "🧴 सनस्क्रीन",
              sunglasses: "🕶 धूप के चश्मे",
            },
            seasons: {
              spring: "वसंत",
              summer: "गर्मी",
              autumn: "पतझड़",
              winter: "सर्दी",
            },
            weatherConditions: {
              warm: "गर्म तापमान (औसत {{temp}}°C)",
              coolingToAutumn:
                "पतझड़ के लिए ठंडा होना ({{min}} से {{max}}°C की उम्मीद)",
              transitionToWinter:
                "सर्दी में परिवर्तन ({{min}} से {{max}}°C की उम्मीद)",
              cold: "ठंडा तापमान (औसत {{temp}}°C)",
              warmingToSpring:
                "वसंत के लिए गर्म होना ({{min}} से {{max}}°C की उम्मीद)",
              transitionToSummer:
                "गर्मी में परिवर्तन ({{min}} से {{max}}°C की उम्मीद)",
              mild: "हल्का तापमान (औसत {{temp}}°C)",
              warmingToSummer:
                "गर्मी के लिए गर्म होना ({{min}} से {{max}}°C की उम्मीद)",
              coolingToWinter:
                "सर्दी के लिए ठंडा होना ({{min}} से {{max}}°C की उम्मीद)",
            },
          },
          emergency: {
            title: "आपातकालीन सहायता",
            findingLocation: "आपका सटीक स्थान ढूंढा जा रहा है...",
            yourLocation: "आपका वर्तमान स्थान",
            locationCoordinatesOnly: "केवल स्थान निर्देशांक",
            coordinates: "निर्देशांक: {lat}, {lng}",
            openInMaps: "गूगल मैप्स में खोलें",
            nearestHospitals: "निकटतम अस्पताल",
            nearestPolice: "निकटतम पुलिस स्टेशन",
            distanceAway: "{distance} किमी दूर",
            whatsappHelp: "व्हाट्सएप पर मदद लें",
            noHospitalsFound: "डेटाबेस में कोई अस्पताल नहीं मिला",
            noPoliceFound: "डेटाबेस में कोई पुलिस स्टेशन नहीं मिला",
            retryLocation: "स्थान पुनः प्राप्त करें",
            whatsappMessage:
              "आपातकाल! मुझे इस स्थान पर सहायता चाहिए: https://www.google.com/maps?q={lat},{lng}",
            errors: {
              geolocationNotSupported:
                "इस ब्राउज़र द्वारा जियोलोकेशन समर्थित नहीं है।",
              permissionDenied:
                "स्थान पहुंच अस्वीकृत की गई। कृपया लोकेशन सेवाएं सक्षम करें।",
              positionUnavailable: "स्थान जानकारी उपलब्ध नहीं है।",
              timeout: "स्थान प्राप्त करने का अनुरोध समय समाप्त हो गया।",
              unknown: "स्थान प्राप्त करते समय एक अज्ञात त्रुटि हुई।",
              noAddressData: "कोई पता डेटा प्राप्त नहीं हुआ",
              addressFetchFailed:
                "पता विवरण प्राप्त करने में विफल। केवल निर्देशांक का उपयोग कर रहे हैं।",
              nearbyFacilities: "निकटवर्ती सुविधाएं लोड करने में त्रुटि",
              invalidPhone: "अमान्य फोन नंबर",
            },
          },
          footer: {
            brandName: "यात्री", // Voyager
            tagline: "आपकी सहज यात्राओं के लिए आपका परम यात्रा साथी।", // Your ultimate travel companion for seamless journeys.
            phone: "+91 8292986414",
            email: "support@voyager.com",
            address: "कोलकाता, भारत", // Kolkata, India
            aboutUs: {
              title: "हमारे बारे में", // About Us
              ourStory: "हमारी कहानी", // Our Story
              team: "टीम", // Team
              careers: "करियर", // Careers
              press: "प्रेस", // Press
            },
            support: {
              title: "समर्थन", // Support
              faqs: "अक्सर पूछे जाने वाले प्रश्न", // FAQs
              contact: "संपर्क करें", // Contact
              privacyPolicy: "गोपनीयता नीति", // Privacy Policy
              terms: "शर्तें", // Terms
            },
            resources: {
              title: "संसाधन", // Resources
              blog: "ब्लॉग", // Blog
              guides: "गाइड", // Guides
              webinars: "वेबिनार", // Webinars
              helpCenter: "सहायता केंद्र", // Help Center
            },
            newsletter: {
              title: "न्यूज़लेटर", // Newsletter
              description:
                "यात्रा युक्तियाँ और विशेष ऑफ़र प्राप्त करने के लिए सदस्यता लें।", // Subscribe to get travel tips and exclusive offers.
              placeholder: "आपका ईमेल पता", // Your email address
              subscribeButton: "सदस्यता लें", // Subscribe
            },
            copyright: "© {{year}} यात्री। सर्वाधिकार सुरक्षित।", // © {{year}} Voyager. All rights reserved.
            privacyPolicyLink: "गोपनीयता नीति", // Privacy Policy
            termsOfServiceLink: "सेवा की शर्तें", // Terms of Service
            cookiesLink: "कुकीज़", // Cookies
          },
        },
      },
      bn: {
        translation: {
          // your Bengali translations go here
          herosec: {
            heroTitle: "আপনার পরবর্তী অ্যাডভেঞ্চার খুঁজুন",
            heroSubtitle:
              "অবিস্মরণীয় যাত্রা এখানেই শুরু হয়। সারা বিশ্বের শ্বাসরুদ্ধকর গন্তব্য আবিষ্কার করুন।",
            explore: "এখন ঘুরে দেখুন",
          },
          navbar: {
            logoText: "ভয়েজার",
            menuToggle: "মেনু টগল করুন",
            searchPlaceholder: "স্থান খুঁজুন...",
            searchButton: "খুঁজুন",
            login: "লগইন",
            register: "নিবন্ধন",
            profileButton: "প্রোফাইল খুলুন",
            profileImageAlt: "ব্যবহারকারীর প্রোফাইল",
            closeMenu: "মেনু বন্ধ করুন",
            sidebarItems: {
              home: "হোম",
              weather: "আবহাওয়া",
              map: "মানচিত্র",
              booking: "বুকিং",
              community: "সম্প্রদায়",
              emergency: "জরুরী",
              contact: "যোগাযোগ",
            },
          },
          destinationSlider: {
            hiddenGemsTitle: "ভারতের লুকানো রত্ন",
            trendingTitle: "জনপ্রিয় গন্তব্য",
            previousButton: "পূর্ববর্তী",
            nextButton: "পরবর্তী",
            defaultDescription: "সুন্দর গন্তব্য",
            hiddenGems: {
              bishnupur: { name: "বিষ্ণুপুর" },
              doars: { name: "ডুয়ার্স" },
              jhargram: { name: "ঝাড়গ্রাম" },
              kankrajhor: { name: "কাঁকরাজহর" },
              ayodhaPahar: { name: "অযোধ্যা পাহাড়" },
              jaldapara: { name: "জলদাপাড়া জাতীয় উদ্যান" },
              sandakhpu: { name: "সন্দাকফু" },
              kalimpong: { name: "কালিম্পং" },
            },
            trending: {
              purulia: { name: "পুরুলিয়া" },
              kashmir: { name: "কাশ্মীর" },
              delhi: { name: "দিল্লি" },
              paris: { name: "প্যারিস" },
              kerala: { name: "কেরালা" },
              andaman: { name: "আন্দামান" },
            },
          },
          community: {
            title: "ভ্রমণ সম্প্রদায়",
            subtitle:
              "আপনার অ্যাডভেঞ্চার শেয়ার করুন, লুকানো রত্ন আবিষ্কার করুন এবং সহযাত্রীদের সাথে সংযোগ করুন",
            tabs: {
              feed: "সম্প্রদায় ফিড",
              share: "অভিজ্ঞতা শেয়ার করুন",
            },
            filters: {
              title: "ফিল্টার",
              searchPlaceholder: "পোস্ট খুঁজুন...",
              categories: "বিভাগ",
              allPosts: "সমস্ত পোস্ট",
              popularTags: "জনপ্রিয় ট্যাগ",
            },
            categories: {
              all: "সব",
              beach: "সৈকত",
              adventure: "অ্যাডভেঞ্চার",
              heritage: "ঐতিহ্য",
              hillStation: "পাহাড়ি স্টেশন",
              wildlife: "বন্যপ্রাণী",
              spiritual: "আধ্যাত্মিক",
            },
            tags: {
              beach: "সৈকত",
              hiddenGems: "লুকানো-রত্ন",
              seafood: "সামুদ্রিক-খাবার",
              sunset: "সূর্যাস্ত",
              soloTravel: "একক-ভ্রমণ",
              adventure: "অ্যাডভেঞ্চার",
              mountains: "পাহাড়",
              biking: "বাইকিং",
              heritage: "ঐতিহ্য",
              culture: "সংস্কৃতি",
              familyTrip: "পরিবার-ভ্রমণ",
              palaces: "প্রাসাদ",
              budgetTravel: "সাশ্রয়ী-ভ্রমণ",
            },
            timeAgo: {
              days: "{{count}} দিন আগে",
              week: "{{count}} সপ্তাহ আগে",
              weeks: "{{count}} সপ্তাহ আগে",
            },
            noPosts: {
              title: "কোনো পোস্ট পাওয়া যায়নি",
              message:
                "আরও ভ্রমণের অভিজ্ঞতা খুঁজে পেতে আপনার অনুসন্ধান বা ফিল্টার সামঞ্জস্য করুন।",
            },
            posts: {
              sarah: {
                name: "সারা জনসন",
                location: "মুম্বাই, ভারত",
                destination: "গোয়া, ভারত",
                title: "দক্ষিণ গোয়ার লুকানো সৈকত - একটি স্বর্গের সন্ধান!",
                content:
                  "দক্ষিণ গোয়ার একটি অবিশ্বাস্য 5-দিনের ট্রিপ থেকে ফিরেছি। কিছু আশ্চর্যজনক লুকানো সৈকত আবিষ্কার করেছি যা পর্যটকদের সাথে ভরা নয়। সূর্যাস্তের সময় বাটারফ্লাই বিচ একেবারে চমৎকার ছিল! বিচের শ্যাকগুলিতে স্থানীয় সামুদ্রিক খাবার অসাধারণ ছিল। শান্তিপূর্ণ অভিজ্ঞতার জন্য পালোলেমে থাকার অত্যন্ত সুপারিশ করছি।",
              },
              raj: {
                name: "রাজ প্যাটেল",
                location: "দিল্লি, ভারত",
                destination: "লাদাখ, ভারত",
                title: "লাদাখে একা অ্যাডভেঞ্চার - জীবন পরিবর্তনকারী অভিজ্ঞতা",
                content:
                  "গত মাসে লাদাখে আমার একা বাইক ট্রিপ সম্পন্ন করেছি। মানালি-লেহ হাইওয়েতে যাত্রা চ্যালেঞ্জিং ছিল কিন্তু একেবারে মূল্যবান ছিল। অবিশ্বাস্য মানুষদের সাথে দেখা হয়েছে, মনোমুগ্ধকর ল্যান্ডস্কেপ দেখেছি এবং আমার সীমা অতিক্রম করেছি। লেহের মঠগুলি শান্তিপূর্ণ এবং বৌদ্ধ সংস্কৃতিতে দুর্দান্ত অন্তর্দৃষ্টি প্রদান করে।",
              },
              priya: {
                name: "প্রিয়া শর্মা",
                location: "বেঙ্গালুরু, ভারত",
                destination: "রাজস্থান, ভারত",
                title: "রাজকীয় ঐতিহ্য ট্যুর - প্রাসাদ এবং সংস্কৃতি",
                content:
                  "আমার পরিবারের সাথে রাজস্থানের রাজকীয় ঐতিহ্য অন্বেষণ করেছি। জয়পুর, উদয়পুর এবং জোধপুর পরিদর্শন করেছি। স্থাপত্য মনের মতো এবং আতিথেয়তা অতুলনীয়। পুতুল শো এবং ঐতিহ্যবাহী রাজস্থানি খাবার মিস করবেন না। উদয়পুরের সিটি প্যালেস অবশ্যই দেখার মতো!",
              },
            },
          },

          weather: {
            title: "আবহাওয়া তুলনা অ্যাপ",
            singleCity: "🌍 একক শহর",
            compareCities: "🌎 শহর তুলনা করুন",
            enterCity: "শহরের নাম লিখুন",
            checkWeather: "আবহাওয়া পরীক্ষা করুন",
            compare: "তুলনা করুন",
            loading: "লোড হচ্ছে...",
            cityNotFound: "শহর পাওয়া যায়নি",
            forecastUnavailable: "পূর্বাভাস ডেটা অনুপলব্ধ",
            enterBothCities: "দয়া করে উভয় শহরের নাম লিখুন",
            currentWeather: "বর্তমান আবহাওয়া",
            feelsLike: "অনুভূত তাপমাত্রা",
            humidity: "আর্দ্রতা",
            wind: "বাতাস",
            pressure: "চাপ",
            fiveDayForecast: "৫-দিনের পূর্বাভাস",
            seasonalOutlook: "🌤 মৌসুমী পূর্বাভাস",
            travelRecommendations: "✈️ ভ্রমণের সুপারিশ",
            packingSuggestions: "🧳 প্যাকিং পরামর্শ",
            bestTimeToVisit: "📅 ভ্রমণের সেরা সময়",
            comparisonSummary: "✈️ ভ্রমণ তুলনা সারাংশ",
            temperaturesSimilar: "🌡 উভয় শহরে তাপমাত্রা বর্তমানে বেশ একই রকম",
            warmerThan:
              "🌡 {{city1}} বর্তমানে {{city2}} এর চেয়ে {{diff}}°C উষ্ণতর",
            seasonalComparison:
              "📅 {{city1}} এ {{season1}}, অন্যদিকে {{city2}} এ {{season2}}",
            preferWarmer:
              "✈️ আপনি যদি উষ্ণ আবহাওয়া পছন্দ করেন, {{city}} এখনই ভালো হবে",
            preferCooler:
              "✈️ আপনি যদি শীতল আবহাওয়া পছন্দ করেন, {{city}} এখনই ভালো হবে",
            outlook: "🌤 বর্তমানে {{season}}: {{description}}",
            nextMonths: "পরবর্তী ২ মাস: {{description}}",
            weatherData:
              "আবহাওয়া ডেটা OpenWeatherMap দ্বারা প্রদান করা হয়েছে",
            seasonalEstimates:
              "মৌসুমী পূর্বাভাসগুলি গোলার্ধ অবস্থানের উপর ভিত্তি করে অনুমান",
            packingItems: {
              heavyCoat: "🧥 ভারী শীতকালীন কোট",
              scarfGloves: "🧣 স্কার্ফ এবং গ্লাভস",
              thermalUnderwear: "🧦 তাপীয় আন্ডারওয়্যার",
              waterproofBoots: "🥾 জলরোধী বুট",
              warmJacket: "🧥 উষ্ণ জ্যাকেট",
              layeredClothing: "🧥 স্তরযুক্ত পোশাক",
              lightScarf: "🧣 হালকা স্কার্ফ",
              longPants: "👖 লম্বা প্যান্ট",
              lightJacket: "👕 হালকা জ্যাকেট বা সোয়েটার",
              tshirts: "👚 টি-শার্ট",
              comfortablePants: "👖 আরামদায়ক প্যান্ট",
              walkingShoes: "👟 হাঁটার জুতা",
              lightweightClothing: "👕 হালকা পোশাক",
              shorts: "🩳 শর্টস এবং টি-শার্ট",
              sunHat: "🧢 সান হ্যাট",
              sunscreen: "🧴 সানস্ক্রিন",
              sunglasses: "🕶 সানগ্লাস",
            },
            seasons: {
              spring: "বসন্ত",
              summer: "গ্রীষ্ম",
              autumn: "শরৎ",
              winter: "শীত",
            },
            weatherConditions: {
              warm: "উষ্ণ তাপমাত্রা (গড় {{temp}}°C)",
              coolingToAutumn:
                "শরতের দিকে ঠাণ্ডা হচ্ছে ({{min}} থেকে {{max}}°C আশা করুন)",
              transitionToWinter:
                "শীতের দিকে রূপান্তর ({{min}} থেকে {{max}}°C আশা করুন)",
              cold: "ঠাণ্ডা তাপমাত্রা (গড় {{temp}}°C)",
              warmingToSpring:
                "বসন্তের দিকে উষ্ণ হচ্ছে ({{min}} থেকে {{max}}°C আশা করুন)",
              transitionToSummer:
                "গ্রীষ্মের দিকে রূপান্তর ({{min}} থেকে {{max}}°C আশা করুন)",
              mild: "মৃদু তাপমাত্রা (গড় {{temp}}°C)",
              warmingToSummer:
                "গ্রীষ্মের দিকে উষ্ণ হচ্ছে ({{min}} থেকে {{max}}°C আশা করুন)",
              coolingToWinter:
                "শীতের দিকে ঠাণ্ডা হচ্ছে ({{min}} থেকে {{max}}°C আশা করুন)",
            },
          },
          emergency: {
            title: "জরুরী সহায়তা",
            findingLocation: "আপনার সঠিক অবস্থান খুঁজে বের করা হচ্ছে...",
            yourLocation: "আপনার বর্তমান অবস্থান",
            locationCoordinatesOnly: "শুধুমাত্র অবস্থান কোঅর্ডিনেট",
            coordinates: "কোঅর্ডিনেট: {lat}, {lng}",
            openInMaps: "গুগল ম্যাপে খুলুন",
            nearestHospitals: "নিকটস্থ হাসপাতাল",
            nearestPolice: "নিকটস্থ পুলিশ স্টেশন",
            distanceAway: "{distance} কিমি দূরে",
            whatsappHelp: "হোয়াটসঅ্যাপে সাহায্য নিন",
            noHospitalsFound: "ডাটাবেসে কোনো হাসপাতাল পাওয়া যায়নি",
            noPoliceFound: "ডাটাবেসে কোনো পুলিশ স্টেশন পাওয়া যায়নি",
            retryLocation: "অবস্থান আবার চেষ্টা করুন",
            whatsappMessage:
              "জরুরী! এই অবস্থানে আমার সাহায্য প্রয়োজন: https://www.google.com/maps?q={lat},{lng}",
            errors: {
              geolocationNotSupported:
                "এই ব্রাউজার দ্বারা জিওলোকেশন সমর্থিত নয়।",
              permissionDenied:
                "অবস্থান অ্যাক্সেস অস্বীকৃত হয়েছে। অনুগ্রহ করে লোকেশন সার্ভিস সক্ষম করুন।",
              positionUnavailable: "অবস্থান তথ্য পাওয়া যায়নি।",
              timeout: "অবস্থান পাওয়ার অনুরোধ সময়সীমা অতিক্রম করেছে।",
              unknown: "অবস্থান পাওয়ার সময় একটি অজানা ত্রুটি ঘটেছে।",
              noAddressData: "কোনো ঠিকানা ডেটা পাওয়া যায়নি",
              addressFetchFailed:
                "ঠিকানা বিবরণ আনতে ব্যর্থ। শুধুমাত্র কোঅর্ডিনেট ব্যবহার করা হচ্ছে।",
              nearbyFacilities: "কাছাকাছি সুবিধা লোড করতে ত্রুটি",
              invalidPhone: "অবৈধ ফোন নম্বর",
            },
          },
          footer: {
            brandName: "ভয়েজার", // Voyager
            tagline:
              "আপনার নিরবচ্ছিন্ন ভ্রমণের জন্য আপনার চূড়ান্ত ভ্রমণ সঙ্গী।", // Your ultimate travel companion for seamless journeys.
            phone: "+91 8292986414",
            email: "support@voyager.com",
            address: "কলকাতা, ভারত", // Kolkata, India
            aboutUs: {
              title: "আমাদের সম্পর্কে", // About Us
              ourStory: "আমাদের গল্প", // Our Story
              team: "টিম", // Team
              careers: "কেরিয়ার", // Careers
              press: "প্রেস", // Press
            },
            support: {
              title: "সহায়তা", // Support
              faqs: "প্রশ্নাবলী", // FAQs
              contact: "যোগাযোগ", // Contact
              privacyPolicy: "গোপনীয়তা নীতি", // Privacy Policy
              terms: "শর্তাবলী", // Terms
            },
            resources: {
              title: "সম্পদ", // Resources
              blog: "ব্লগ", // Blog
              guides: "গাইড", // Guides
              webinars: "ওয়েবিনার", // Webinars
              helpCenter: "সহায়তা কেন্দ্র", // Help Center
            },
            newsletter: {
              title: "নিউজলেটার", // Newsletter
              description:
                "ভ্রমণ টিপস এবং এক্সক্লুসিভ অফার পেতে সাবস্ক্রাইব করুন।", // Subscribe to get travel tips and exclusive offers.
              placeholder: "আপনার ইমেইল ঠিকানা", // Your email address
              subscribeButton: "সাবস্ক্রাইব করুন", // Subscribe
            },
            copyright: "© {{year}} ভয়েজার। সর্বস্বত্ব সংরক্ষিত।", // © {{year}} Voyager. All rights reserved.
            privacyPolicyLink: "গোপনীয়তা নীতি", // Privacy Policy
            termsOfServiceLink: "পরিষেবার শর্তাবলী", // Terms of Service
            cookiesLink: "কুকিজ", // Cookies
          },
        },
      },
    },
  });

export default i18n;
