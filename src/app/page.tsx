import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
    <span className="text-4xl">👋</span>
    <Heading className="font-black">Hello there! I&apos;m Axel Aranibar</Heading>
    <Paragraph className="max-w-xl mt-4">
      Hi! I&apos;m Axel Aranibar. I started programming Android with Java and Android Studio two years ago. I then expanded into web development, where I learned the basics of HTML, CSS, and PHP. Currently, I specialize in React.js and Next.js, and I use MongoDB as a database.

I&apos;m passionate about learning and creating modern technological solutions.

    </Paragraph>
    <Heading
      as="h2"
      className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
    >
      What I&apos;ve been working on
    </Heading>
    <Products />
    <TechStack />
  </Container>
  );
}
