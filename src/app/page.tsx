import { GuessContainer } from "@/components/guess-container";
import { KanaPicker } from "@/components/kana-picker";

export default function Home() {
  return (
    <div>
      <main className=" w-full">
        <section className="mx-auto max-w-[960px] py-12">
          <GuessContainer />
          <KanaPicker />
        </section>
      </main>
    </div>
  );
}
