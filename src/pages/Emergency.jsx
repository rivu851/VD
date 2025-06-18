import React, { useEffect, useState } from "react";
import hospitalData from "../assets/nearby_hospitals.json";
import policeData from "../assets/nearby_police.json";
import { useAppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";

const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const Emergency = () => {
  const {
    location,
    setLocation,
    address,
    setAddress,
    currentcity,
    setCurrentcity,
  } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);
  const [nearbyPoliceStations, setNearbyPoliceStations] = useState([]);
  const [locationError, setLocationError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(userCoords, showError, {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0,
        });
      } else {
        setLocationError(t("emergency.geolocationNotSupported"));
        setLoading(false);
      }
    };

    getLocation();
  }, [retryCount, t]);

  const userCoords = async (position) => {
    try {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;

      setLocation({ lat: userLat, lng: userLng });
      await getDetails(userLat, userLng);
      getNearbyData(userLat, userLng);
      setLocationError(null);
    } catch (error) {
      setLocationError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const showError = (error) => {
    let errorMessage = "";
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = t("emergency.errors.permissionDenied");
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = t("emergency.errors.positionUnavailable");
        break;
      case error.TIMEOUT:
        errorMessage = t("emergency.errors.timeout");
        break;
      default:
        errorMessage = t("emergency.errors.unknown");
    }
    setLocationError(errorMessage);
    setLoading(false);
  };

  const getDetails = async (lat, long) => {
    try {
      const proxy = "https://api.allorigins.win/get?url=";
      const api = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`;
      const res = await fetch(proxy + encodeURIComponent(api));
      const result = await res.json();

      if (!result.contents) {
        throw new Error(t("emergency.errors.noAddressData"));
      }

      const data = JSON.parse(result.contents);
      setAddress(data.address);
      setCurrentcity(
        data.address.city || data.address.town || data.address.village || ""
      );
    } catch (error) {
      console.error("Error fetching address:", error);
      setLocationError(t("emergency.errors.addressFetchFailed"));
    }
  };

  const getNearbyData = (lat, lng) => {
    try {
      const hospitals = hospitalData
        .filter(
          (item) => item.Latitude && item.Longitude && item["Phone Number"]
        )
        .map((item) => ({
          ...item,
          distance: haversineDistance(
            lat,
            lng,
            parseFloat(item.Latitude),
            parseFloat(item.Longitude)
          ),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);

      const police = policeData
        .filter(
          (item) => item.Latitude && item.Longitude && item["Phone Number"]
        )
        .map((item) => ({
          ...item,
          distance: haversineDistance(
            lat,
            lng,
            parseFloat(item.Latitude),
            parseFloat(item.Longitude)
          ),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);

      setNearbyHospitals(hospitals);
      setNearbyPoliceStations(police);
    } catch (error) {
      console.error("Error processing nearby data:", error);
      setLocationError(t("emergency.errors.nearbyFacilities"));
    }
  };

  const getWhatsappLink = (phone) => {
    try {
      const firstPhone = phone.split("/")[0];
      const digitsOnly = firstPhone.replace(/[^0-9]/g, "");
      if (!digitsOnly) throw new Error(t("emergency.errors.invalidPhone"));

      const message = t("emergency.whatsappMessage", {
        lat: location?.lat,
        lng: location?.lng,
      });
      return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
    } catch (error) {
      console.error("Error generating WhatsApp link:", error);
      return "#";
    }
  };

  const formatAddress = () => {
    if (!address) return t("emergency.locationCoordinatesOnly");
    return `${address.city || address.town || address.village || ""}, ${
      address.state || ""
    }, ${address.postcode || ""}`;
  };

  const handleRetry = () => {
    setLoading(true);
    setLocationError(null);
    setRetryCount((prev) => prev + 1);
  };

  return (
    <div
  className="min-h-screen w-full flex flex-col items-center justify-center p-4 mt-20 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1731566838752-7113e0153d2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg1fHxlbWVyZ2VuY3l8ZW58MHx8MHx8fDA%3D')",
  }}
>  
      <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-8 text-center drop-shadow">
        🚨 {t("emergency.title")}
      </h1>

      {loading ? (
        <div className="flex flex-col items-center">
          <div className="text-lg text-gray-700 mb-4">
            🔍 {t("emergency.findingLocation")}
          </div>
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-xl text-center space-y-4">
          {locationError ? (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
              <p className="font-medium">{locationError}</p>
              <button
                onClick={handleRetry}
                className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                {t("emergency.retryLocation")}
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-gray-800">
                📍 {t("emergency.yourCurrentLocation")}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                📌 {t("emergency.latitude")}: {location?.lat?.toFixed(6)}, {t("emergency.longitude")}:{" "}
                {location?.lng?.toFixed(6)}
              </p>
              <p className="text-gray-600 text-sm md:text-base px-4">
                {formatAddress()}
              </p>

              <a
                href={`https://www.google.com/maps?q=${location?.lat},${location?.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
              >
                🌍 {t("emergency.openInMaps")}
              </a>
            </>
          )}
        </div>
      )}

      {!loading && !locationError && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full max-w-5xl">
          <div className="bg-red-100 p-6 rounded-xl shadow space-y-3">
            <h3 className="text-xl font-bold text-red-700 flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              {t("emergency.nearestHospitals")}
            </h3>
            {nearbyHospitals.length > 0 ? (
              nearbyHospitals.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item["Hospital Name"]}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">{item.Address}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    <span className="font-medium">📞</span>{" "}
                    {item["Phone Number"]}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {item.distance.toFixed(1)} km {t("emergency.away")}
                  </p>
                  <a
                    href={getWhatsappLink(item["Phone Number"])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center px-3 py-1.5 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    {t("emergency.whatsappHelp")}
                  </a>
                </div>
              ))
            ) : (
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-gray-500">
                  {t("emergency.noHospitalsFound")}
                </p>
              </div>
            )}
          </div>

          <div className="bg-blue-100 p-6 rounded-xl shadow space-y-3">
            <h3 className="text-xl font-bold text-blue-700 flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              {t("emergency.nearestPolice")}
            </h3>
            {nearbyPoliceStations.length > 0 ? (
              nearbyPoliceStations.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item["Police Station Name"] || item["Hospital Name"]}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">{item.Address}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    <span className="font-medium">📞</span>{" "}
                    {item["Phone Number"]}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {item.distance.toFixed(1)} km {t("emergency.away")}
                  </p>
                  <a
                    href={getWhatsappLink(item["Phone Number"])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center px-3 py-1.5 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    {t("emergency.whatsappHelp")}
                  </a>
                </div>
              ))
            ) : (
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-gray-500">{t("emergency.noPoliceFound")}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Emergency;