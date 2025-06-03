
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does the AI content generation work?",
      answer: "Our AI has been trained on over 500 million LinkedIn posts to understand what makes content go viral. It analyzes your writing style, industry trends, and engagement patterns to generate personalized content suggestions that resonate with your audience."
    },
    {
      question: "Can I try LeadKin for free?",
      answer: "Yes! We offer a 7-day free trial with full access to all Pro features. No credit card required to start your trial."
    },
    {
      question: "How does scheduling work?",
      answer: "Our smart scheduling feature analyzes when your audience is most active and suggests optimal posting times. You can schedule posts in advance, set up recurring content, and manage your entire content pipeline from one dashboard."
    },
    {
      question: "Is my LinkedIn account safe?",
      answer: "Absolutely. We use LinkedIn's official API and follow all their guidelines. Your account security is our top priority, and we never store your LinkedIn password."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees. If you cancel, you'll retain access until the end of your billing period."
    },
    {
      question: "Do you offer team plans?",
      answer: "Yes, we offer Business plans for teams and agencies with collaboration features, white-label options, and volume discounts. Contact our sales team for custom pricing."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about LeadKin
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
