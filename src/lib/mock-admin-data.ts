import { FolderOpen, Users, BarChart3 } from "lucide-react";

type StatColor = 'blue' | 'green' | 'purple' | 'orange';

export const dashboardStats = [
    { label: "Total Photos", value: "1,234", icon: FolderOpen, color: 'blue' as StatColor },
    { label: "Active Galleries", value: "28", icon: FolderOpen, color: 'green' as StatColor },
    { label: "Client Projects", value: "12", icon: Users, color: 'purple' as StatColor },
    { label: "This Month Views", value: "45,678", icon: BarChart3, color: 'orange' as StatColor },
];

export const recentGalleries = [
    {
        id: 1,
        name: "Wedding - Sarah & John",
        type: "Client Review",
        photos: 156,
        views: 234,
        status: "Active",
        lastUpdated: "2 hours ago"
    },
    {
        id: 2,
        name: "Corporate Headshots",
        type: "Public",
        photos: 89,
        views: 1234,
        status: "Published",
        lastUpdated: "1 day ago"
    },
    {
        id: 3,
        name: "Nature Portfolio",
        type: "Portfolio",
        photos: 234,
        views: 5678,
        status: "Published",
        lastUpdated: "3 days ago"
    },
    {
        id: 4,
        name: "Street Photography",
        type: "Draft",
        photos: 67,
        views: 0,
        status: "Draft",
        lastUpdated: "1 week ago"
    }
];