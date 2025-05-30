'use client';

import React from 'react';
import { Leaf, Mail, Heart, Shield } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-green-500" />
              <span className="ml-2 text-xl font-semibold text-green-600">Ecolojia</span>
            </div>
            <p className="text-gray-600 text-sm">
              Platform for eco-responsible product search for a more sustainable and ethical future.
            </p>
            <div className="mt-4 flex space-x-4">
              <SocialIcon icon="facebook" />
              <SocialIcon icon="twitter" />
              <SocialIcon icon="instagram" />
              <SocialIcon icon="linkedin" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/products" text="Products" />
              <FooterLink href="/categories" text="Categories" />
              <FooterLink href="/about" text="About" />
              <FooterLink href="/blog" text="Blog" />
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/legal/terms" text="Terms of Use" />
              <FooterLink href="/legal/privacy" text="Privacy Policy" />
              <FooterLink href="/legal/cookies" text="Cookie Policy" />
              <FooterLink href="/legal/notice" text="Legal Notice" />
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Stay informed about the latest eco-responsible products and our advice.
            </p>
            <form className="mt-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 flex-1"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors flex items-center"
                >
                  <Mail size={16} />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                By subscribing, you accept our GDPR privacy policy.
              </p>
            </form>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
            <Shield size={16} className="mr-2" />
            Certifications & Partners
          </h3>
          <div className="flex flex-wrap gap-4">
            <CertificationBadge name="AB Agriculture Biologique" />
            <CertificationBadge name="Ecocert" />
            <CertificationBadge name="FSC" />
            <CertificationBadge name="Cruelty Free" />
            <CertificationBadge name="1% for the Planet" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Ecolojia. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2 sm:mt-0 flex items-center">
            <Heart size={14} className="text-green-500 mr-1" />
            Made with love for the planet
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-600 hover:text-green-600 text-sm transition-colors"
      >
        {text}
      </Link>
    </li>
  );
};

interface SocialIconProps {
  icon: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  return (
    <a
      href="#"
      className="text-gray-400 hover:text-green-600 transition-colors"
      aria-label={`Ecolojia on ${icon}`}
    >
      <span className="sr-only">{icon}</span>
      <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-green-500">
        <span className="text-sm">{icon.charAt(0).toUpperCase()}</span>
      </div>
    </a>
  );
};

interface CertificationBadgeProps {
  name: string;
}

const CertificationBadge: React.FC<CertificationBadgeProps> = ({ name }) => {
  return (
    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700">
      {name}
    </div>
  );
};

export default Footer;