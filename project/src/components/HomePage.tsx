import React from 'react';
import { Camera, Upload, Save, MessageCircle, Palette, ArrowRight, Sparkles, Paintbrush, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section with Enhanced Animation and Colors */}
      <div className="relative overflow-hidden bg-gradient-rainbow rainbow-animate rounded-[2.5rem] p-8 md:p-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-16" />
        <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent" />
        <div className="relative text-center text-white">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/30 rounded-full blur-lg animate-pulse" />
              <div className="absolute -inset-8 bg-white/20 rounded-full blur-xl animate-pulse-ring" />
              <Palette className="h-20 w-20 relative animate-float text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </div>
          </div>
          <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl mb-6 tracking-tight text-glow">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Palette</span>{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-200">Pro</span>
              <Sparkles className="absolute -right-8 -top-4 h-8 w-8 text-yellow-300 animate-pulse" />
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl sm:text-2xl md:text-3xl text-white leading-relaxed drop-shadow-lg">
            Unleash your creative vision with advanced color detection and professional palette creation tools.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/camera"
              className="group relative inline-flex items-center px-8 py-4 rounded-2xl bg-white/95 text-violet-600 font-semibold hover:bg-white transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              <Camera className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
              Start Detection
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/upload"
              className="group relative inline-flex items-center px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-lg text-white font-semibold hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] shadow-lg"
            >
              <Upload className="h-6 w-6 mr-3 group-hover:-translate-y-1 transition-transform" />
              Upload Image
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Features Grid with More Colors */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: Camera,
            title: "Pro Color Detection",
            description: "Industry-leading color detection powered by advanced AI. Identify colors with unmatched precision and accuracy.",
            link: "/camera",
            linkText: "Start detecting",
            gradient: "from-pink-500 to-rose-500",
            hoverGradient: "from-pink-50 to-rose-50"
          },
          {
            icon: Paintbrush,
            title: "Smart Palettes",
            description: "Create stunning color combinations with our intelligent palette generator. Perfect for any design project.",
            link: "/palettes",
            linkText: "Explore palettes",
            gradient: "from-violet-500 to-purple-500",
            hoverGradient: "from-violet-50 to-purple-50"
          },
          {
            icon: Layers,
            title: "Pro Collections",
            description: "Organize and manage your color collections like a pro. Access your palettes anywhere, anytime.",
            link: "/collections",
            linkText: "View collections",
            gradient: "from-blue-500 to-cyan-500",
            hoverGradient: "from-blue-50 to-cyan-50"
          }
        ].map((feature, index) => (
          <div key={index} className="group relative bg-white rounded-[2rem] shadow-xl p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.hoverGradient} rounded-[2rem] opacity-0 group-hover:opacity-0 transition-opacity`} />
            <div className="relative">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
              <Link
                to={feature.link}
                className="mt-8 inline-flex items-center font-medium group/link"
                style={{
                  background: `linear-gradient(to right, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {feature.linkText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced AI Assistant Section with Rainbow Gradient */}
      <div className="relative bg-gradient-rainbow rainbow-animate rounded-[2rem] overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-16" />
        <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent" />
        <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-white">
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-white/30 rounded-full blur-lg animate-pulse" />
                <MessageCircle className="h-10 w-10 relative" />
              </div>
              <h2 className="ml-4 text-3xl font-bold text-glow">Pro Color Assistant</h2>
            </div>
            <p className="text-white/90 text-xl leading-relaxed max-w-2xl drop-shadow-lg">
              Get expert color advice, instant palette suggestions, and professional guidance from our advanced AI assistant. Perfect for designers and color enthusiasts.
            </p>
          </div>
          <Link
            to="/chat"
            className="group relative inline-flex items-center px-8 py-4 rounded-2xl bg-white/95 text-violet-600 font-semibold hover:bg-white transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] shadow-lg whitespace-nowrap overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            <MessageCircle className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
            Chat with Pro Assistant
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Enhanced Stats Section with Rainbow Gradients */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "1M+", label: "Colors Analyzed", gradient: "from-pink-500 to-rose-500" },
          { value: "50K+", label: "Pro Users", gradient: "from-violet-500 to-purple-500" },
          { value: "100K+", label: "Pro Palettes", gradient: "from-blue-500 to-cyan-500" },
          { value: "24/7", label: "Pro Support", gradient: "from-emerald-500 to-teal-500" }
        ].map((stat, index) => (
          <div key={index} className="group relative">
            <div className={`absolute -inset-1 bg-gradient-to-br ${stat.gradient} rounded-[1.5rem] blur opacity-25 group-hover:opacity-75 transition duration-200`} />
            <div className="relative bg-white rounded-[1.5rem] p-8 text-center shadow-lg">
              <div 
                className="text-4xl font-bold mb-2"
                style={{
                  background: `linear-gradient(to right, ${stat.gradient.split(' ')[1]}, ${stat.gradient.split(' ')[3]})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;