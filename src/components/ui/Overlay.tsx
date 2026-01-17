import { useOverlay } from '../../context/OverlayContext'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { GeminiTerminal } from './GeminiTerminal'

export const Overlay = () => {
    const { overlay, setOverlay } = useOverlay()

    const content = {
        projects: (
            <div className="p-8">
                <h2 className="text-4xl font-bold mb-6 text-cyan-400">GITHUB PROJECTS</h2>
                <div className="mb-6">
                    <a
                        href="https://github.com/sametuca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg text-cyan-400 hover:text-cyan-300 transition"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        github.com/sametuca
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* AwesomeCV Maker */}
                    <a
                        href="https://github.com/sametuca/awesomecvmaker"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/50 p-5 border border-cyan-500/30 rounded-lg hover:border-cyan-400 hover:bg-black/70 transition cursor-pointer group"
                    >
                        <div className="h-24 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 mb-4 rounded flex items-center justify-center">
                            <span className="text-cyan-400 font-mono text-3xl group-hover:scale-110 transition">📄</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">AwesomeCV Maker</h3>
                        <p className="text-gray-300 text-sm mb-3">Modern CV oluşturma platformu. React + Vite ile geliştirilmiş, kullanıcı dostu arayüz ile profesyonel CV'ler oluşturun.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded">React</span>
                            <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">Vite</span>
                            <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">TypeScript</span>
                        </div>
                    </a>

                    {/* Space */}
                    <a
                        href="https://github.com/sametuca/Space"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/50 p-5 border border-purple-500/30 rounded-lg hover:border-purple-400 hover:bg-black/70 transition cursor-pointer group"
                    >
                        <div className="h-24 bg-gradient-to-br from-purple-900/30 to-pink-900/30 mb-4 rounded flex items-center justify-center">
                            <span className="text-purple-400 font-mono text-3xl group-hover:scale-110 transition">⚡</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Space Mediator</h3>
                        <p className="text-gray-300 text-sm mb-3">High-performance, source-generator powered mediator framework for .NET. Runtime reflection'sız, minimal boilerplate ile extensible pipeline modeli.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">C#</span>
                            <span className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded">.NET</span>
                            <span className="text-xs bg-pink-900/50 text-pink-300 px-2 py-1 rounded">Source Generator</span>
                        </div>
                    </a>

                    {/* Cspdf */}
                    <a
                        href="https://github.com/sametuca/Cspdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/50 p-5 border border-red-500/30 rounded-lg hover:border-red-400 hover:bg-black/70 transition cursor-pointer group"
                    >
                        <div className="h-24 bg-gradient-to-br from-red-900/30 to-orange-900/30 mb-4 rounded flex items-center justify-center">
                            <span className="text-red-400 font-mono text-3xl group-hover:scale-110 transition">📑</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Cspdf</h3>
                        <p className="text-gray-300 text-sm mb-3">Comprehensive PDF library for .NET. PDF dokümanları oluşturma, okuma ve manipüle etme. Ticari PDF kütüphanelerine tam özellikli alternatif.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded">C#</span>
                            <span className="text-xs bg-orange-900/50 text-orange-300 px-2 py-1 rounded">.NET</span>
                            <span className="text-xs bg-yellow-900/50 text-yellow-300 px-2 py-1 rounded">PDF</span>
                        </div>
                    </a>

                    {/* Suneon UI Angular */}
                    <a
                        href="https://github.com/sametuca/suneon-ui-angular"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/50 p-5 border border-pink-500/30 rounded-lg hover:border-pink-400 hover:bg-black/70 transition cursor-pointer group"
                    >
                        <div className="h-24 bg-gradient-to-br from-pink-900/30 to-rose-900/30 mb-4 rounded flex items-center justify-center">
                            <span className="text-pink-400 font-mono text-3xl group-hover:scale-110 transition">🎨</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Suneon UI Angular</h3>
                        <p className="text-gray-300 text-sm mb-3">Suneon projesinin resmi frontend repository'si. Angular Signals ile reactive data management. Clean ve maintainable codebase.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-pink-900/50 text-pink-300 px-2 py-1 rounded">Angular</span>
                            <span className="text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded">TypeScript</span>
                            <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">Signals</span>
                        </div>
                    </a>

                    {/* Chat2DB */}
                    <a
                        href="https://github.com/sametuca/Chat2DB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/50 p-5 border border-green-500/30 rounded-lg hover:border-green-400 hover:bg-black/70 transition cursor-pointer group"
                    >
                        <div className="h-24 bg-gradient-to-br from-green-900/30 to-emerald-900/30 mb-4 rounded flex items-center justify-center">
                            <span className="text-green-400 font-mono text-3xl group-hover:scale-110 transition">🤖</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Chat2DB</h3>
                        <p className="text-gray-300 text-sm mb-3">Intelligent SQL client ve reporting tool. ChatGPT entegrasyonu ile akıllı veritabanı yönetimi. Versatile ve general-purpose.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded">SQL</span>
                            <span className="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded">ChatGPT</span>
                            <span className="text-xs bg-teal-900/50 text-teal-300 px-2 py-1 rounded">Database</span>
                        </div>
                    </a>
                </div>
            </div>
        ),
        cv: (
            <div className="p-8">
                <h2 className="text-4xl font-bold mb-6 text-green-400">RESUME</h2>
                <div className="space-y-8 text-gray-200">
                    <div className="border-l-2 border-green-500 pl-4">
                        <h3 className="text-2xl font-bold text-white">Senior Creative Developer</h3>
                        <p className="text-green-400">Tech Corp | 2020 - Present</p>
                        <ul className="list-disc list-inside mt-2 text-sm opacity-80 space-y-1">
                            <li>Led the development of 3D product configurators.</li>
                            <li>Optimized WebGL performance by 40%.</li>
                            <li>Mentored junior developers in standard React practices.</li>
                        </ul>
                    </div>
                    <div className="border-l-2 border-green-500/50 pl-4">
                        <h3 className="text-2xl font-bold text-white">Frontend Developer</h3>
                        <p className="text-green-400">Digital Agency | 2018 - 2020</p>
                        <p className="mt-2 text-sm opacity-80">Built award-winning microsites for global brands.</p>
                    </div>
                </div>
            </div>
        ),
        contact: (
            <div className="p-8">
                <h2 className="text-4xl font-bold mb-6 text-purple-400">INFO</h2>
                <div className="space-y-6">
                    <div className="bg-black/50 border border-purple-500/30 p-6 rounded">
                        <h3 className="text-3xl font-bold text-white mb-2">Samet Uca</h3>
                        <p className="text-xl text-purple-400 mb-4">Full Stack Developer</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-purple-900/50 text-purple-300 px-3 py-1 rounded">JavaScript</span>
                            <span className="text-xs bg-blue-900/50 text-blue-300 px-3 py-1 rounded">TypeScript</span>
                            <span className="text-xs bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded">React</span>
                            <span className="text-xs bg-green-900/50 text-green-300 px-3 py-1 rounded">Node.js</span>
                            <span className="text-xs bg-orange-900/50 text-orange-300 px-3 py-1 rounded">CSS</span>
                            <span className="text-xs bg-pink-900/50 text-pink-300 px-3 py-1 rounded">OOP</span>
                            <span className="text-xs bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded">Three.js</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/50 border border-purple-500/30 p-4 rounded hover:border-purple-400 transition">
                            <h3 className="text-sm text-gray-400 mb-2">Email</h3>
                            <a href="mailto:sametuca@hotmail.com" className="text-white hover:text-purple-400 transition break-all">sametuca@hotmail.com</a>
                        </div>
                        <div className="bg-black/50 border border-purple-500/30 p-4 rounded hover:border-purple-400 transition">
                            <h3 className="text-sm text-gray-400 mb-2">LinkedIn</h3>
                            <a href="https://linkedin.com/in/sametuca" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition">sametuca</a>
                        </div>
                        <div className="bg-black/50 border border-purple-500/30 p-4 rounded hover:border-purple-400 transition">
                            <h3 className="text-sm text-gray-400 mb-2">Instagram</h3>
                            <a href="https://instagram.com/sametuca" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition">@sametuca</a>
                        </div>
                        <div className="bg-black/50 border border-purple-500/30 p-4 rounded hover:border-purple-400 transition">
                            <h3 className="text-sm text-gray-400 mb-2">Twitter</h3>
                            <a href="https://twitter.com/sametuca_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition">@sametuca_</a>
                        </div>
                    </div>
                </div>
            </div>
        ),
        certificates: (
            <div className="p-8">
                <h2 className="text-4xl font-bold mb-6 text-yellow-500">CERTIFICATES</h2>
                <div className="space-y-4">
                    {[
                        {
                            title: "Back-End Development with .NET",
                            issuer: "Microsoft",
                            date: "Mar 2025",
                            id: "IQX9NXOB0PSW",
                            color: "text-blue-400",
                            border: "border-blue-500/30"
                        },
                        {
                            title: "Full-Stack Development",
                            issuer: "Microsoft",
                            date: "Mar 2025",
                            id: "OOTDG9SY4PVM",
                            color: "text-blue-400",
                            border: "border-blue-500/30"
                        },
                        {
                            title: "Introduction to Software Engineering (Honors)",
                            issuer: "IBM",
                            date: "Mar 2025",
                            id: "QM7QEY3ZF14X",
                            color: "text-indigo-400",
                            border: "border-indigo-500/30"
                        },
                        {
                            title: "Back-End Development",
                            issuer: "Meta",
                            date: "Aug 2023",
                            id: "G64JYK478BF8",
                            skills: ["ASP NET Core", "JavaScript", "C#"],
                            color: "text-cyan-400",
                            border: "border-cyan-500/30"
                        },
                        {
                            title: "Problem Solving Certificate",
                            issuer: "HackerRank",
                            date: "May 2023",
                            id: "b36dcaeda104",
                            color: "text-green-400",
                            border: "border-green-500/30"
                        }
                    ].map((cert, i) => (
                        <div key={i} className={`bg-black/50 p-5 border ${cert.border} rounded-lg group hover:bg-black/70 transition`}>
                            <div>
                                <h3 className={`text-xl font-bold ${cert.color}`}>{cert.title}</h3>
                                <p className="text-white text-sm font-medium">{cert.issuer}</p>
                                <p className="text-gray-400 text-xs mt-1">Issued {cert.date}</p>
                                <p className="text-gray-500 text-xs">Credential ID {cert.id}</p>
                                {cert.skills && (
                                    <div className="flex gap-2 mt-3">
                                        {cert.skills.map(skill => (
                                            <span key={skill} className="text-[10px] bg-gray-800 text-gray-300 px-2 py-0.5 rounded border border-gray-700">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        terminal: <GeminiTerminal />,
        none: null
    }

    return (
        <AnimatePresence>
            {overlay !== 'none' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a12] border border-white/10 rounded-xl shadow-2xl shadow-cyan-500/10"
                    >
                        <button
                            onClick={() => setOverlay('none')}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-10"
                        >
                            <X size={24} />
                        </button>
                        {content[overlay]}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
