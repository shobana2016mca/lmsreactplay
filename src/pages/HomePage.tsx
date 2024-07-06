import AboutUsSection from '../components/ui/AboutUsSection';
import FeaturesSection from '../components/ui/FeaturesSection';
import HeroSection from '../components/ui/HeroSection';

export default function HomePage() {
  return (
    <main>
      <main className={'space-y-12'}>
        <HeroSection />
        <FeaturesSection />
        <AboutUsSection />
      </main>
    </main>
  );
}
