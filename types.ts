import { LucideIcon } from 'lucide-react';

export enum NavItemStatus {
  ACTIVE = 'ACTIVE',
  COMING_SOON = 'COMING_SOON',
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  status: NavItemStatus;
}

export interface SlideData {
  id: number;
  slideRange: string;
  topic: string;
  duration: string;
  keyNotes: string;
}

export interface TimelineStep {
  title: string;
  description: string;
  icon: LucideIcon;
}