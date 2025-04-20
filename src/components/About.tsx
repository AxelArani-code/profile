"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://i.pinimg.com/736x/7c/41/e4/7c41e4190c20cbaa17af1ded167c773d.jpg",
    "https://i.pinimg.com/736x/e1/9d/01/e19d015faeb0d615e09762e52d4e98d2.jpg",
    "https://i.pinimg.com/736x/e0/03/f1/e003f1b164316afed4e7e81a2a79a47a.jpg",
    "https://i.pinimg.com/736x/6a/29/90/6a2990768755e53ce2e33f0b1625ebf2.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>
      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
        Hello! I&apos;m Axel Aranibar, a full-stack and Android developer with a lifelong passion for learning and creating technological solutions.
        </Paragraph>
        <Paragraph className=" mt-4">
        My programming journey began over two years ago with Java in Android Studio, where I developed various mobile projects that allowed me to gain experience in the Android ecosystem.
        </Paragraph>

        <Paragraph className=" mt-4">
        Over time, my curiosity led me to the world of web development. In college, I acquired basic knowledge in HTML, CSS, and PHP, but it was working with modern frameworks that truly captured my attention.
        </Paragraph>
        <Paragraph className=" mt-4">
        Today I specialize in technologies such as React.js, Next.js, and use MongoDB as a database, focusing on building dynamic, efficient, and modern web applications, both client-side and server-side.
        </Paragraph>
        <Paragraph className=" mt-4">
        I&apos;m constantly evolving, always looking to learn something new and grow as a professional in this vast world of programming.
        </Paragraph>
       
       
      </div>
    </div>
  );
}
