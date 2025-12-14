import React from 'react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  content?: string;
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: string;
  link?: string;
  description: string;
}

export interface MediaItem {
  id: string;
  source: string;
  title: string;
  date: string;
  logoUrl?: string;
  link: string;
  snippet: string;
}

export interface PracticeArea {
  title: string;
  description: string;
  icon: React.ReactNode;
}