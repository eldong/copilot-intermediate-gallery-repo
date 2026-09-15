import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
}

export function SectionContainer({ 
  children, 
  className = "", 
  bgColor = "" 
}: SectionContainerProps) {
  return (
    <section className={`py-16 px-4 ${bgColor} ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
}
