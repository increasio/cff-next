import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function Faq() {
    return (
        <section className="relative pt-[60px] pb-[90px]">
            <div className="relative z-10 container mx-auto flex flex-col gap-6">
                <h4 className="text-center text-2.5xl font-semibold">FAQ</h4>
            </div>
            <div className="mx-auto flex max-w-[1060px] flex-col gap-6">
                {[
                    {
                        answer: 'The FAQ section is designed to provide answers to common questions that users may have about our product or service.',
                        question: 'What is the purpose of this FAQ section?',
                    },
                    {
                        answer: 'You can contact our customer support team via email at',
                        question: 'How can I contact customer support?',
                    },
                ].map((item) => (
                    <Accordion collapsible key={item.question} type="single">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </section>
    )
}
