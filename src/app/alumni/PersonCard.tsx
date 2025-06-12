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
    <div className="bg-white rounded-lg shadow p-6 flex flex-row items-center w-full">
      <img
        src={person.avatar}
        alt={person.name}
        className="w-64 h-64 rounded-full object-cover border"
      />
      <div className="flex flex-col ml-12 flex-1 h-full">
        <div className="flex flex-col items-center text-center justify-center h-full">
          <div className="text-3xl font-semibold mb-4">{person.name}</div>
          <div className="text-gray-700">{person.description}</div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          <LinkIcon href={`mailto:${person.email}`} title="Email"><EmailIcon /></LinkIcon>
          <LinkIcon href={person.github} title="GitHub"><GitHubIcon /></LinkIcon>
          <LinkIcon href={person.linkedin} title="LinkedIn"><LinkedInIcon /></LinkIcon>
          <LinkIcon href={person.website} title="Website"><LanguageIcon /></LinkIcon>
          <LinkIcon href={person.google_scholar} title="Google Scholar"><GoogleIcon /></LinkIcon>
          <LinkIcon href={person.orcid} title="ORCID"><BadgeIcon /></LinkIcon>
        </div>
      </div>
    </div>
  );
}

export function StudentCard({ person }: { person: any }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-row items-center">
      <img
        src={person.avatar}
        alt={person.name}
        className="w-64 h-64 rounded-full object-cover border"
      />
      <div className="flex flex-col ml-12 flex-1 h-full">
        <div className="flex flex-col items-left text-left justify-center h-full">
          <div className="text-3xl font-semibold mb-4">{person.name}</div>
          <div className="text-gray-700">{person.student}</div>
          <div className="text-gray-500 mb-1">Degree: {person.degree}</div>
          <div className="text-gray-500 mb-1">Time: {person.student_year}</div>
          <div className="text-gray-700">{person.description}</div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {
            person.email && <LinkIcon href={`mailto:${person.email}`} title="Email"><EmailIcon /></LinkIcon>
          }
          {
            person.github && <LinkIcon href={person.github} title="GitHub"><GitHubIcon /></LinkIcon>
          }
          {
            person.linkedin && <LinkIcon href={person.linkedin} title="LinkedIn"><LinkedInIcon /></LinkIcon>
          }
          {
            person.website && <LinkIcon href={person.website} title="Website"><LanguageIcon /></LinkIcon>
          }
          {
            person.google_scholar && <LinkIcon href={person.google_scholar} title="Google Scholar"><GoogleIcon /></LinkIcon>
          }
          {
            person.orcid && <LinkIcon href={person.orcid} title="ORCID"><BadgeIcon /></LinkIcon>
          }
        </div>
      </div>
    </div>
  );
}

export function GraduateCard({ person }: { person: any }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-row items-center">
      <img
        src={person.avatar}
        alt={person.name}
        className="w-64 h-64 rounded-full object-cover border"
      />
      <div className="flex flex-col ml-12 flex-1 h-full">
        <div className="flex flex-col items-left text-left justify-center h-full">
          <div className="text-3xl font-semibold mb-4">{person.name}</div>
          <div className="text-gray-700">{person.description}</div>
          <div className="text-gray-500 mb-1">Degree: {person.degree}</div>
          <div className="text-gray-500 mb-1">Graduate Year: {person.graduate_year}</div>
          <div className="text-gray-700">Destination: {person.destination}</div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {
            person.email && <LinkIcon href={`mailto:${person.email}`} title="Email"><EmailIcon /></LinkIcon>
          }
          {
            person.github && <LinkIcon href={person.github} title="GitHub"><GitHubIcon /></LinkIcon>
          }
          {
            person.linkedin && <LinkIcon href={person.linkedin} title="LinkedIn"><LinkedInIcon /></LinkIcon>
          }
          {
            person.website && <LinkIcon href={person.website} title="Website"><LanguageIcon /></LinkIcon>
          }
          {
            person.google_scholar && <LinkIcon href={person.google_scholar} title="Google Scholar"><GoogleIcon /></LinkIcon>
          }
          {
            person.orcid && <LinkIcon href={person.orcid} title="ORCID"><BadgeIcon /></LinkIcon>
          }
        </div>
      </div>
    </div>
  );
} 