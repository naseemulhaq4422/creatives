import React from "react";
import Link from "next/link";
import { MessageCircle, Mail, Phone, Clock, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import { SITE_CONTACT, SERVICES_DATA, COURSES_DATA } from "@/data/siteContent";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080B11] border-t border-[#1E293B] text-[#94A3B8] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#1E293B]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#00F0FF] p-[1.5px]">
                <div className="w-full h-full bg-[#080B11] rounded-[7px] flex items-center justify-center">
                  <span className="font-bold text-base font-heading text-[#FFFFFF]">C</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-lg text-[#F8FAFC] tracking-tight font-heading block">
                  CREATIVES
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#94A3B8] uppercase block">
                  Digital Agency & Institute
                </span>
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              We engineer high-performance digital systems that help businesses scale and empower aspiring individuals to master modern technology from scratch.
            </p>

            <div className="space-y-2 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#10B981]/10 border border-[#10B981]/25 text-[#34D399] text-xs font-mono">
                <Zap className="w-3.5 h-3.5" />
                <span>{SITE_CONTACT.speedToLead}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#64748B]">
                <Clock className="w-3.5 h-3.5" />
                <span>{SITE_CONTACT.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Agency Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-semibold">
              Agency Solutions
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/#services"
                    className="hover:text-[#FFFFFF] transition-colors block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institute Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-semibold">
              Institute Programs
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/courses"
                  className="hover:text-[#00F0FF] text-[#38BDF8] font-medium transition-colors block py-0.5"
                >
                  ⚡ View All Courses & Catalog
                </Link>
              </li>
              {COURSES_DATA.map((course) => (
                <li key={course.id}>
                  <Link
                    href="/courses"
                    className="hover:text-[#FFFFFF] transition-colors block py-0.5"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-[#FFFFFF] transition-colors block py-0.5 text-[#64748B]"
                >
                  Admission FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-semibold">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={SITE_CONTACT.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#34D399] hover:underline font-medium"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{SITE_CONTACT.phoneDisplay} (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONTACT.emailUrl}
                  className="flex items-center gap-2 text-[#F8FAFC] hover:text-[#A78BFA] transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-[#8B5CF6]" />
                  <span>{SITE_CONTACT.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <Phone className="w-4 h-4 flex-shrink-0 text-[#00F0FF]" />
                  <span>{SITE_CONTACT.phoneInternational}</span>
                </div>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={SITE_CONTACT.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-[#111726] border border-[#1E293B] hover:border-[#10B981] text-[#F8FAFC] hover:text-[#34D399] text-xs font-medium transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 Creatives Digital Agency & Institute. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-[#94A3B8]">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              Official Verified Business & Institute
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
