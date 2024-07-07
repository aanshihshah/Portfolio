"use client"
import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { VscProject } from "react-icons/vsc";
import Cards from "./cards";
import { useState } from "react";


export default function Navbar() {
   const skills = [
      {
         Pname: "HTML",
         desc: "HTML (HyperText Markup Language) is the standard language for creating web pages and web applications.",
         image:"/html.jpg"
      },
      {
         Pname: "CSS",
         desc: "CSS (Cascading Style Sheets) is used for describing the presentation of a document written in HTML or XML, including colors, layout, and fonts.",
         image:"/css.jpg"
      },
      {
         Pname: "JavaScript",
         desc: "JavaScript is a programming language that enables interactive elements and dynamic content on web pages.",
         image:"/js.jpg"
      },
      {
         Pname: "PHP",
         desc: "PHP is a server-side scripting language designed for web development to produce dynamic web pages and interact with databases.",
         image:"/php.jpg"
      },
      {
         Pname: "Python",
         desc: "Python is a versatile high-level programming language known for its readability and ease of use, used in web development, scientific computing, and more.",
         image:"/python.jpg"
      },
      {
         Pname: "MySQL",
         desc: "MySQL is an open-source relational database management system that uses SQL (Structured Query Language) for managing and manipulating data.",
         image:"/mysql.jpg"
      },
      {
         Pname: "Laravel",
         desc: "Laravel is a PHP framework for web artisans, providing elegant syntax and tools for building modern PHP applications using MVC architechtur.",
         image:"/laravel.jpg"
      },
      {
         Pname: "C",
         desc: "C is a general-purpose programming language known for its efficiency and flexibility, widely used for system software and application development.",
         image:"/c.jpg"
      },
      {
         Pname: "C++",
         desc: "C++ is a powerful, general-purpose programming language based on C, known for its performance and object-oriented features.",
         image:"/c++.jpg"
      },
      {
         Pname: "Next.js",
         desc: "Next.js is a React framework that enables functionality like server-side rendering and generating static websites for React-based applications.",
         image:"/nextjs.jpg"
      }
   ];
   const project = [
      {
         Pname: "KrushiSahayak",
         desc: "KrushiSahayak is website which provide farmers multiple features like weather forcast which gives the day by day weather reports ,Carting which provides farmers to buy the products and Scanning systems which scan the crops using ML algorithms and give  the report.",
         image:"/krushi.jpg"
      },
      {
         Pname: "Cafexcel",
         desc: "Cafexcel is multi-vendor cafe management system which provides user to order foods from many cafes, Book the table and Payemnt service. all of this data contains in single website.",
         image:"/cafexcel.jpg"
      },
      {
         Pname: "Book-Rental System ",
         desc: "The book rental system is a PHP-based website that enables users to rent books from multiple bookstores. Each bookstore has its own admin who has the authority to manage the delivery of rented books and ban specific books from being rented. The system also handles payment processing.   ",
         image:"/book.jpg"
      },
      
   ];
   const [isOpen, setIsOpen] = useState(false);

const[skill,setSkill]=useState(true)
const[proj,setProj]=useState(true)



  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
   <>

   
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start rtl:justify-end">
        <button onClick={toggleSidebar} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-900 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <a href="https://flowbite.com" class="flex ms-2 md:me-24">
          <img src="/animal-2028258_640.png" class="h-8 me-3" alt="FlowBite Logo" />
          <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Portfolio</span>
        </a>
      </div>
      <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div>
              <button type="button" class="flex text-sm bg-gray-900 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                 
              </button>
            </div>
            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>

<aside id="logo-sidebar"  className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
         isOpen ? '' : '-translate-x-full'
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-900 dark:border-gray-900`} aria-label="Sidebar">
   <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-900">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" onClick={()=>{setProj(true);setSkill(true)}}class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <MdDashboardCustomize />
               <span class="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <button href="#" onClick={()=>{setProj(false);setSkill(true)}} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 group">
            <BsFire />
               <span class="flex-1 ms-3 whitespace-nowrap">Skill</span>
            </button>
         </li>
         <li>
            <a href="#"   onClick={()=>{setSkill(false);setProj(true)}}class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 group">
            <VscProject />
               <span class="flex-1 ms-3 whitespace-nowrap">Project</span>
              
            </a>
         </li>
         <li>
            <a href="https://github.com/aanshihshah" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 group">
            <FaGithub />
               <span class="flex-1 ms-3 whitespace-nowrap">GitHub</span>
            </a>
         </li>
         <li>
            <a href="https://www.linkedin.com/in/aanshi-shah-5a03b4275/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 group">
            <FaLinkedin />

               <span class="flex-1 ms-3 whitespace-nowrap">LinkDin</span>
            </a>
         </li>
         <li>
            <a href="https://stackoverflow.com/users/26134469/aanshi-shah" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 group">
               
            <ImStackoverflow />
               <span class="flex-1 ms-3 whitespace-nowrap">StackOverflow</span>
            </a>
         </li>
         <li>
            <a href="https://www.instagram.com/_aanshi.s_?igsh=cGY4aXZkZDh3anAx" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 group">
            <FaInstagram />
               <span class="flex-1 ms-3 whitespace-nowrap">Instragram</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<div class="p-4 sm:ml-64 mt-14">
   
<a href="#" class="flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-violet-900 dark:hover:bg-violet-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/profile.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h4 class="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">Aanshi Shah</h4>
        <p class="mb-3 font-normal text-gray-50 dark:text-gray-50">I hold a Bachelor's degree (BCA) from GLS University, where I studied various programming languages, including C, C++, Python, Java, Joomla, PHP, and database management system. Currently, I am pursuing a Master's in Computer Applications (MCA) at LJ University, where I have further expanded my programming skills. I have completed multiple projects in PHP and Laravel, including a PHP-based cafe multi-vendor management system named Cafexcel and a Laravel-based book rental system.</p>
    </div>
</a>

{skill?<><h5 class="mb-2 text-3xl font-bold tracking-tight text-white dark:text-gray mt-5 flex items-center "><BsFire/>Skills</h5>
{ <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
       {skills.map((data) => (
            <Cards name={data.Pname} desc={data.desc} image={data.image} />
          ))}

</div> }</>:null


}

{proj?<><h5 class="mb-2 text-3xl font-bold tracking-tight text-white dark:text-gray mt-5 flex items-center "><VscProject />Projects</h5>
{ <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
           {project.map((data) => (
            <Cards name={data.Pname} desc={data.desc} image={data.image} />
          ))}

</div> }</>:null
}
   </div>
    </>
  
    
  );
}
