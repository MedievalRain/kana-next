import { GuessContainer } from "@/components/guess-container";
import { KanaPicker } from "@/components/kana-picker";

export default function Home() {
	return (
		<div>
			<main className="w-full px-2">
				<section className="mx-auto max-w-[960px] space-y-4">
					<GuessContainer />
					<KanaPicker />
				</section>
			</main>
		</div>
	);
}
