import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'What is Edusoft?',
    answer:
      'Edusoft is a modern software platform designed for schools and education centers to track student progress, manage tuition payments, and monitor financial health in real time.',
    value: 'item-1',
  },
  {
    question: 'How does Edusoft help with financial tracking?',
    answer:
      'Edusoft provides a clear overview of all student payments, outstanding balances, and financial trends, making it easy for administrators to manage tuition and reduce revenue loss.',
    value: 'item-2',
  },
  {
    question: "Can parents access their child's academic and payment status?",
    answer:
      "Yes, parents can securely log in to view their child's academic progress, attendance, and payment history, ensuring transparency and better communication with the school.",
    value: 'item-3',
  },
  {
    question: "Is my school's data secure with Edusoft?",
    answer:
      'Absolutely. Edusoft uses industry-standard security practices and encryption to protect all student and financial data, ensuring compliance with privacy regulations.',
    value: 'item-4',
  },
  {
    question: 'Can Edusoft be accessed from anywhere?',
    answer:
      'Yes, Edusoft is a cloud-based platform, so you can access it securely from any device, anywhere, at any time.',
    value: 'item-5',
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
