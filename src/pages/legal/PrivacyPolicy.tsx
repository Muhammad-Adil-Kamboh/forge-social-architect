
import React from 'react';
import { LegalLayout } from '@/components/layout/LegalLayout';

const PrivacyPolicy: React.FC = () => {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="December 3, 2024">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Controller</h2>
          <p className="text-slate-700">
            LeadKin ("we," "our," or "us") is the data controller responsible for your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
          <p className="text-slate-700 mb-4">We collect information you provide directly to us, such as:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Account registration information (name, email, password)</li>
            <li>LinkedIn profile data (when you connect your account)</li>
            <li>Content you create using our platform</li>
            <li>Usage data and analytics</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
          <p className="text-slate-700 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Provide and improve our services</li>
            <li>Generate personalized content recommendations</li>
            <li>Send you updates and marketing communications</li>
            <li>Ensure platform security and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights (GDPR & CalOPPA)</h2>
          <p className="text-slate-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Delete your data</li>
            <li>Port your data to another service</li>
            <li>Object to processing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookie Usage</h2>
          <p className="text-slate-700">
            We use cookies to enhance your experience, analyze usage, and provide personalized content. 
            You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
          <p className="text-slate-700">
            If you have questions about this Privacy Policy, please contact us at privacy@leadkin.com
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
