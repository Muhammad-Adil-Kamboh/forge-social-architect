
import React from 'react';
import { LegalLayout } from '@/components/layout/LegalLayout';

const TermsOfService: React.FC = () => {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="December 3, 2024">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Acceptance of Terms</h2>
          <p className="text-slate-700">
            By accessing and using LeadKin, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">License</h2>
          <p className="text-slate-700">
            We grant you a limited, non-exclusive, non-transferable license to use LeadKin for your personal or business use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Prohibited Uses</h2>
          <p className="text-slate-700 mb-4">You may not use our service:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>For any unlawful purpose or to solicit others to unlawful acts</li>
            <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
            <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
          <p className="text-slate-700">
            In no case shall LeadKin, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, 
            service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, 
            special, or consequential damages of any kind.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
          <p className="text-slate-700">
            Questions about the Terms of Service should be sent to us at legal@leadkin.com
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};

export default TermsOfService;
