import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiSass,
  SiWebpack,
  SiVite,
  SiExpress,
  SiPython,
  SiDjango,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiDocker,
  SiAmazonwebservices,
  SiVercel,
  SiGit,
  SiGithubactions,
  SiJest,
  SiCypress,
  SiFigma,
  SiExpo,
  SiFlutter,
} from "react-icons/si"
import { MdDevices, MdPhoneIphone } from "react-icons/md"

interface TechIconProps {
  tech: string
  className?: string
}

export function TechIcon({ tech, className = "w-5 h-5" }: TechIconProps) {
  const iconMap = {
    TypeScript: <SiTypescript className={`${className} text-[#3178C6]`} />,
    React: <SiReact className={`${className} text-[#61DAFB]`} />,
    "Node.js": <SiNodedotjs className={`${className} text-[#339933]`} />,
    PostgreSQL: <SiPostgresql className={`${className} text-[#336791]`} />,
    "Next.js": <SiNextdotjs className={`${className} text-[#000000] dark:text-white`} />,
    "Tailwind CSS": <SiTailwindcss className={`${className} text-[#06B6D4]`} />,
    "Vue.js": <SiVuedotjs className={`${className} text-[#4FC08D]`} />,
    Sass: <SiSass className={`${className} text-[#CC6699]`} />,
    Webpack: <SiWebpack className={`${className} text-[#8DD6F9]`} />,
    Vite: <SiVite className={`${className} text-[#646CFF]`} />,
    Express: <SiExpress className={`${className} text-[#000000] dark:text-white`} />,
    Python: <SiPython className={`${className} text-[#3776AB]`} />,
    Django: <SiDjango className={`${className} text-[#092E20]`} />,
    MongoDB: <SiMongodb className={`${className} text-[#47A248]`} />,
    Redis: <SiRedis className={`${className} text-[#DC382D]`} />,
    GraphQL: <SiGraphql className={`${className} text-[#E10098]`} />,
    Docker: <SiDocker className={`${className} text-[#2496ED]`} />,
    AWS: <SiAmazonwebservices className={`${className} text-[#FF9900]`} />,
    Vercel: <SiVercel className={`${className} text-[#000000] dark:text-white`} />,
    Git: <SiGit className={`${className} text-[#F05032]`} />,
    "GitHub Actions": <SiGithubactions className={`${className} text-[#2088FF]`} />,
    Jest: <SiJest className={`${className} text-[#C21325]`} />,
    Cypress: <SiCypress className={`${className} text-[#17202C]`} />,
    Figma: <SiFigma className={`${className} text-[#F24E1E]`} />,
    "React Native": <SiReact className={`${className} text-[#61DAFB]`} />,
    Expo: <SiExpo className={`${className} text-[#000020]`} />,
    Flutter: <SiFlutter className={`${className} text-[#02569B]`} />,
    PWA: <MdPhoneIphone className={`${className} text-[#5A0FC8]`} />,
    "Responsive Design": <MdDevices className={`${className} text-[#FF6B6B]`} />,
    "Mobile-First": <MdPhoneIphone className={`${className} text-[#4ECDC4]`} />,
  }

  return iconMap[tech as keyof typeof iconMap] || null
}
