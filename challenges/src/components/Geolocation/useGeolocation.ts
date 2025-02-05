import { useState } from 'react';
interface Position {
  lat: number;
  lng: number;
}
export function useGeolocation() {
  const [position, setPosition] = useState<Position>({ lat: 0, lng: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError('Your browser does not support geolocation');

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }
  return { position, isLoading, error, getPosition };
}
