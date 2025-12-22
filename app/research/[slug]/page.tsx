import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, FileText, Calendar, Tag, CheckCircle } from 'lucide-react';
import { projects } from '@/lib/data';

// Define params type for Next.js dynamic route
// Note: In Next.js 15+ params should be awaited if we were using them in async function, but for static generation or client components...
// Sticking to standard usage, but Next.js 15 might require params to be treated as Promise.
// Let's use standard async page component.

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            type: 'article',
        },
    };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    // Await params for safe future-proofing in newer Next.js versions
    const { slug } = await params;

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Fallback if tools not defined (though we defined them)
    const projectTools = project.tools || [];

    return (
        <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Back Button */}
                <Link
                    href="/research"
                    className="inline-flex items-center text-slate-500 hover:text-slate-800 transition-colors mb-8"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research
                </Link>

                {/* Header */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                    <div className="p-8 md:p-12 space-y-6">
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1">
                                <Tag className="h-4 w-4" /> {project.category}
                            </span>
                            {/* Could add date here if available */}
                            {/* <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 2024</span> */}
                        </div>

                        <h1 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 leading-tight">
                            {project.title}
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed">
                            {project.description}
                        </p>

                        {project.file && (
                            <div className="pt-4">
                                <Link
                                    href={project.file}
                                    target="_blank"
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
                                >
                                    <FileText className="mr-2 h-5 w-5" />
                                    View Full Document
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Main Overview */}
                    <div className="md:col-span-2 space-y-8">
                        <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <h2 className="text-2xl font-serif font-medium text-slate-900 mb-4">Project Overview</h2>
                            <div className="prose prose-slate text-slate-600 leading-relaxed">
                                {/* Rendering overview paragraphs if split, or just text */}
                                <p>{project.overview}</p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / Tools */}
                    <div className="space-y-6">
                        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h2 className="text-lg font-serif font-medium text-slate-900 mb-4">Tools & Methods</h2>
                            {projectTools.length > 0 ? (
                                <ul className="space-y-3">
                                    {projectTools.map((tool, idx) => (
                                        <li key={idx} className="flex items-start text-slate-600 text-sm">
                                            <CheckCircle className="h-4 w-4 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                                            {tool}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-slate-500 text-sm italic">No specific tools listed.</p>
                            )}
                        </section>
                    </div>

                </div>

            </div>
        </div>
    );
}
