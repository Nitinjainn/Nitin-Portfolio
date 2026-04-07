import { useEffect, useMemo, useState } from 'react';

const LEETCODE_USERNAME = 'nitin_jain007';
const API_BASE_URL = 'https://leetcode-stats.tashif.codes';

const DAY_MS = 24 * 60 * 60 * 1000;

function toDayNum(tsSecondsOrMs) {
  const ms = tsSecondsOrMs > 1e12 ? tsSecondsOrMs : tsSecondsOrMs * 1000;
  // UTC day number for consistent streak calculation.
  return Math.floor(ms / DAY_MS);
}

function computeStreakAndDays(submissionCalendar) {
  const activeDayNums = new Set();

  for (const [ts, count] of Object.entries(submissionCalendar || {})) {
    const c = typeof count === 'number' ? count : Number(count);
    if (!Number.isFinite(c) || c <= 0) continue;
    const dayNum = toDayNum(Number(ts));
    if (Number.isFinite(dayNum)) activeDayNums.add(dayNum);
  }

  const allActive = Array.from(activeDayNums).sort((a, b) => a - b);
  if (allActive.length === 0) {
    return { activeDays: 0, totalDays: 365, maxStreak: 0 };
  }

  // LeetCode UI typically shows last ~1 year. We match screenshot by using 365 days ending at latest activity day.
  const latestDay = allActive[allActive.length - 1];
  const startDay = latestDay - 364;

  const filtered = allActive.filter((d) => d >= startDay && d <= latestDay);
  const activeDays = filtered.length;

  let maxStreak = 0;
  let cur = 0;
  let prev = null;
  for (const d of filtered) {
    if (prev !== null && d === prev + 1) cur += 1;
    else cur = 1;
    maxStreak = Math.max(maxStreak, cur);
    prev = d;
  }

  return { activeDays, totalDays: 365, maxStreak };
}

