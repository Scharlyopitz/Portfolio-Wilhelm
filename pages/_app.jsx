import { AnimatePresence } from "framer-motion";
import "@/style/global.css";
import Title from "@/components/Title/Title";

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Title title={"Portfolio | Wilhelm Opitz"} />
      <AnimatePresence initial={false}>
        <Component key={router.route} {...pageProps} />;
      </AnimatePresence>
    </>
  );
}
