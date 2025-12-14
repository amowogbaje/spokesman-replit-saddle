import React, { useState, useEffect } from 'react';
import {
    Heart,
    Droplets,
    Users,
    Hand,
    ChevronDown,
    Menu,
    X,
    ArrowRight,
    MapPin,
    Calendar,
    Coffee,
    PlayCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Types & Data ---



// --- Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "inline-flex items-center justify-center px-8 py-3 text-base font-bold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg focus:ring-blue-500",
        secondary: "bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-900 focus:ring-gray-900",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900",
        ghost: "bg-transparent text-gray-600 hover:text-blue-600 hover:bg-blue-50"
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

const SectionTitle = ({ subtitle, title, align = 'center' }) => (
    <div className={`mb-12 ${align === 'left' ? 'text-left' : 'text-center'} max-w-4xl mx-auto`}>
        <span className="block text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">{subtitle}</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">{title}</h2>
        <div className={`h-1.5 w-20 bg-blue-600 mt-6 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
);

const Card = ({ icon: Icon, title, desc }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
            <Icon size={24} strokeWidth={2.5} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
);

export default function WelcomePage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('new');

    // Handle scroll effects for nav bar
    // Scroll to hash on initial load
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });

                setActiveSection(id);
            }
        }
    }, []);


    const scrollToSection = (id) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            // Offset for sticky header
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* --- 1. New to Spokesman? (Hero) --- */}
            <section id="new" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="leadership.jpg"
                        alt="People gathering"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/30"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 pt-20 text-center text-white">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-semibold tracking-wide mb-6 animate-fade-in-up">
                        WELCOME HOME
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
                        New to Spokesman? <br />
                        <span className="text-blue-400">You belong here.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We are a community of real people moving toward a real Jesus. No perfect people allowed.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="primary" onClick={() => scrollToSection('follow-jesus')} className="w-full sm:w-auto text-lg px-10">
                            Start Your Journey
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto text-lg">
                            <a href='/watch' className='inline-flex items-center gap-2'><PlayCircle size={20} /> Watch Latest Service</a>
                        </Button>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70 cursor-pointer" onClick={() => scrollToSection('follow-jesus')}>
                        <ChevronDown size={32} />
                    </div>
                </div>
            </section>

            {/* --- 2. I Want to Follow Jesus --- */}
            <section id="follow-jesus" className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative order-2 lg:order-1">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="reading_bible.jpg"
                                    alt="Reading Bible"
                                    className="w-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block max-w-xs">
                                <p className="font-bold text-lg mb-1">"I have decided..."</p>
                                <p className="text-blue-100 text-sm">The most important decision you will ever make.</p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <SectionTitle align="left" subtitle="Step One" title="I Want to Follow Jesus" />
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Life wasn't meant to be lived alone or without purpose. Following Jesus isn't about religion; it's about a relationship. It's about accepting grace, finding forgiveness, and walking in a new direction.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Whether you're returning to faith or discovering it for the first time, we want to help you take that first step.
                            </p>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1"><Heart size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Make the decision</h4>
                                        <p className="text-sm text-gray-500">Pray a simple prayer of surrender.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1"><Coffee size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Talk to someone</h4>
                                        <p className="text-sm text-gray-500">We'd love to hear your story.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <Button
                                    className="gap-2"
                                >
                                    <a
                                        href="https://wa.me/2347035613959?text=I%20would%20like%20to%20commit%20my%20life"
                                        target="_blank"
                                        className='inline-flex items-center gap-2'
                                        rel="noopener noreferrer"
                                    >
                                        Commit My Life <ArrowRight size={18} />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. I Want to Get Baptized --- */}
            <section id="get-baptized" className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
                        <Droplets className="text-cyan-300 mr-2" size={24} />
                        <span className="font-bold text-cyan-100">Public Declaration</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">I Want to Get Baptized</h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Baptism is an outward sign of an inward change. It's a celebration of new life! If you've made the decision to follow Jesus, baptism is your next step.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                        {[
                            { title: "Sign Up", desc: "Let us know you're ready to take the plunge." },
                            { title: "Attend Class", desc: "A short 30-min session to explain the meaning." },
                            { title: "Celebrate", desc: "Invite friends and family to your big day." }
                        ].map((step, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition">
                                <div className="text-4xl font-black text-white/20 mb-2">0{idx + 1}</div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-white/60 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <Button variant="secondary" className="bg-white text-blue-900 border-none hover:bg-cyan-50">
                        <a
                            href="https://wa.me/2347035613959?text=I%20want%20to%20schedule%20my%20baptism"
                            target="_blank"
                            className='inline-flex items-center gap-2'
                            rel="noopener noreferrer"
                        >Schedule My Baptism</a>

                    </Button>
                </div>
            </section>

            {/* --- 4. I Want to Find Community --- */}
            <section id="find-community" className="py-24 bg-stone-50">
                <div className="container mx-auto px-6">
                    <SectionTitle subtitle="Life Together" title="I Want to Find Community" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
                        <div className="col-span-1 lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 flex flex-col md:flex-row">
                            <div className="md:w-1/2 h-64 md:h-auto">
                                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" alt="Group of friends" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-10 flex flex-col justify-center md:w-1/2">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Groups</h3>
                                <p className="text-gray-600 mb-6">
                                    We are better together. Join a small group to build lasting friendships, study the Bible, and do life with people who care.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {['Men', 'Women', 'Couples', 'Singles', 'Young Adults'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold uppercase rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <button className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2">Find a Group <ArrowRight size={16} /></button>
                            </div>
                        </div>

                        <div className="bg-blue-600 rounded-3xl p-10 text-white flex flex-col justify-between shadow-xl">
                            <div>
                                <Users size={40} className="mb-6 opacity-80" />
                                <h3 className="text-2xl font-bold mb-4">Events & Gatherings</h3>
                                <p className="text-blue-100 mb-6">Check out what's happening this week at Spokesman.</p>
                            </div>
                            <Button variant="outline" className="w-full border-blue-400 text-white hover:bg-blue-500 hover:border-blue-500">
                                <a
                                    href="/events"
                                    target="_blank"
                                    className='inline-flex items-center gap-2'
                                    rel="noopener noreferrer"
                                >View Calendar</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. I Want to Start Volunteering --- */}
            <section id="start-volunteering" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <SectionTitle subtitle="Serve Others" title="I Want to Start Volunteering" />

                    <div className="flex flex-col-reverse lg:flex-row items-center gap-16 mt-12">
                        <div className="w-full lg:w-1/2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Card icon={PlayCircle} title="Production & Social Media" desc="Cameras, Audio, Lighting, Social Media Stage Design." />
                                <Card icon={Heart} title="Spokesman Kids" desc="Nursery, Elementary, Check-in assistance." />
                                <Card icon={Hand} title="Guest Services" desc="Greeters & Meeters, Ushers, Parking Team." />
                                <Card icon={MapPin} title="Outreach" desc="Resource Center, Medicare Services, Charity Events." />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <img
                                src="volunteer2.JPG"
                                alt="Volunteers High Five"
                                className="rounded-3xl shadow-2xl mb-8 rotate-2 hover:rotate-0 transition-transform duration-500"
                            />
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Make a Difference</h3>
                            <p className="text-lg text-gray-600 mb-8">
                                We don't just go to church; we are the church. Volunteering is the best way to meet people and use your gifts to make an impact.
                            </p>
                            <Button variant="primary" className="w-full sm:w-auto">
                                Join the Team
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}