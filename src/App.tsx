import {useState} from 'react';
import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {LibraryShowcase} from './components/LibraryShowcase';
import {FeaturesBento} from './components/FeaturesBento';
import {SubjectCoverage} from './components/SubjectCoverage';
import {TestimonialsAndFaq} from './components/TestimonialsAndFaq';
import {Footer} from './components/Footer';
import {SampleReaderModal} from './components/SampleReaderModal';
import type {PublicationItem, ResourceCategory} from './data/upscCatalog';

export default function App() {
  const [selectedSample, setSelectedSample] = useState<PublicationItem | null>(
    null,
  );
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>('all');

  const handleSelectCategoryFromFeature = (
    category: 'ebooks' | 'magazines' | 'newspapers',
  ) => {
    setActiveCategory(category);
    const el = document.getElementById('library');
    el?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesBento onSelectCategory={handleSelectCategoryFromFeature} />
        <LibraryShowcase
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onOpenSample={setSelectedSample}
        />
        <SubjectCoverage />
        <TestimonialsAndFaq />
      </main>
      <Footer />
      <SampleReaderModal
        item={selectedSample}
        onClose={() => setSelectedSample(null)}
      />
    </div>
  );
}
