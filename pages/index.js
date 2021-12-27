import Head from "next/head";

// components
import { HeroSection } from "../components/HeroSection/HeroSection.component";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech Guide Max</title>
        <meta
          name="description"
          content="The Best and Beautifully Organised Tech Content, Helps & tips, How-to's & Entertainement Content with Buyer Guides. Which ultimately helps you find the best available deals..."
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
      </main>
    </div>
  );
}
