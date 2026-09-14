"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Star,
  Briefcase,
  TrendingUp,
  Clock,
  CheckCircle,
  Users,
  ArrowRight,
} from "lucide-react";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

interface Stats {
  totalInquiries: number;
  newInquiries: number;
  inProgress: number;
  completed: number;
  totalTestimonials: number;
  totalServices: number;
}

interface RecentInquiry {
  id: string;
  fullName: string;
  email: string;
  serviceRequired: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalInquiries: 0,
    newInquiries: 0,
    inProgress: 0,
    completed: 0,
    totalTestimonials: 0,
    totalServices: 0,
  });
  const [recentInquiries, setRecentInquiries] = useState<RecentInquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [inquirySnapshot, testimonialSnapshot, serviceSnapshot] = await Promise.all([
          getDocs(query(collection(firestore, "inquiries"), orderBy("createdAt", "desc"), limit(5))),
          getDocs(collection(firestore, "testimonials")),
          getDocs(query(collection(firestore, "services"), orderBy("order"))),
        ]);
        const inquiryData = inquirySnapshot.docs.map((document) => {
          const data = document.data();
          return {
            id: document.id,
            fullName: data.fullName || "",
            email: data.email || "",
            serviceRequired: data.serviceRequired || "",
            status: data.status || "new",
            createdAt: data.createdAt?.toDate?.().toISOString() || new Date().toISOString(),
          };
        });
        const allInquiries = (await getDocs(collection(firestore, "inquiries"))).docs.map((document) => document.data());
        setStats({
          totalInquiries: allInquiries.length,
          newInquiries: allInquiries.filter((item) => item.status === "new").length,
          inProgress: allInquiries.filter((item) => item.status === "in_progress").length,
          completed: allInquiries.filter((item) => item.status === "completed").length,
          totalTestimonials: testimonialSnapshot.size,
          totalServices: serviceSnapshot.docs.filter((document) => document.data().active !== false).length,
        });
        setRecentInquiries(inquiryData);
      } catch (error) {
        console.error("Error loading dashboard:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void loadDashboard();
  }, []);

  const statCards = [
    {
      title: "Total Inquiries",
      value: stats.totalInquiries,
      icon: MessageSquare,
      color: "bg-[#00AEEF]",
      href: "/admin/inquiries",
    },
    {
      title: "New",
      value: stats.newInquiries,
      icon: Clock,
      color: "bg-[#FFC107]",
      href: "/admin/inquiries?status=new",
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      icon: TrendingUp,
      color: "bg-[#14B8A6]",
      href: "/admin/inquiries?status=in_progress",
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: CheckCircle,
      color: "bg-[#22C55E]",
      href: "/admin/inquiries?status=completed",
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      new: "bg-blue-100 text-blue-700",
      contacted: "bg-yellow-100 text-yellow-700",
      in_progress: "bg-teal-100 text-teal-700",
      completed: "bg-green-100 text-green-700",
      closed: "bg-gray-100 text-gray-700",
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status] || styles.new}`}>
        {status.replace("_", " ")}
      </span>
    );
  };

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
          ))}
        </div>
        <div className="h-64 bg-gray-200 rounded-xl"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#0F2D5C]">Dashboard</h1>
        <p className="text-[#6B7280]">Welcome back! Here's an overview of your inquiries.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <Link
            key={stat.title}
            href={stat.href}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-[#6B7280] mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-[#0F2D5C]">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-[#00AEEF] group-hover:gap-2 transition-all">
              <span>View details</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link
          href="/admin/testimonials"
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div className="bg-[#FFC107]/20 p-3 rounded-lg">
              <Star className="w-6 h-6 text-[#FFC107]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0F2D5C]">{stats.totalTestimonials}</p>
              <p className="text-sm text-[#6B7280]">Testimonials</p>
            </div>
          </div>
        </Link>
        <Link
          href="/admin/services"
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div className="bg-[#14B8A6]/20 p-3 rounded-lg">
              <Briefcase className="w-6 h-6 text-[#14B8A6]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0F2D5C]">{stats.totalServices}</p>
              <p className="text-sm text-[#6B7280]">Active Services</p>
            </div>
          </div>
        </Link>
        <Link
          href="/admin/settings"
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div className="bg-[#0F2D5C]/10 p-3 rounded-lg">
              <Users className="w-6 h-6 text-[#0F2D5C]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0F2D5C]">1</p>
              <p className="text-sm text-[#6B7280]">Team Members</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Recent Inquiries */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#0F2D5C]">Recent Inquiries</h2>
          <Link href="/admin/inquiries" className="text-[#00AEEF] text-sm font-medium hover:underline">
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F5F9FF]">
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentInquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-[#F5F9FF]/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="font-medium text-[#0F2D5C]">{inquiry.fullName}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-[#6B7280]">{inquiry.email}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-[#6B7280]">{inquiry.serviceRequired}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(inquiry.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-[#6B7280] text-sm">
                      {new Date(inquiry.createdAt).toLocaleDateString()}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {recentInquiries.length === 0 && (
          <div className="p-12 text-center">
            <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-[#6B7280]">No inquiries yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
