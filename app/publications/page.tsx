import { publications } from '@/lib/data';
import { FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Publications',
    description: 'List of academic publications, working papers, and articles under review by Hanine Toudghi.',
};

export default function Publications() {
    return (
        <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">

                <div className="border-b border-slate-200 pb-8">
                    <h1 className="text-4xl font-serif font-medium text-slate-900 mb-4">Publications</h1>
                    <p className="text-xl text-slate-600">
                        A list of my current working papers and articles under review.
                    </p>
                </div>

                <section className="space-y-8">
                    <h2 className="text-2xl font-serif font-medium text-slate-900">Working Papers</h2>
                    <div className="space-y-6">
                        {publications.filter(p => p.status === 'Working Paper').map((pub, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-medium text-slate-900">{pub.title}</h3>
                                    <p className="text-slate-600 italic">{pub.authors.join(', ')}</p>
                                    <div className="flex items-center gap-4 text-sm text-slate-500 mt-2">
                                        <span>{pub.year}</span>
                                        <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                                        <span>{pub.type}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {publications.filter(p => p.status === 'Working Paper').length === 0 && (
                            <p className="text-slate-500 italic">No working papers listed at this time.</p>
                        )}
                    </div>
                </section>

                <section className="space-y-8">
                    <h2 className="text-2xl font-serif font-medium text-slate-900">Under Review</h2>
                    <div className="space-y-6">
                        {/* Dynamic filtering if data existed, for now placeholder or generic filter */}
                        {publications.filter(p => p.status === 'Under Review').length > 0 ? (
                            publications.filter(p => p.status === 'Under Review').map((pub, idx) => (
                                <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                                    <h3 className="text-lg font-medium text-slate-900">{pub.title}</h3>
                                    {/* ... details */}
                                </div>
                            ))
                        ) : (
                            <p className="text-slate-500 italic">No articles currently listed under review.</p>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
