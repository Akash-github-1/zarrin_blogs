import React, { useEffect, useState } from "react";
import { Edit, Grid, User } from "lucide-react"; 
import Headings from "../Common/Heading";
import Paragraph from "../Common/Paragraph";
import Button from "../Common/Button";

export default function Dashboard() {

  const [stats, setStats] = useState({
    posts: 0,
    categories: 0,
    users: 0
  });


  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/dashboard-stats"); 
        const data = await res.json();
        setStats(data); 
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-8">
        <Headings type="h4" className="text-2xl font-semibold">Dashboard</Headings>
        <Paragraph className="text-secondary mb-6">Home / Dashboard</Paragraph>

     
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-8">
          <div className="bg-primary p-6 rounded-xl flex items-center justify-between">
            <div className="text-tertiary">
              <Headings type="h4">Posts</Headings>
              <Paragraph className="text-2xl font-bold">{stats.posts}</Paragraph>
            </div>
            <Edit className="text-tertiary" size={32} />
          </div>

          <div className="bg-primary p-6 rounded-xl flex items-center justify-between">
            <div className="text-tertiary">
              <Headings type="h4">Categories</Headings>
              <Paragraph className="text-2xl font-bold">{stats.categories}</Paragraph>
            </div>
            <Grid className="text-tertiary" size={32} />
          </div>

          <div className="bg-primary p-6 rounded-xl flex items-center justify-between">
            <div className="text-tertiary">
              <Headings type="h4">Users</Headings>
              <Paragraph className="text-2xl font-bold">{stats.users}</Paragraph>
            </div>
            <User className="text-tertiary" size={32} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-tertiary p-6 rounded-xl shadow">
            <Headings type="h4" className="text-lg font-semibold mb-4">Visitor Growth</Headings>
            <div className="flex space-x-4 mb-4">
              <Button variant="primary" className="bg-secondaryGray hover:bg-primary text-tertiary px-4 py-1 rounded-full" text="Monthly"/>
              <Button variant="primary" className="bg-secondaryGray hover:bg-primary text-tertiary px-4 py-1 rounded-full" text="Yearly"/>
            </div>
          </div>

          <div className="bg-tertiary p-6 rounded-xl shadow md:col-span-1">
            <Headings type="h4" className="text-lg font-semibold mb-4">Latest Posts</Headings>
            <ul className="space-y-4 text-sm">
              <li>
                <Paragraph className="font-medium">The Power of Dream</Paragraph>
                <span className="text-secondary">28 June 2021</span>
              </li>
              <li>
                <Paragraph className="font-medium">Train</Paragraph>
                <span className="text-secondary">22 June 2021</span>
              </li>
              <li>
                <Paragraph className="font-medium">Works vs School</Paragraph>
                <span className="text-secondary">21 June 2021</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}