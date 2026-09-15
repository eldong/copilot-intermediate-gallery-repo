import { Upload, Users, Eye, LucideIcon } from "lucide-react";

interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

export const featureCardsData: FeatureCard[] = [
  {
    icon: Upload,
    title: "Smart Upload",
    description: "Drag & drop with automatic resizing and optimization",
    iconColor: "text-blue-600"
  },
  {
    icon: Eye,
    title: "Client Proofing",
    description: "Share galleries with clients for review and approval",
    iconColor: "text-green-600"
  },
  {
    icon: Users,
    title: "Public Sharing",
    description: "Create public portfolios with custom URLs",
    iconColor: "text-purple-600"
  }
];