export interface ContactInfo {
  email: string;
  phone: string;
  phoneDisplay: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  githubDisplay: string;
}

export interface ContactProps {
  contactInfo: ContactInfo;
}
