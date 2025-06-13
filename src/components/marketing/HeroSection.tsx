import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Sparkles,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import DemoVideoModal from "./DemoVideoModal";

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-linkedin-surface via-[rgb(var(--grey-100))] to-linkedin-surface py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[rgb(var(--blue-primary))]/10 to-[rgb(var(--blue-accent))]/5 rounded-full mix-blend-multiply filter blur-3xl animate-linkedin-fade"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[rgb(var(--blue-accent))]/10 to-[rgb(var(--blue-primary))]/5 rounded-full mix-blend-multiply filter blur-3xl animate-linkedin-fade"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating elements */}
        <div
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-[rgb(var(--blue-primary))] rounded-full opacity-20 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-[rgb(var(--blue-accent))] rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[rgb(var(--blue-primary))] rounded-full opacity-25 animate-bounce"
          style={{ animationDelay: "5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[rgb(var(--blue-primary))]/10 to-[rgb(var(--blue-accent))]/10 text-[rgb(var(--blue-primary))] text-sm font-medium mb-8 animate-fade-in border border-[rgb(var(--blue-primary))]/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Trusted by 15,000+ LinkedIn creators worldwide
            <TrendingUp className="w-4 h-4 ml-2" />
          </div>

          {/* Main headline */}
          <h1 className="text-linkedin-h1 text-[rgb(var(--grey-900))] mb-6 leading-tight animate-slide-up max-w-5xl mx-auto">
            Build Your Personal Brand on{" "}
            <span className="bg-gradient-to-r from-[rgb(var(--blue-primary))] to-[rgb(var(--blue-accent))] bg-clip-text text-transparent font-bold">
              LinkedIn
            </span>{" "}
            with AI-Powered Tools
          </h1>

          {/* Enhanced subheadline */}
          <p
            className="text-linkedin-body text-linkedin-secondary mb-8 max-w-4xl mx-auto animate-slide-up leading-relaxed"
            style={{ animationDelay: "200ms" }}
          >
            Transform your LinkedIn presence with our comprehensive suite of AI
            tools. Create viral content, schedule posts effortlessly, and build
            meaningful connections that drive real business growth.
          </p>

          {/* Key benefits */}
          <div
            className="flex flex-wrap justify-center items-center gap-6 mb-10 animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center text-linkedin-secondary">
              <Zap className="w-5 h-5 mr-2 text-[rgb(var(--blue-primary))]" />
              <span className="font-medium">10x Faster Content Creation</span>
            </div>
            <div className="flex items-center text-linkedin-secondary">
              <Users className="w-5 h-5 mr-2 text-[rgb(var(--blue-primary))]" />
              <span className="font-medium">3x More Engagement</span>
            </div>
            <div className="flex items-center text-linkedin-secondary">
              <TrendingUp className="w-5 h-5 mr-2 text-[rgb(var(--blue-primary))]" />
              <span className="font-medium">5x ROI Growth</span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up"
            style={{ animationDelay: "600ms" }}
          >
            <Button
              size="lg"
              className="btn-linkedin-primary focus-linkedin px-8 py-4 text-lg font-semibold shadow-linkedin hover:shadow-linkedin-hover group relative overflow-hidden"
              onClick={() => navigate("/signup")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--blue-accent))] to-[rgb(var(--blue-primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-[rgb(var(--blue-primary))] text-[rgb(var(--blue-primary))] hover:bg-[rgb(var(--blue-primary))]/5 focus-linkedin animate-linkedin-hover group"
              onClick={() => setModalOpen(true)}
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div
            className="flex flex-col items-center space-y-6 animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            <p className="text-linkedin-muted text-sm font-medium">
              Join 15,000+ successful creators
            </p>

            {/* User avatars with enhanced styling */}
            <div className="flex items-center -space-x-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(var(--blue-primary))] to-[rgb(var(--blue-accent))] border-3 border-white shadow-lg animate-scale-in hover:scale-110 transition-transform duration-200 cursor-pointer"
                  style={{ animationDelay: `${800 + i * 100}ms` }}
                />
              ))}
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(var(--grey-200))] to-[rgb(var(--grey-300))] border-3 border-white flex items-center justify-center text-sm font-bold text-[rgb(var(--grey-700))] shadow-lg animate-scale-in hover:scale-110 transition-transform duration-200 cursor-pointer"
                style={{ animationDelay: "1400ms" }}
              >
                +15K
              </div>
            </div>

            {/* Social proof stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[rgb(var(--blue-primary))]">
                  500M+
                </div>
                <div className="text-sm text-linkedin-muted">
                  Posts Generated
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[rgb(var(--blue-primary))]">
                  98%
                </div>
                <div className="text-sm text-linkedin-muted">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[rgb(var(--blue-primary))]">
                  24/7
                </div>
                <div className="text-sm text-linkedin-muted">AI Support</div>
              </div>
            </div>
          </div>

          {/* Enhanced Product Preview */}
          <div
            className="mt-20 animate-slide-up"
            style={{ animationDelay: "1000ms" }}
          >
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-linkedin-surface via-white to-[rgb(var(--grey-100))] rounded-3xl shadow-linkedin-hover p-8 border border-[rgb(var(--grey-300))] backdrop-blur-sm">
                <div className="bg-gradient-to-br from-[rgb(var(--blue-primary))] via-[rgb(var(--blue-accent))] to-[rgb(var(--blue-primary))] h-80 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-pulse"></div>
                  <div className="text-center z-10">
                    <Sparkles className="w-16 h-16 text-white mb-4 mx-auto animate-bounce" />
                    <span className="text-white text-3xl font-bold">
                      AI-Powered Dashboard
                    </span>
                    <p className="text-white/80 mt-2">Coming to life...</p>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-[rgb(var(--blue-accent))] to-[rgb(var(--blue-primary))] rounded-2xl flex items-center justify-center text-white font-bold animate-linkedin-fade shadow-lg">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div
                className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-[rgb(var(--blue-primary))] to-[rgb(var(--blue-accent))] rounded-2xl flex items-center justify-center text-white font-bold animate-linkedin-fade shadow-lg"
                style={{ animationDelay: "1.2s" }}
              >
                <Zap className="w-8 h-8" />
              </div>
              <div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[rgb(var(--blue-accent))] to-[rgb(var(--blue-primary))] rounded-2xl flex items-center justify-center text-white font-bold animate-linkedin-fade shadow-lg"
                style={{ animationDelay: "1.4s" }}
              >
                <Users className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DemoVideoModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};
