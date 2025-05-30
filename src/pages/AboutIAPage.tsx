import React from 'react';
import { Brain, Cpu, Shield, Users, Leaf, ExternalLink } from 'lucide-react';

const AboutIAPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-eco-gradient">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-eco-text mb-6">
              L'Intelligence Artificielle chez <span className="text-eco-leaf">Ecolojia</span>
            </h1>
            <p className="text-lg md:text-xl text-eco-text/80 max-w-3xl mx-auto">
              Découvrez comment nous utilisons l'IA de manière éthique et responsable pour vous aider à faire des choix plus durables.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-eco-leaf" />}
              title="Analyse Intelligente"
              description="Notre IA analyse en profondeur chaque produit pour évaluer son impact environnemental et social."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-eco-leaf" />}
              title="Vérification Éthique"
              description="Nous vérifions rigoureusement les certifications et les pratiques des fabricants."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-eco-leaf" />}
              title="Recommandations Personnalisées"
              description="Des suggestions adaptées à vos préférences et à vos valeurs environnementales."
            />
          </div>

          {/* How It Works */}
          <div className="bg-eco-glow/10 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-eco-text mb-8">Comment ça marche ?</h2>
            <div className="space-y-6">
              <ProcessStep
                number="01"
                title="Collecte des Données"
                description="Nous rassemblons des informations détaillées sur chaque produit, incluant sa composition, son origine et ses certifications."
              />
              <ProcessStep
                number="02"
                title="Analyse IA"
                description="Notre algorithme évalue chaque aspect du produit selon des critères stricts de durabilité et d'éthique."
              />
              <ProcessStep
                number="03"
                title="Vérification Humaine"
                description="Une équipe d'experts vérifie et valide les analyses de l'IA pour garantir la précision des informations."
              />
              <ProcessStep
                number="04"
                title="Mise à Jour Continue"
                description="Les données sont régulièrement mises à jour pour refléter les dernières informations disponibles."
              />
            </div>
          </div>

          {/* Commitment Section */}
          <div className="text-center max-w-3xl mx-auto">
            <Leaf className="h-12 w-12 text-eco-leaf mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-eco-text mb-4">Notre Engagement</h2>
            <p className="text-eco-text/80 mb-8">
              Nous nous engageons à utiliser l'IA de manière responsable et transparente, 
              toujours dans l'objectif de promouvoir un mode de vie plus durable et respectueux 
              de l'environnement.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-eco-leaf hover:text-eco-text transition-colors font-medium"
            >
              En savoir plus sur notre charte éthique
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-eco-text mb-3">{title}</h3>
      <p className="text-eco-text/70">{description}</p>
    </div>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 bg-eco-leaf text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-eco-text mb-2">{title}</h3>
        <p className="text-eco-text/70">{description}</p>
      </div>
    </div>
  );
};

export default AboutIAPage;