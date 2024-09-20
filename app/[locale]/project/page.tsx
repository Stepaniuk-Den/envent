import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { localize } from "@/localize";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";

type Props = {
  params: { locale: string };
};

export const metadata: Metadata = {
  title: " Project | Envent",
  description: "Design and installation of ventilation systems",
};

const ProjectItemPage: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const t = await localize(ProjectsPageT);

  return <></>;
};

export default ProjectItemPage;
