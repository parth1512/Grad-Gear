// components/HowItWorks.tsx
// The 5-step process explanation section
import React from 'react';
import '../styles/HowItWorks.css';

interface StepProps {
  number: string;
  title: string;
  description: string;
  highlight?: string;
}

const Step: React.FC<StepProps> = ({ number, title, description, highlight }) => {
  const formattedTitle = highlight 
    ? title.replace(highlight, `<span class="highlight">${highlight}</span>`)
    : title;
    
  return (
    <div className="step-card">
      <div className="step-header">
        <span className="step-number">STEP {number}</span>
        <span className="check-icon">✓</span>
      </div>
      <h3 className="step-title" dangerouslySetInnerHTML={{ __html: formattedTitle }}></h3>
      <p className="step-description">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <div className="how-it-works">
      <h2 className="section-title">
        How do we <span className="highlight">WORK</span>???
      </h2>
      <p className="section-subtitle">
        From your needs to the perfect match—here's how we simplify the process for you.
      </p>
      
      <div className="steps-container">
        <Step 
          number="01" 
          title="Understand your needs" 
          description="You answer a series of questions about your budget, usage, and preferences"
        />
        <Step 
          number="02" 
          title="Start matching" 
          highlight="matching"
          description="Our AI-powered system analyzes your needs and compares thousands of laptops."
        />
        <Step 
          number="03" 
          title="Get Tailored recommendations" 
          highlight="recommendations"
          description="We provide a curated selection of options for your requirements."
        />
        <Step 
          number="04" 
          title="Compare & Decide" 
          highlight="Decide"
          description="Easily compare specifications and reviews to make an informed decision."
        />
        <Step 
          number="05" 
          title="Purchase with confidence" 
          highlight="confidence"
          description="We guide you to trusted retailers for hassle-free shopping."
        />
      </div>
    </div>
  );
};

export default HowItWorks;