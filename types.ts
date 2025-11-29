
export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  imageUrl: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
    telegram?: string;
  };
}
