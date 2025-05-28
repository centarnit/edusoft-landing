import { BenefitsSection } from '@/components/layout/sections/benefits';
import { ContactSection } from '@/components/layout/sections/contact';
import { FAQSection } from '@/components/layout/sections/faq';
import { FeaturesSection } from '@/components/layout/sections/features';
import { FooterSection } from '@/components/layout/sections/footer';
import { HeroSection } from '@/components/layout/sections/hero';
import { PricingSection } from '@/components/layout/sections/pricing';
import { ServicesSection } from '@/components/layout/sections/services';
import { TeamSection } from '@/components/layout/sections/team';
import { TestimonialSection } from '@/components/layout/sections/testimonial';

export const metadata = {
  title: 'EduSoft - School Management System',
  description: 'School management system for educational institutions',
  openGraph: {
    type: 'website',
    url: 'https://github.com/centarnit/edusoft-landing.git',
    title: 'EduSoft - School Management System',
    description: 'School management system for educational institutions',
  },
  twitter: {
    site: 'https://github.com/centarnit/edusoft-landing.git',
    title: 'EduSoft - School Management System',
    description: 'School management system for educational institutions',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      {/* <TeamSection /> */}
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
