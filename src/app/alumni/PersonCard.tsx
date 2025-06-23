"use client";
import React from "react";
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
    <a href={href} target="_blank" rel="noopener noreferrer" className="mx-1" title={title}>
      {children}
    </a>
  );
}

export function PICard({ person }: { person: any }) {
  return (
    <Card className="flex flex-row items-center w-full bg-gradient-to-br from-white to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-300 dark:border-neutral-700 shadow-lg hover:shadow-black/20 dark:hover:shadow-white/10 transition-shadow duration-300">
      <div className="flex-shrink-0 p-6">
        <img
          src={person.avatar}
          alt={person.name}
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-neutral-400 dark:border-neutral-600 shadow-lg bg-white/10 dark:bg-black/20"
        />
      </div>
      <div className="flex flex-col flex-1 h-full justify-between p-6">
        <CardHeader className="items-center text-center">
          <CardTitle className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 drop-shadow">{person.name}</CardTitle>
          <CardDescription className="text-lg text-neutral-600 dark:text-neutral-300 mt-2 mb-4">{person.description}</CardDescription>
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
  );
}

export function StudentCard({ person }: { person: any }) {
  return (
    <Card className="flex flex-row items-center w-full bg-gradient-to-br from-white to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-300 dark:border-neutral-700 shadow-lg hover:shadow-black/20 dark:hover:shadow-white/10 transition-shadow duration-300">
      <div className="flex-shrink-0 p-6">
        <img
          src={person.avatar}
          alt={person.name}
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-neutral-400 dark:border-neutral-600 shadow-lg bg-white/10 dark:bg-black/20"
        />
      </div>
      <div className="flex flex-col flex-1 h-full justify-between p-6">
        <CardHeader className="items-center text-center">
          <CardTitle className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 drop-shadow">{person.name}</CardTitle>
          <CardDescription className="text-lg text-neutral-600 dark:text-neutral-300 mt-2 mb-4">{person.student || person.graduate_year ? `${person.student || ''}${person.student && person.graduate_year ? ' · ' : ''}${person.graduate_year || ''}` : ''}</CardDescription>
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
  );
}

export function GraduateCard(props: { person: any }) {
  return StudentCard(props);
} 