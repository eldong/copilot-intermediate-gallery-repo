import { Users, Plus, Eye, Edit, Trash2, Settings } from "lucide-react";
import Link from "next/link";
import { Hero, SectionContainer, SectionTitle, FeatureCard, StatsGrid } from "@/components/ui";
import { dashboardStats, recentGalleries } from "@/lib/mock-admin-data";

export default function AdminPage() {
  return (
    <div className="page-gradient">
      <Hero
        title="Admin Dashboard"
        description="Manage your galleries, clients, and portfolio"
      />
      
      <SectionContainer>
        {/* Stats Grid */}
        <SectionTitle title="Stats Overview" className="mb-6" />
        <StatsGrid stats={dashboardStats} />

        {/* Quick Actions */}
        <SectionTitle title="Quick Actions" />
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/upload" className="block">
            <FeatureCard 
              icon={Plus}
              title="Upload Photos"
              description="Add new photos to your galleries with automatic optimization"
              iconColor="text-blue-600"
            />
          </Link>

          <FeatureCard 
            icon={Users}
            title="Manage Clients"
            description="Add clients and manage access to private galleries"
            iconColor="text-green-600"
          />

          <FeatureCard 
            icon={Settings}
            title="Settings"
            description="Configure your portfolio, branding, and preferences"
            iconColor="text-purple-600"
          />
        </div>

        {/* Galleries Table */}
        <SectionTitle title="Recent Galleries" viewAllLink="/admin/galleries" />
        <div className="card-base overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-700">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">
                    Gallery Name
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">
                    Type
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">
                    Photos
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">
                    Views
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">
                    Status
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">
                    Last Updated
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentGalleries.map((gallery) => (
                  <tr key={gallery.id} className="table-row">
                    <td className="py-4 px-6">
                      <div className="font-medium text-slate-900 dark:text-white">
                        {gallery.name}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`status-badge ${
                        gallery.type === 'Client Review' ? 'status-private' :
                        gallery.type === 'Public' ? 'status-active' :
                        gallery.type === 'Portfolio' ? 'status-private' :
                        'status-draft'
                      }`}>
                        {gallery.type}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                      {gallery.photos}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                      {gallery.views.toLocaleString()}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`status-badge ${
                        gallery.status === 'Active' || gallery.status === 'Published' 
                          ? 'status-active'
                          : 'status-draft'
                      }`}>
                        {gallery.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                      {gallery.lastUpdated}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button className="btn-icon">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="btn-icon btn-icon-success">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="btn-icon btn-icon-danger">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
