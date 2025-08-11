
import React from "react";
import { Edit, Grid, User } from "lucide-react"; 
import Headings from "../Common/Heading";
import Paragraph from "../Common/Paragraph";
import Button from "../Common/Button";
import { Link } from "react-router-dom";  



export default function Dashboard() {


  return (
    <div className="flex min-h-screen ">
      
      <aside className="w-64  bg-primary text-tertiary flex flex-col p-6">
        <Headings type="h4" className=" font-bold mb-10">Zarrin</Headings>
        <nav className="space-y-4">
          {["Dashboard", "Posts", "Categories", ].map((item) => (
          <Link to={`/Dashboard/${item}`} className={`block font-medium hover:text-secondary ${item === "Dashboard" }`}>{item}</Link>
          ))}
        </nav>
      </aside>

      
      <main className="flex-1 p-8">
        <Headings type="h4" className="text-2xl font-semibold">Dashboard</Headings>
        <Paragraph className="text-secondary mb-6">Home / Dashboard</Paragraph>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-primary p-6 rounded-xl flex items-center justify-between">
            <div className="text-tertiary">
              <Headings type="h4" >Posts</Headings>
              <Paragraph className=" text-2xl font-bold">10</Paragraph>
            </div >
            <Edit className="text-tertiary" size={32} />
          </div>

          <div className="bg-primary p-6 rounded-xl flex items-center justify-between">
            <div className="text-tertiary">
              <Headings type="h4">Categories</Headings>
              <Paragraph className=" text-2xl font-bold">3</Paragraph>
            </div>
            <Grid className="text-tertiary" size={32} />
          </div>

          <div className="bg-primary p-6 rounded-xl flex items-center justify-between">
            <div className="text-tertiary">
              <Headings type="h4">Users</Headings>
              <Paragraph className=" text-2xl font-bold">2</Paragraph>
            </div>
            <User className="text-tertiary" size={32} />
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-tertiary p-6 rounded-xl shadow">
            <Headings type="h4" className="text-lg font-semibold mb-4">Visitor Growth</Headings>
            <div className="flex space-x-4 mb-4">
              <Button variant={'primary'} className="bg-secondaryGray hover:bg-primary text-tertiary px-4 py-1 rounded-full" text={' Monthly'}/>
               
              
              <Button variant={'primary'} className="bg-secondaryGray hover:bg-primary text-tertiary px-4 py-1 rounded-full" text={' Yearly'}/>
               
             
            </div>
           
          </div>

          <div className="bg-tertiary  p-6 rounded-xl shadow md:col-span-1">
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