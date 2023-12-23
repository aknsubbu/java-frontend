import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import StudentCard from "@/components/StudCard";


export default function Home() {
	return (
	<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

		<h1 className={title({color:"yellow"})}>Student Gradebook</h1>
		<p>This is a student gradebook... Students can track their grades here... </p>

	</section>
	);
}
