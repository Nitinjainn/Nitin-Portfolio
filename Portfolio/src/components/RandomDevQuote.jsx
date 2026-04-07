import { useEffect, useState } from 'react';

// CORS-friendly in browsers.
const API_URL = 'https://geek-quote-api.vercel.app/v1/quote';

export default function RandomDevQuote() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        setLoading(true);
        const res = await fetch(API_URL, { headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json = await res.json();

        const text = (json?.quote || '').trim();
        if (!alive) return;
        setQuote(text || 'Ship. Learn. Repeat.');
      } catch {
        if (!alive) return;
        setQuote('Ship. Learn. Repeat.');
      }

      if (!alive) return;
      setLoading(false);
    }

    load();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="pt-6 sm:pt-8 border-t border-gray-100/80 dark:border-gray-700/50 transition-colors duration-500 w-full">
      {loading ? (
        <div className="h-6 w-full bg-gray-100 dark:bg-gray-900/50 rounded-xl animate-pulse" />
      ) : (
        <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600 dark:text-gray-300 font-medium italic tracking-tight w-full">
          “{quote}”
        </p>
      )}
    </div>
  );
}

