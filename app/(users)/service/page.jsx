"use client";
import React from 'react';
import { easeInOut, motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: "Hello, Framer Motion!",
    role: "Frontend Developer",
    skills: "React & TypeScript",
    image: "/avatar1.png",
    type: "image"
  },
  {
    id: 2,
    name: "Workstation",
    role: "Creative Space",
    skills: "Design & Code",
    image: "/workstation.png",
    type: "full-image"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Backend Developer",
    skills: "Node.js & Python",
    initials: "MJ",
    color: "bg-purple-100 text-purple-600",
    type: "avatar"
  },
  {
    id: 4,
    name: "Emily Wilson",
    role: "Product Manager",
    skills: "Strategy & Analytics",
    initials: "EW",
    color: "bg-pink-100 text-pink-600",
    type: "avatar"
  },
  {
    id: 5,
    name: "David Lee",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    initials: "DL",
    color: "bg-orange-100 text-orange-600",
    type: "avatar"
  },
  {
    id: 6,
    name: "Anna Brown",
    role: "QA Engineer",
    skills: "Testing & Automation",
    initials: "AB",
    color: "bg-teal-100 text-teal-600",
    type: "avatar"
  }
];

const Service = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileTap={{scale:1.1}}
          transition={{duration:0.2, ease:easeInOut}}
          className="text-4xl md:text-5xl font-bold text-center text-green-200 mb-16"
        >
          Our Team
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col items-center justify-center p-8 transition-all duration-300"
            >
              {member.type === 'full-image' ? (
                <div className="w-full h-full -m-8 relative min-h-[300px]">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    {member.type === 'image' ? (
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-50 shadow-inner">
                        <Image 
                          src={member.image} 
                          alt={member.name}
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold ${member.color}`}>
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-gray-500 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.skills}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;