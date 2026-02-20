import { Heading } from "./components/Heading/Heading";
import { Paragraph } from "./components/Paragraph/Paragraph";

export default function Home() {
  return (
      <main>
          <Heading 
            text={"Chez vous, partout et ailleurs"} 
            styles={"home-heading"}
          />

          <Paragraph 
            text={"Avec Kasa, vivez des séjours uniques dans des hébergements chaleureux, sélectionnés avec soin par nos hôtes."}
            styles={"mt-8 text-center"}
          />
      </main>
  );
}
