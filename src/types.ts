import { ReactNode } from 'react';

export type SubSection = {
  id: string;
  title: string;
  icon?: ReactNode;
  content: ReactNode;
};

export type Chapter = {
  id: string;
  title: string;
  icon: ReactNode;
  subSections: SubSection[];
  password?: string;
};
