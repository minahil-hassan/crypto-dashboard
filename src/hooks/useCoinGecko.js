// src/hooks/useCoinGecko.js
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export default function useCoinGecko(endpoint, { refreshInterval = 60000 } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}${endpoint}`);
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();

    if (!refreshInterval) return;

    const interval = setInterval(fetchData, refreshInterval);
    return () => clearInterval(interval);
  }, [fetchData, refreshInterval]);

  return { data, loading, error };
}
