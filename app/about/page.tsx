import { personalInfo, education } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Learn about Hanine Toudghi\'s academic background, research interests in AI & Marketing, and education at ENCG Settat and Al Akhawayn University.',
};

export default function About() {
    return (
        <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Biography Section */}
                <section className="space-y-6">
                    <h1 className="text-4xl font-serif font-medium text-slate-900">About Me</h1>
                    <div className="prose prose-lg prose-slate text-slate-600">
                        {personalInfo.longBio.map((paragraph, idx) => (
                            <p key={idx} className="mb-4 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-serif font-medium text-slate-900 border-b border-slate-200 pb-2">
                        Education
                    </h2>
                    <div className="space-y-8">
                        {education.map((edu, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                <div>
                                    <h3 className="text-xl font-medium text-slate-900">{edu.degree}</h3>
                                    <p className="text-lg text-slate-700">{edu.university}</p>
                                    {edu.details && (
                                        <p className="text-slate-500 mt-1">{edu.details}</p>
                                    )}
                                    {edu.grade && (
                                        <p className="text-sm font-medium text-slate-700 mt-1">{edu.grade}</p>
                                    )}
                                </div>
                                <div className="text-slate-500 font-medium whitespace-nowrap bg-slate-100 px-3 py-1 rounded-full text-sm self-start">
                                    {edu.year}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
