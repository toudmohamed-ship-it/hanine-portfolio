import { teaching } from '@/lib/data';
import { BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Teaching Experience',
    description: 'Hanine Toudghi\'s teaching philosophy and experience as a Teaching Assistant at Al Akhawayn University.',
};

export default function Teaching() {
    return (
        <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Teaching Philosophy */}
                <section className="space-y-6">
                    <h1 className="text-4xl font-serif font-medium text-slate-900">Teaching</h1>
                    <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
                        <h2 className="text-2xl font-serif font-medium text-slate-900 mb-4">Teaching Philosophy</h2>
                        <p className="text-slate-600 leading-relaxed">
                            I believe in fostering an interactive and inclusive learning environment where critical thinking connects with practical application. My approach integrates data-driven insights with marketing theory to prepare students for the evolving digital landscape.
                        </p>
                    </div>
                </section>

                {/* Experience */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-serif font-medium text-slate-900">Teaching Experience</h2>
                    <div className="space-y-6">
                        {teaching.map((role, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-medium text-slate-900 flex items-center gap-2">
                                            <BookOpen className="h-5 w-5 text-indigo-600" />
                                            {role.role}
                                        </h3>
                                        <p className="text-lg text-slate-700">{role.university}</p>
                                    </div>
                                    <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                                        {role.period}
                                    </span>
                                </div>

                                <ul className="list-disc list-inside space-y-2 text-slate-600 ml-1">
                                    {role.responsibilities.map((resp, rIdx) => (
                                        <li key={rIdx}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
