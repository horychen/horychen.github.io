"use client";
import React, { useRef, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import ResearchGateIcon from '@mui/icons-material/Science';
import GoogleIcon from '@mui/icons-material/Google';
import BadgeIcon from '@mui/icons-material/Badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

function LinkIcon({ href, children, title }: { href: string, children: React.ReactNode, title: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-1 text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors duration-200"
      title={title}
    >
      {children}
    </a>
  );
}

function Card3DWrapper({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<any>({
    transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
    boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.08)',
    transition: 'transform 0.3s, box-shadow 0.3s'
  });
  const [highlightStyle, setHighlightStyle] = useState<any>({ opacity: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
      boxShadow: `${-rotateY * 2}px ${rotateX * 2}px 32px 0 rgba(0,0,0,0.15), 0 2px 8px 0 rgba(0,0,0,0.10)`,
      transition: 'transform 0.1s, box-shadow 0.1s'
    });
    setHighlightStyle({
      left: `${x}px`,
      top: `${y}px`,
      opacity: 1
    });
  }

  function handleMouseLeave() {
    setStyle({
      transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
      boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.08)',
      transition: 'transform 0.3s, box-shadow 0.3s'
    });
    setHighlightStyle({ opacity: 0 });
  }

  return (
    <div
      ref={cardRef}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl overflow-hidden"
    >
      <div
        className="pointer-events-none absolute z-10 rounded-2xl"
        style={{
          ...highlightStyle,
          width: 120,
          height: 120,
          marginLeft: -60,
          marginTop: -60,
          background: 'radial-gradient(circle,rgba(255,255,255,0.25) 0%,rgba(255,255,255,0) 80%)',
          transition: 'opacity 0.2s'
        }}
      />
      {children}
    </div>
  );
}

export function PICard({ person }: { person: any }) {
  return (
    <Card3DWrapper>
      <Card
        className="flex flex-col md:flex-row items-center w-full bg-white/60 dark:bg-neutral-800/60 border border-white/30 dark:border-neutral-200/20 shadow-lg rounded-2xl backdrop-blur-md transition-shadow duration-300"
      >
        <div className="flex-shrink-0 p-4 md:p-6">
          <img
            src={person.avatar}
            alt={person.name}
            className="w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full object-cover border-2 border-white/60 dark:border-neutral-300/40 shadow bg-white/30 dark:bg-neutral-700/30"
          />
        </div>
        <div className="flex flex-col flex-1 h-full justify-between p-4 md:p-6">
          <CardHeader className="items-center text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">{person.name}</CardTitle>
            <CardDescription className="text-base md:text-lg text-neutral-500 dark:text-neutral-300 mt-2 mb-4">{person.description}</CardDescription>
          </CardHeader>
          <CardFooter className="justify-center gap-2 flex-wrap mt-2">
            <LinkIcon href={`mailto:${person.email}`} title="Email"><EmailIcon /></LinkIcon>
            <LinkIcon href={person.github} title="GitHub"><GitHubIcon /></LinkIcon>
            <LinkIcon href={person.linkedin} title="LinkedIn"><LinkedInIcon /></LinkIcon>
            <LinkIcon href={person.website} title="Website"><LanguageIcon /></LinkIcon>
            <LinkIcon href={person.google_scholar} title="Google Scholar"><GoogleIcon /></LinkIcon>
            <LinkIcon href={person.orcid} title="ORCID"><BadgeIcon /></LinkIcon>
          </CardFooter>
        </div>
      </Card>
    </Card3DWrapper>
  );
}

export function StudentCard({ person }: { person: any }) {
  return (
    <Card3DWrapper>
      <Card
        className="flex flex-col md:flex-row items-center w-full bg-white/60 dark:bg-neutral-800/60 border border-white/30 dark:border-neutral-200/20 shadow-lg rounded-2xl backdrop-blur-md transition-shadow duration-300"
      >
        <div className="flex-shrink-0 p-4 md:p-6">
          <img
            src={person.avatar}
            alt={person.name}
            className="w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full object-cover border-2 border-white/60 dark:border-neutral-300/40 shadow bg-white/30 dark:bg-neutral-700/30"
          />
        </div>
        <div className="flex flex-col flex-1 h-full justify-between p-4 md:p-6">
          <CardHeader className="items-center text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">{person.name}</CardTitle>
            <CardDescription className="text-base md:text-lg text-neutral-500 dark:text-neutral-300 mt-2 mb-4">{person.student || person.graduate_year ? `${person.student || ''}${person.student && person.graduate_year ? ' · ' : ''}${person.graduate_year || ''}` : ''}</CardDescription>
          </CardHeader>
          <CardContent className="text-neutral-700 dark:text-neutral-200 text-sm space-y-1">
            {person.degree && <div>Degree: {person.degree}</div>}
            {person.student_year && <div>Year: {person.student_year}</div>}
            {person.graduate_year && <div>Graduation Year: {person.graduate_year}</div>}
            {person.destination && <div>Destination: {person.destination}</div>}
            {person.description && <div className="mt-2 text-neutral-500 dark:text-neutral-300">{person.description}</div>}
          </CardContent>
          <CardFooter className="justify-center gap-2 flex-wrap mt-2">
            {person.email && <LinkIcon href={`mailto:${person.email}`} title="Email"><EmailIcon /></LinkIcon>}
            {person.github && <LinkIcon href={person.github} title="GitHub"><GitHubIcon /></LinkIcon>}
            {person.linkedin && <LinkIcon href={person.linkedin} title="LinkedIn"><LinkedInIcon /></LinkIcon>}
            {person.website && <LinkIcon href={person.website} title="Website"><LanguageIcon /></LinkIcon>}
            {person.google_scholar && <LinkIcon href={person.google_scholar} title="Google Scholar"><GoogleIcon /></LinkIcon>}
            {person.orcid && <LinkIcon href={person.orcid} title="ORCID"><BadgeIcon /></LinkIcon>}
          </CardFooter>
        </div>
      </Card>
    </Card3DWrapper>
  );
}

export function GraduateCard(props: { person: any }) {
  return <StudentCard {...props} />;
} 