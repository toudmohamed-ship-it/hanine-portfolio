import { personalInfo } from '@/lib/data';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <p className="text-slate-500 text-sm">
                            &copy; {currentYear} {personalInfo.name}. All rights reserved.
                        </p>
                        <p className="text-slate-400 text-xs mt-1">
                            PhD Candidate at {personalInfo.university}
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hanine-toudghi" // Add LinkedIn if available, or just generic for now
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
