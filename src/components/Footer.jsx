import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const today = new Date();
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        &copy; {today.getFullYear()+` `} 
        <a  class="hover:underline">
           abdulvahid™
        </a>
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
        <Link to='/'>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">
            Home
          </a>
          </Link>
        </li>
        <li>
        <Link to='/newPost'>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Add new Post
          </a>
          </Link>
        </li>
        <li>
        <Link to='/about'>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            About
          </a>
          </Link>
        </li>
        <li>
          <Link to='/about'>
          <a href="#" class="hover:underline">
            Contact
          </a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
