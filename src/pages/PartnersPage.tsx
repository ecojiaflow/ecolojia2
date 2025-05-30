import React from 'react';
import { Building2, Award, Globe2, Leaf, Handshake as HandShake, ExternalLink } from 'lucide-react';

const PartnersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-eco-gradient">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-eco-text mb-6">
              Nos <span className="text-eco-leaf">Partenaires</span>
            </h1>
            <p className="text-lg md:text-xl text-eco-text/80 max-w-3xl mx-auto">
              Découvrez les entreprises et organisations qui s'engagent avec nous pour un avenir plus durable.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PartnerCard
              icon={<Building2 className="h-8 w-8" />}
              name="EcoVert Industries"
              type="Fabricant"
              description="Leader dans la production de matériaux écologiques et biodégradables."
              link="#"
            />
            <PartnerCard
              icon={<Globe2 className="h-8 w-8" />}
              name="Terra Solutions"
              type="Distribution"
              description="Réseau de distribution spécialisé dans les produits durables et éthiques."
              link="#"
            />
            <PartnerCard
              icon={<Award className="h-8 w-8" />}
              name="Bio Cert"
              type="Certification"
              description="Organisme de certification pour les produits biologiques et écologiques."
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-eco-text mb-4">
                  Devenez Partenaire
                </h2>
                <p className="text-eco-text/80 mb-6">
                  Rejoignez notre écosystème de partenaires engagés pour la promotion de produits éco-responsables.
                </p>
                <button className="btn-primary inline-flex items-center">
                  <HandShake className="mr-2 h-5 w-5" />
                  Nous Contacter
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <Leaf className="h-32 w-32 text-eco-leaf opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-eco-glow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-eco-text mb-12 text-center">
            Avantages du Partenariat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              title="Visibilité Accrue"
              description="Accédez à notre communauté engagée et augmentez votre visibilité auprès d'un public ciblé."
            />
            <BenefitCard
              title="Support Technique"
              description="Bénéficiez de notre expertise et de nos outils pour optimiser votre présence sur la plateforme."
            />
            <BenefitCard
              title="Réseau d'Excellence"
              description="Intégrez un réseau de partenaires partageant les mêmes valeurs et engagements écologiques."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface PartnerCardProps {
  icon: React.ReactNode;
  name: string;
  type: string;
  description: string;
  link: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ icon, name, type, description, link }) => {
  return (
    <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
      <div className="text-eco-leaf mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-eco-text mb-2">{name}</h3>
      <span className="inline-block bg-eco-glow/20 text-eco-olive px-3 py-1 rounded-full text-sm mb-4">
        {type}
      </span>
      <p className="text-eco-text/70 mb-4">{description}</p>
      <a
        href={link}
        className="inline-flex items-center text-eco-leaf hover:text-eco-text transition-colors"
      >
        En savoir plus
        <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-sm">
      <h3 className="text-xl font-semibold text-eco-text mb-3">{title}</h3>
      <p className="text-eco-text/70">{description}</p>
    </div>
  );
};

export default PartnersPage;