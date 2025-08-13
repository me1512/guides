"use client";

import { Link } from 'nextra-theme-docs';
import {  BiDownload,BiStar } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

export default function DochnvtxLanding() {

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 mb-8">
          <BiStar className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">Documentation Framework</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
            Clear Documentation
          </span>
          <br />
          <span className="text-4xl md:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-400-400 dark:to-purple-400 bg-clip-text text-transparent">
            Made Simple
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Create professional documentation websites with ease. Focus on your content while we handle the presentation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl dark:shadow-blue-500/25">
            <BiDownload className="w-5 h-5" />
            <Link className="no-underline hover:underline text-white" href="/docs">Get Started</Link>
            <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

    </div>
  );
}
