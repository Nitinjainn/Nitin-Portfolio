const icons = [
  { name: 'java', x: '82%', y: '5%', size: 'w-24 sm:w-48', rotation: 'rotate-12' },
  { name: 'git', x: '5%', y: '8%', size: 'w-16 sm:w-36', rotation: '-rotate-12' },
  { name: 'react', x: '12%', y: '35%', size: 'w-14 sm:w-28', rotation: '-rotate-45' },
  { name: 'mongodb', x: '81%', y: '35%', size: 'w-16 sm:w-32', rotation: 'rotate-12' },
  { name: 'spring', x: '10%', y: '68%', size: 'w-20 sm:w-40', rotation: 'rotate-12' },
  { name: 'linux', x: '85%', y: '65%', size: 'w-16 sm:w-36', rotation: '-rotate-12' },
  { name: 'docker', x: '45%', y: '1%', size: 'w-12 sm:w-24', rotation: 'rotate-12' },
  { name: 'mysql', x: '45%', y: '80%', size: 'w-16 sm:w-36', rotation: '-rotate-6' },
  { name: 'typescript', x: '55%', y: '45%', size: 'w-14 sm:w-28', rotation: '-rotate-12' },
  { name: 'javascript', x: '25%', y: '85%', size: 'w-14 sm:w-28', rotation: 'rotate-12' },
  { name: 'nodedotjs', x: '35%', y: '25%', size: 'w-16 sm:w-32', rotation: '-rotate-6' },
  { name: 'python', x: '70%', y: '85%', size: 'w-14 sm:w-28', rotation: 'rotate-45' },
  { name: 'html5', x: '60%', y: '18%', size: 'w-10 sm:w-20', rotation: '-rotate-12' },
  { name: 'css3', x: '6%', y: '50%', size: 'w-12 sm:w-24', rotation: 'rotate-12' },
  { name: 'postgresql', x: '25%', y: '52%', size: 'w-12 sm:w-24', rotation: 'rotate-6' },
  { name: 'postman', x: '82%', y: '88%', size: 'w-8 sm:w-16', rotation: '-rotate-12' },
];

export default function BackgroundIcons() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((icon, i) => (
        <img
          key={i}
          src={icon.name === 'java' ? 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' : `https://cdn.simpleicons.org/${icon.name}/e5e7eb`}
          alt=""
          loading="lazy"
          className={`absolute ${icon.size} ${icon.rotation} opacity-50 dark:opacity-[0.15] select-none object-contain transition-opacity duration-500 ${icon.name === 'java' ? 'grayscale contrast-200 brightness-150' : ''}`}
          style={{ left: icon.x, top: icon.y }}
        />
      ))}
    </div>
  );
}
