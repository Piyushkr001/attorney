// import {useTranslations} from 'next-intl';
// import {Link} from '@/i18n/routing';
import BlogSection from '@/components/patterns/BlogSection';
import HeroSection from '@/components/patterns/HeroMain';
import ComplimentaryServices from '@/components/patterns/Services';
 
export default function HomePage() {
  // const t = useTranslations('HomePage');
  return (
    <>
    <div>
      <HeroSection />
    </div>
    <ComplimentaryServices />
    <BlogSection/>
    </>
  );
}