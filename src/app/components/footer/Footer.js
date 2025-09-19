// src/app/components/footer/Footer.js
import Image from "next/image";
import { FaInstagram, FaFacebook, FaWhatsapp, FaViber } from "react-icons/fa";
import { SOCIAL_LINKS, FOOTER_LINKS, CONTACT_INFO } from "../../constants/constants";
import SectionTitle from "./SectionTitle";
import FooterLink from "./FooterLink";
import SocialIcon from "./SocialIcon";
import Head from "next/head";

export default function Footer() {
  return (
    <>
      <Head>
        <title>Salon Lepote Bucka | Kontakt i Brzi Linkovi</title>
        <meta
          name="description"
          content="Salon Lepote Bucka - Istaknite svoju lepotu uz našu profesionalnu negu. Posetite nas u Novom Sadu!"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Salon Lepote Bucka" />
        <meta
          property="og:description"
          content="Posetite Salon Lepote Bucka i uživajte u našim uslugama. Profesionalna nega kose i kože."
        />
        <meta
          property="og:image"
          content="/logo/logo192x192white.png"
        />
        <meta property="og:url" content="https://your-website-url.com" />
      </Head>
      <footer className="bg-gradient-to-br from-[#2c2c52] via-[#16213e] to-[#0f3460] text-white px-6 sm:px-12 md:px-24 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Branding */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <Image
              src="/logo/logo192x192white.png"
              alt="Salon Lepote Bucka"
              width={90}
              height={90}
              className="m-auto mb-5"
            />
            <p className="text-sm opacity-90 leading-relaxed">
              Istaknite svoju lepotu uz našu profesionalnu negu. Vaša kosa zaslužuje najbolje.
            </p>
            <div className="flex space-x-4 my-4">
              <SocialIcon
                href={SOCIAL_LINKS.instagram}
                color="#fff"
                icon={<FaInstagram size={24} />}
                label="Instagram Profile"
              />
              <SocialIcon
                href={SOCIAL_LINKS.facebook}
                color="#fff"
                icon={<FaFacebook size={24} />}
                label="Facebook Profile"
              />
              <SocialIcon
                href={SOCIAL_LINKS.whatsapp}
                color="#fff"
                icon={<FaWhatsapp size={24} />}
                label="WhatsApp Contact"
              />
              <SocialIcon
                href={SOCIAL_LINKS.viber}
                color="#fff"
                icon={<FaViber size={24} />}
                label="Viber Contact"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <SectionTitle>Brzi Linkovi</SectionTitle>
            <ul className="space-y-2 mt-4 text-sm opacity-90">
              <FooterLink href={FOOTER_LINKS.home}>Početna</FooterLink>
              <FooterLink href={FOOTER_LINKS.services}>Usluge</FooterLink>
              <FooterLink href={FOOTER_LINKS.about}>O Nama</FooterLink>
              <FooterLink href={FOOTER_LINKS.contact}>Kontakt</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <SectionTitle>Kontakt</SectionTitle>
            <ul className="space-y-2 mt-4 text-sm opacity-90">
              <FooterLink href={CONTACT_INFO.phone}>+381 69 116 8623</FooterLink>
              <FooterLink href={CONTACT_INFO.email}>dragana.bucka@gmail.com</FooterLink>
              <FooterLink href={CONTACT_INFO.address} target="_blank">
                1300 kaplara 12, Novi Sad
              </FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center text-sm opacity-80">
          <p className="mb-2">
            Salon Lepote Bucka © {new Date().getFullYear()}. Sva prava zadržana.
          </p>
          <div className="flex justify-center space-x-4">
            <FooterLink href="/politika-privatnosti">Politika Privatnosti</FooterLink>
            <FooterLink href="/uslovi-koriscenja">Uslovi Korišćenja</FooterLink>
          </div>
        </div>
      </footer>
    </>
  );
}
