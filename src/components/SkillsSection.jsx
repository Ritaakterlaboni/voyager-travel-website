import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from 'react-icons/si';
import SectionHeading from './SectionHeading';

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> }
];

export default function SkillsSection() {
  return (
    <section className="px-0 py-6">
      <div className="mx-auto w-[min(1150px,92%)]">
        <SectionHeading eyebrow="02. My Skills" title="Core Skills & Tools" />

        <div className="mt-8 overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)] py-8 shadow-soft">
          <div className="flex w-max animate-skill-slider gap-3 px-6 hover:[animation-play-state:paused]">
            {[...skills, ...skills].map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] bg-[#131621] px-3 py-2 text-sm text-slate-200">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand)]/25 to-[var(--brand-2)]/15 text-sm font-semibold text-[var(--brand-2)]">
                  {skill.icon}
                </span>
                <span className="whitespace-nowrap">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
