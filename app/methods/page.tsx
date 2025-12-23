import { skills } from '@/lib/data';
import { Database, TrendingUp, Code } from 'lucide-react';

export default function Methods() {
    return (
        <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-16">

                <div className="max-w-3xl">
                    <h1 className="text-4xl font-serif font-medium text-slate-900 mb-6">Methods & Skills</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        My methodological toolkit is designed for rigorous quantitative research and data-driven marketing insights.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Research Methods */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-slate-100 rounded-lg text-slate-900">
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-serif font-medium text-slate-900">Research Methods</h2>
                        </div>
                        <ul className="space-y-3">
                            {skills.methods.map((item, idx) => (
                                <li key={idx} className="flex items-center text-slate-700 bg-slate-50 px-4 py-3 rounded-md border border-slate-100">
                                    <span className="w-2 h-2 bg-slate-600 rounded-full mr-3"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tools & Software */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-slate-100 rounded-lg text-slate-900">
                                <Database className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-serif font-medium text-slate-900">Tools</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.tools.map((item, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded text-slate-700 font-medium text-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-slate-100 rounded-lg text-slate-900">
                                <TrendingUp className="h-6 w-6" /> {/* Reusing icon or import new one like Users */}
                            </div>
                            <h2 className="text-2xl font-serif font-medium text-slate-900">Soft Skills</h2>
                        </div>
                        <ul className="space-y-3">
                            {skills.softSkills.map((item, idx) => (
                                <li key={idx} className="flex items-center text-slate-700">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Languages or Other Skills (if any) */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-slate-100 rounded-lg text-slate-900">
                                <Code className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-serif font-medium text-slate-900">Languages</h2>
                        </div>
                        <ul className="space-y-3">
                            {skills.languages.map((item, idx) => (
                                <li key={idx} className="text-slate-700 border-b border-slate-100 pb-2">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
