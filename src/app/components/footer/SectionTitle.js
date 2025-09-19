// src/app/components/footer/SectionTitle.js
export default function SectionTitle({ children }) {
  return (
    <h3 className="text-lg sm:text-xl font-semibold border-b border-white/30 pb-1 mb-1">
      {children}
    </h3>
  );
}
