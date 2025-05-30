'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    setCurrentLang(lng);
    const newPath = pathname?.replace(/^\/(fr|en)/, `/${lng}`);
    router.push(newPath || `/${lng}`);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-eco-text hover:text-eco-leaf transition-colors p-2 rounded-lg hover:bg-eco-glow/10"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Change language"
      >
        <Globe size={20} />
        <span className="uppercase font-medium">{currentLang}</span>
      </button>
      
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transform origin-top-right transition-all z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-1" role="none">
            <button
              className={`w-full text-left px-4 py-2 text-sm ${
                currentLang === 'fr' 
                  ? 'text-eco-leaf bg-eco-glow/10 font-medium' 
                  : 'text-eco-text hover:text-eco-leaf hover:bg-eco-glow/10'
              } transition-colors`}
              onClick={() => changeLanguage('fr')}
              role="menuitem"
            >
              Français
            </button>
            <button
              className={`w-full text-left px-4 py-2 text-sm ${
                currentLang === 'en' 
                  ? 'text-eco-leaf bg-eco-glow/10 font-medium' 
                  : 'text-eco-text hover:text-eco-leaf hover:bg-eco-glow/10'
              } transition-colors`}
              onClick={() => changeLanguage('en')}
              role="menuitem"
            >
              English
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;