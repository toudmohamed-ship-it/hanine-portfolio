import { personalInfo } from '@/lib/data';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">

                <div className="p-8 md:p-12 space-y-8">
                    <div>
                        <h1 className="text-4xl font-serif font-medium text-slate-900 mb-4">Get in Touch</h1>
                        <p className="text-lg text-slate-600">
                            I am available for academic collaborations, conference discussions, and teaching opportunities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-b border-slate-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-slate-100 p-3 rounded-full text-slate-900">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-slate-900">Email</h3>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="text-slate-900 hover:text-slate-600 transition-colors mt-1 block font-medium"
                                >
                                    {personalInfo.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-slate-100 p-3 rounded-full text-slate-900">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-slate-900">University</h3>
                                <p className="text-slate-600 mt-1">
                                    {personalInfo.university}
                                </p>
                                <p className="text-slate-500 text-sm">{personalInfo.location}</p>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <h3 className="text-xl font-medium text-slate-900">Send a Message</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border"
                                placeholder="How can we collaborate?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}
