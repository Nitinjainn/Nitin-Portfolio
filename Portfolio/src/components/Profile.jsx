import avatar from '../assets/favicon.png';
import ResumeNitin from '../assets/Resume.pdf';

const contactItems = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'EMAIL',
    value: 'nitinjain18072005@gmail.com'
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'PHONE',
    value: '+91 8764161422',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'LOCATION',
    value: 'Jaipur, India',
  },
];

const socials = [
  {
    href: 'https://github.com/Nitinjainn',
    label: 'GitHub',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/nitin-jain-1808nj/',
    label: 'LinkedIn',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: 'https://x.com/nitin_jain_007',
    label: 'Twitter',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: ResumeNitin,
    label: 'Resume',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/nitin_jain__07',
    label: 'Instagram',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: 'https://discord.com/users/nitinjain007',
    label: 'Discord',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
      </svg>
    ),
  },
  {
    href: 'https://leetcode.com/u/nitin_jain007/',
    label: 'LeetCode',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L11.3 6.004l5.418 5.81c.231.231.682.355 1.05.355.334 0 .61-.19.83-.418.423-.423.447-1.144.02-1.574L13.195 4.39l-2.585-2.77A1.56 1.56 0 0 0 9.878 1a1.276 1.276 0 0 0-.913.414l3.141 3.364ZM14.98 19.009c-2.316.037-4.63.13-6.945.244-.247.012-.48.24-.48.498 0 .285.234.484.48.484l6.953-.257c.28-.01.5-.246.5-.526 0-.3-.22-.519-.508-.443Z" />
      </svg>
    ),
  },
];

export default function Profile() {
  return (
    <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-8 lg:self-start mt-6">
      <div className="card p-6 sm:p-8 pt-6 sm:pt-6 pb-8 sm:pb-6 flex flex-col items-center gap-5 sm:gap-6">
        {/* Avatar */}
        <div className="relative">
          <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-sm">
            <img
              src={avatar}
              alt="Nitin Jain"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name & Role */}
        <div className="text-center mt-2 w-full">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white tracking-tight transition-colors duration-500">Nitin Jain</h1>
          <span className="mt-2 inline-block px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[11px] sm:text-xs font-medium tracking-wide rounded-xl transition-colors duration-500">
            Full Stack Developer
          </span>
        </div>

        <hr className="w-full border-gray-100 dark:border-gray-700/50 transition-colors duration-500" />

        {/* Contact Info */}
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-3">
          {contactItems.map((item) => (
            <li key={item.label} className="flex items-start gap-4 sm:gap-3">
              <div className="w-10 h-10 sm:w-8 sm:h-8 shrink-0 bg-indigo-50 dark:bg-indigo-900/40 rounded-xl sm:rounded-lg flex items-center justify-center text-indigo-500 dark:text-indigo-400 transition-colors duration-500">
                {item.icon}
              </div>
              <div className="min-w-0 flex flex-col justify-center">
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-0.5 transition-colors duration-500">
                  {item.label}
                </p>
                <p className="text-sm sm:text-[13px] xl:text-sm text-gray-700 dark:text-gray-300 font-medium truncate transition-colors duration-500">{item.value}</p>
              </div>
            </li>
          ))}
        </ul>

        <hr className="w-full border-gray-100 dark:border-gray-700/50 transition-colors duration-500" />

        {/* Social Links */}
        <div className="flex flex-col items-center gap-3 w-full">
          {/* Top Row (4 links) */}
          <div className="flex items-center justify-center gap-3 sm:gap-3">
            {socials.slice(0, 4).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 flex items-center justify-center rounded-2xl sm:rounded-[0.85rem] bg-gray-100/80 dark:bg-gray-800/80 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]"
              >
                {s.icon}
              </a>
            ))}
          </div>
          {/* Bottom Row (3 links) */}
          <div className="flex items-center justify-center gap-3 sm:gap-3">
            {socials.slice(4).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 flex items-center justify-center rounded-2xl sm:rounded-[0.85rem] bg-gray-100/80 dark:bg-gray-800/80 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
