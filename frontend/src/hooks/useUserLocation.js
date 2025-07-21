// src/hooks/useUserLocation.js
import { useEffect, useState } from 'react';

const API_KEY = '1c6571b0b4e240689a1fdb06cd084374'; 

const getCoords = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported'));
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const getAddressFromCoords = async (latitude, longitude) => {
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
  );
  const data = await res.json();
  if (data?.results?.length > 0) {
    const location = data.results[0].components;
    console.log(location)
    return {
      city: location.city || location.town || location.village,
      state: location.state,
      country: location.country,
      formatted: data.results[0].formatted,
      lat: latitude,
      lon: longitude,
    };
  } else {
    throw new Error('Location not found');
  }
};

export default function useUserLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { latitude, longitude } = await getCoords();
        const address = await getAddressFromCoords(latitude, longitude);
        setLocation(address);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { location, loading, error };
}
