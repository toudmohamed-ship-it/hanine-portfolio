import { Download } from 'lucide-react';

export default function CV() {
    return (
        <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="max-w-4xl w-full space-y-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <h1 className="text-4xl font-serif font-medium text-slate-900">Curriculum Vitae</h1>
                    <a
                        href="/cv.pdf"
                        download
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                    >
                        <Download className="mr-2 h-5 w-5" />
                        Download CV
                    </a>
                </div>

                <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-200">
                    <iframe
                        src="/cv.pdf"
                        className="w-full h-[800px] rounded"
                        title="CV Preview"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
