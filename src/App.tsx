import { useEffect } from 'react';
import Navbar from './components/navbar';
import { useAppDispatch } from './store/useReduxStore';
import { FORECAST } from './constants';
import { fetchWeatherByCity } from './store/fetchWeatherByCity';
import Weather from './components/weather';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchWeatherByCity({ city: 'Yerevan', type: FORECAST }));
    })();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Weather />
    </>
  )
}

export default App
