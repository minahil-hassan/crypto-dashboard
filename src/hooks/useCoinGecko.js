import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export default function useCoinGecko(endpoint, { refreshInterval = 600000 } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${BASE_URL}${endpoint}`);
      setData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, refreshInterval);
    return () => clearInterval(interval);
  }, [endpoint, refreshInterval]);

  return { data, loading, error };
}