export default function CodingProfile() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const leetCodeProfileUrl = useMemo(
    () => `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
    []
  );

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        setLoading(true);
        setError('');

        const res = await fetch(`${API_BASE_URL}/${LEETCODE_USERNAME}`, {
          headers: { Accept: 'application/json' },
        });

        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }

        const json = await res.json();
        if (!json || json.status !== 'success') {
          throw new Error(json?.message || 'Unable to fetch LeetCode stats');
        }

        const derived = computeStreakAndDays(json.submissionCalendar);

        if (!alive) return;

        setStats({
          totalSolved: json.totalSolved ?? 0,
          easySolved: json.easySolved ?? 0,
          mediumSolved: json.mediumSolved ?? 0,
          hardSolved: json.hardSolved ?? 0,
          ranking: json.ranking ?? null,
          ...derived,
        });
      } catch (e) {
        if (!alive) return;
        setError(e?.message || 'Failed to load LeetCode stats');
      }

      if (!alive) return;
      setLoading(false);
    }

    load();
    return () => {
      alive = false;
    };
  }, []);

  // If LeetCode stats cannot be fetched, don't render the section at all.
  if (!loading && error) return null;

  return (
    <section className="animate-slide-in">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white relative transition-colors duration-500">
          Coding Profile
          <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-indigo-500 rounded-full"></span>
        </h2>
        <div className="hidden sm:flex items-center justify-center ml-auto">
          <a
            href={leetCodeProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold uppercase tracking-widest px-3 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-100 dark:border-gray-700 rounded-xl text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 shadow-sm"
            title="Open LeetCode profile"
          >
            Profile ↗
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 sm:gap-8">
        {/* Left: Problems solved + difficulty breakdown */}
        <div
          className="relative lg:col-span-2 lg:row-span-2 p-5 sm:p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-[1.5rem] sm:rounded-3xl overflow-hidden transition-colors duration-500"
        >
          {/* Subtle watermark + visual anchor (Achievement-style) */}
          <div className="absolute right-4 bottom-2 text-[35px] sm:text-[60px] font-black text-gray-200/50 dark:text-gray-700/30 blur-[1px] select-none pointer-events-none font-cinzel tracking-tighter leading-none whitespace-nowrap opacity-60 overflow-hidden max-w-[90%] text-right transition-colors duration-500">
            {stats?.totalSolved ? stats.totalSolved.toLocaleString() : 'LeetCode'}
          </div>
          <div className="absolute top-0 right-10 w-12 h-1 bg-indigo-100 dark:bg-indigo-900/50 rounded-b-md z-20 transition-colors duration-500"></div>

          <div className="relative z-10">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="text-[22px] sm:text-[24px] font-black text-gray-900 dark:text-white tracking-tight transition-colors duration-500">
                        LeetCode
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 px-2.5 py-1 rounded-xl bg-gray-50/80 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-700 transition-colors duration-500">
                        {stats?.ranking ? `#${stats.ranking.toLocaleString()}` : 'N/A'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="block sm:hidden">
                <a
                  href={leetCodeProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold uppercase tracking-widest px-3 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-100 dark:border-gray-700 rounded-xl text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 shadow-sm"
                >
                  Profile ↗
                </a>
              </div>
            </div>

            {loading ? (
              <div className="space-y-7 animate-pulse">
                <div className="h-14 bg-gray-100 dark:bg-gray-900/50 rounded-2xl" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="h-14 bg-gray-100 dark:bg-gray-900/50 rounded-2xl" />
                  <div className="h-14 bg-gray-100 dark:bg-gray-900/50 rounded-2xl" />
                  <div className="h-14 bg-gray-100 dark:bg-gray-900/50 rounded-2xl" />
                </div>
              </div>
            ) : error ? (
              <div className="flex flex-col gap-3">
                <div className="text-gray-700 dark:text-gray-200 font-semibold">
                  Could not load LeetCode stats.
                </div>
                <div className="text-[12px] text-gray-500 dark:text-gray-400">{error}</div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-start sm:items-stretch gap-6">
                <div className="flex-1">
                  <div className="text-gray-600 dark:text-gray-300 text-[12px] font-bold uppercase tracking-widest mb-2">
                    Problems Solved
                  </div>
                  <div className="flex items-end gap-3">
                    <div className="text-6xl font-black text-gray-900 dark:text-white tracking-tight">
                      {(stats.totalSolved ?? 0).toLocaleString()}
                    </div>
                  </div>
                  <div className="mt-2 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    Updated from your public LeetCode stats.
                  </div>
                </div>

                <div className="w-full sm:w-[320px]">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="relative p-4 rounded-[1.25rem] border border-gray-100 dark:border-gray-700 bg-white/50 dark:bg-gray-900/20 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] overflow-hidden transition-colors duration-500">
                      <div className="absolute top-0 right-6 w-10 h-1 bg-indigo-100 dark:bg-indigo-900/50 rounded-b-md transition-colors duration-500"></div>
                      <div className="relative z-10 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                          <div className="font-extrabold text-emerald-700 dark:text-emerald-300">
                            Easy
                          </div>
                        </div>
                        <div className="font-black text-gray-900 dark:text-white text-2xl">
                          {stats.easySolved.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="relative p-4 rounded-[1.25rem] border border-gray-100 dark:border-gray-700 bg-white/50 dark:bg-gray-900/20 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] overflow-hidden transition-colors duration-500">
                      <div className="absolute top-0 right-6 w-10 h-1 bg-indigo-100 dark:bg-indigo-900/50 rounded-b-md transition-colors duration-500"></div>
                      <div className="relative z-10 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                          <div className="font-extrabold text-amber-700 dark:text-amber-300">
                            Medium
                          </div>
                        </div>
                        <div className="font-black text-gray-900 dark:text-white text-2xl">
                          {stats.mediumSolved.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="relative p-4 rounded-[1.25rem] border border-gray-100 dark:border-gray-700 bg-white/50 dark:bg-gray-900/20 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] overflow-hidden transition-colors duration-500">
                      <div className="absolute top-0 right-6 w-10 h-1 bg-indigo-100 dark:bg-indigo-900/50 rounded-b-md transition-colors duration-500"></div>
                      <div className="relative z-10 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                          <div className="font-extrabold text-rose-700 dark:text-rose-300">
                            Hard
                          </div>
                        </div>
                        <div className="font-black text-gray-900 dark:text-white text-2xl">
                          {stats.hardSolved.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Active days */}
        <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-[1.5rem] sm:rounded-3xl p-6 sm:p-7 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden transition-colors duration-500 lg:h-full">
            <div className="absolute top-0 right-8 w-10 h-1 bg-indigo-100 dark:bg-indigo-900/50 rounded-b-md transition-colors duration-500"></div>
            <div className="absolute right-4 bottom-2 text-[45px] font-black text-gray-200/50 dark:text-gray-700/30 blur-[1px] select-none pointer-events-none opacity-60 transition-colors duration-500">
              Days
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="text-gray-600 dark:text-gray-300 text-[12px] font-bold uppercase tracking-widest mb-3">
                Active Days
              </div>
              {loading ? (
                <div className="h-12 bg-gray-100 dark:bg-gray-900/50 rounded-2xl animate-pulse" />
              ) : error ? (
                <div className="text-[12px] text-gray-500 dark:text-gray-400">N/A</div>
              ) : (
                <div>
                  <div className="text-4xl font-black text-indigo-500 dark:text-indigo-300 leading-none">
                    +{stats.activeDays}
                  </div>
                  <div className="mt-2 text-[12px] text-gray-500 dark:text-gray-400 font-semibold">
                    Total Days: {stats.totalDays}
                  </div>
                </div>
              )}
            </div>
          </div>

        {/* Right: Max streak */}
        <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-[1.5rem] sm:rounded-3xl p-6 sm:p-7 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden transition-colors duration-500 lg:h-full">
            <div className="absolute top-0 right-8 w-10 h-1 bg-indigo-100 dark:bg-indigo-900/50 rounded-b-md transition-colors duration-500"></div>
            <div className="absolute right-4 bottom-2 text-[45px] font-black text-gray-200/50 dark:text-gray-700/30 blur-[1px] select-none pointer-events-none opacity-60 transition-colors duration-500">
              Streak
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="text-gray-600 dark:text-gray-300 text-[12px] font-bold uppercase tracking-widest mb-3">
                Max Streak
              </div>
              {loading ? (
                <div className="h-12 bg-gray-100 dark:bg-gray-900/50 rounded-2xl animate-pulse" />
              ) : error ? (
                <div className="text-[12px] text-gray-500 dark:text-gray-400">N/A</div>
              ) : (
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
                      {stats.maxStreak} Days
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
      </div>
    </section>
  );
}

