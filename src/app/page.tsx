import NameForm from '@/components/Forms/NameForm';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <main className="">
        
        <NameForm />
      </main>
   <Footer />
    </div>
  );
}
