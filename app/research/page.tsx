import Link from 'next/link';
import { FileText, ArrowUpRight } from 'lucide-react';
import { researchInterests, projects } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Research & Projects',
    description: 'Explore proper research methodologies, projects, and academic interests including Digital Marketing Analytics and Consumer Behavior.',
};

export default function Research() {
    return (
        <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Header */}
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-serif font-medium text-slate-900 mb-6">Research</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        My research agenda focuses on the intersection of digital marketing analytics, consumer behavior, and sustainable practices in emerging markets.
                    </p>
                </div>

                {/* Interests */}
                <section>
                    <h2 className="text-2xl font-serif font-medium text-slate-900 mb-8">Research Interests</h2>
                    <div className="flex flex-wrap gap-3">
                        {researchInterests.map((interest, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-medium shadow-sm"
                            >
                                {interest}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Projects / Past Research */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-serif font-medium text-slate-900">Selected Projects & Reports</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-2 py-1 rounded">
                                        {project.category}
                                    </div>
                                </div>
                                <h3 className="text-xl font-medium text-slate-900 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    {project.description}
                                </p>
                                <div className="flex gap-4">
                                    <Link
                                        href={`/research/${project.slug}`}
                                        className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-indigo-600 transition-colors"
                                    >
                                        <ArrowUpRight className="mr-2 h-4 w-4" />
                                        View Details
                                    </Link>
                                    {project.file && (
                                        <Link
                                            href={project.file}
                                            target="_blank"
                                            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
                                        >
                                            <FileText className="mr-2 h-4 w-4" />
                                            Document
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
