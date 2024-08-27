import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { localize } from "@/localize";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import Hero from "../components/Hero";
import AnimatedTitle from "../components/AnimatedTitle";
import Line from "../components/Line";
import { heroProjectsPageBG } from "@/helpers/imagesImport";
import Projects from "../components/Projects";
// import Link from "next/link";

export const metadata: Metadata = {
  title: "Envent | Projects",
  description: "Design and installation of ventilation systems",
};

type Props = {
  params: { locale: string };
};

const ProjectsPage: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const projectsT = await localize(ProjectsPageT);

  return (
    <div>
      <Hero
        imageSrc={heroProjectsPageBG}
        className=""
        t={projectsT.hero}
      ></Hero>
      <Projects t={projectsT.projects} />
    </div>
  );
};

export default ProjectsPage;
