import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Footer = () => {
  return (
    <Accordion type="single" collapsible className="w-full text-white p-5">
      <AccordionItem value="item-1">
        <AccordionTrigger>Who is the owner?</AccordionTrigger>
        <AccordionContent>Hi my name is Milan Mareels, and I am an IT student from Antwerp.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why is it made?</AccordionTrigger>
        <AccordionContent>I created this application to ensure that everyone can track all their movies, anime, and TV series easily</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Footer;
