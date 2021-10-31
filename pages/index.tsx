import type { NextPage } from "next";
import Head from "next/head";
import { Container, Text, Link } from "@chakra-ui/layout";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import Features from "../src/components/Features";
import Testimonials from "../src/components/Testimonials";
import styles from "../styles/Home.module.css";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  //const bgColor = useColorModeValue("white", "whiteAlpha.50");
  return (
    <Container p={0} maxW="container.xl">
      <Navbar />

      <Hero />

      <Text>
        prefer {colorMode === "light" ? "dark" : "light"} mode?{"   "}
        <Link onClick={toggleColorMode}>Click here</Link>
      </Text>
      <Features />
      <Testimonials />
      <Footer />
    </Container>
  );
};

export default Home;
