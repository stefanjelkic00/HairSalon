import ContactClient from './ContactClient';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 md:pt-4 text-center bg-gradient-to-b from-white to-[#F7F2FF]"
    >
      <div className="max-w-4xl mx-auto">

        <ContactClient />
      </div>
    </section>
  );
}
