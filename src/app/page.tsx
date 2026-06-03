import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Clients } from "@/components/clients";
import { About } from "@/components/about";
import { ContactForm } from "@/components/contact-form";
import { BlogPreview } from "@/components/blog-preview";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <About />
      <BlogPreview posts={posts} />
      <ContactForm />
    </>
  );
}
