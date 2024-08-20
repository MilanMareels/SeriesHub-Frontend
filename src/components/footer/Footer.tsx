import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Footer = () => {
  return (
    <Accordion type="single" collapsible className="w-full text-white p-5">
      <AccordionItem value="item-1">
        <AccordionTrigger>Who is the owner?</AccordionTrigger>
        <AccordionContent>Hi my name is Milan, and I am an IT student from Antwerp.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why is it made?</AccordionTrigger>
        <AccordionContent>I created this application to ensure that everyone can track all their manga and anime series easily.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Will there be more?</AccordionTrigger>
        <AccordionContent>
          Yes I will be adding even more incredible content to SeriesHub. Although I can’t say exactly when, you can expect a fantastic selection of new TV series and movies to be available
          eventually. Stay tuned for updates.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Footer;
