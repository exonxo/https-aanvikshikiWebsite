'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router';
import { LinkedinIcon, TwitterIcon, YoutubeIcon, GlobeIcon } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  external?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Services',
    links: [
      { title: 'Structured Problem Analysis', href: '/services' },
      { title: 'AI Readiness & Integration', href: '/services' },
      { title: 'Decision Architecture', href: '/services' },
      { title: 'Responsible AI', href: '/services' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Our Approach', href: '/approach' },
      { title: 'Work', href: '/work' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { title: 'Start a Conversation', href: '/contact' },
      { title: 'Get in Touch', href: '/contact' },
    ],
  },
  {
    label: 'Follow',
    links: [
      { title: 'LinkedIn', href: '#', external: true, icon: LinkedinIcon },
      { title: 'Twitter / X', href: '#', external: true, icon: TwitterIcon },
      { title: 'YouTube', href: '#', external: true, icon: YoutubeIcon },
      { title: 'Website', href: '/', external: false, icon: GlobeIcon },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="relative w-full flex flex-col items-center justify-center border-t px-6 py-12 lg:py-16"
      style={{
        backgroundColor: '#121212',
        borderColor: '#222222',
        background:
          'radial-gradient(35% 128px at 50% 0%, rgba(255,92,0,0.08), transparent), #121212',
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur"
        style={{
          height: '1px',
          width: '33%',
          backgroundColor: 'rgba(255,92,0,0.3)',
        }}
      />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8" style={{ maxWidth: '1200px' }}>
        {/* Branding */}
        <AnimatedContainer className="space-y-4">
          <div className="flex flex-col gap-2">
            <span
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '20px',
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              Aanvikshiki
            </span>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '13px',
                color: '#666666',
                lineHeight: 1.5,
              }}
            >
              Structured thinking. Applied AI.
            </p>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '12px',
                color: '#444444',
                marginTop: '24px',
              }}
            >
              © {new Date().getFullYear()} Aanvikshiki. All rights reserved.
            </p>
          </div>
        </AnimatedContainer>

        {/* Link columns */}
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.08}>
              <div className="mb-10 md:mb-0">
                <h3
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '11px',
                    color: '#888888',
                    letterSpacing: '1.5px',
                    fontWeight: 600,
                  }}
                >
                  {section.label.toUpperCase()}
                </h3>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      {link.external || link.href.startsWith('#') ? (
                        <a
                          href={link.href}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1.5 transition-colors duration-200"
                          style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: '13px',
                            color: '#666666',
                            textDecoration: 'none',
                          }}
                          onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF')
                          }
                          onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.color = '#666666')
                          }
                        >
                          {link.icon && <link.icon className="size-3.5" />}
                          {link.title}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="inline-flex items-center gap-1.5 transition-colors duration-200"
                          style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: '13px',
                            color: '#666666',
                            textDecoration: 'none',
                          }}
                          onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF')
                          }
                          onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.color = '#666666')
                          }
                        >
                          {link.icon && <link.icon className="size-3.5" />}
                          {link.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
