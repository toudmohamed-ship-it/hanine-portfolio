import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText, Database, TrendingUp } from 'lucide-react';
import { personalInfo, researchInterests, projects, skills } from '@/lib/data';
import { FadeIn } from '@/components/ui/FadeIn';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-slate-100/50" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-10">
            <FadeIn className="space-y-6" delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-slate-900 leading-[1.1] tracking-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-600 font-light">
                {personalInfo.title} at <span className="font-medium text-slate-800">{personalInfo.university}</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                {personalInfo.shortBio}
              </p>
            </FadeIn>

            <FadeIn className="flex flex-wrap gap-4" delay={0.2}>
              <Link
                href="/research"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
              >
                View Research
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
              <Link
                href="/cv"
                className="inline-flex items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
              >
                Curriculum Vitae
                <FileText className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </FadeIn>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <FadeIn delay={0.3} className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-slate-200 rounded-full transform translate-x-4 translate-y-4"></div>
              <Image
                src="/avatar.jpg"
                alt={personalInfo.name}
                fill
                className="rounded-full object-cover shadow-lg border-4 border-white"
                priority
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16" delay={0.2}>
            <h2 className="text-3xl font-serif font-medium text-slate-900">Research Focus</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Exploring the intersection of digital analytics and consumer behavior.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchInterests.map((interest, index) => (
              <FadeIn
                key={index}
                delay={0.1 * index}
                className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-2 w-12 bg-slate-800 mb-6 rounded-full"></div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{interest}</h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-12" delay={0.2}>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-serif font-medium text-slate-900">Featured Research</h2>
              <p className="mt-4 text-lg text-slate-600">
                Highlights from my recent academic work and project reports.
              </p>
            </div>
            <Link
              href="/research"
              className="hidden md:inline-flex items-center text-slate-900 font-medium hover:text-slate-700 transition-colors"
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, idx) => (
              <FadeIn key={idx} delay={0.2 + (idx * 0.1)} className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-xs font-semibold tracking-wider text-slate-700 uppercase bg-slate-100 px-3 py-1 rounded w-fit mb-4">
                  {project.category}
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <Link
                  href={`/research/${project.slug}`}
                  className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors inline-flex items-center"
                >
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link
              href="/research"
              className="inline-flex items-center text-slate-900 font-medium hover:text-slate-700 transition-colors"
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Methodological Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="max-w-3xl mb-12" delay={0.2}>
            <h2 className="text-3xl font-serif font-medium text-slate-900">Methodological Expertise</h2>
            <p className="mt-4 text-lg text-slate-600">
              Proficient in advanced quantitative methods and analytical tools.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn className="space-y-8" delay={0.3}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 rounded-xl text-slate-900">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-slate-900">Core Methods</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.methods.slice(0, 4).map((method, idx) => (
                  <span key={idx} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-700 text-sm font-medium">
                    {method}
                  </span>
                ))}
                <Link href="/methods" className="px-4 py-2 text-slate-900 text-sm font-medium hover:bg-slate-100 rounded-full transition-colors">
                  + More
                </Link>
              </div>
            </FadeIn>

            <FadeIn className="space-y-8" delay={0.4}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 rounded-xl text-slate-900">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-slate-900">Key Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.slice(0, 5).map((tool, idx) => (
                  <span key={idx} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-700 text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quick Links / CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <FadeIn className="max-w-4xl mx-auto text-center space-y-8" delay={0.2}>
          <h2 className="text-3xl font-serif font-medium text-slate-900">Get in Touch</h2>
          <p className="text-lg text-slate-600">
            I am always open to discussing research collaborations and academic opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Contact Me
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
