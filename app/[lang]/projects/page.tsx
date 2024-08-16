import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Envent | Projects",
  description: "Design and installation of ventilation systems",
};

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {/* {projects.map((projectItem: any) => (
          <li key={projectItem.id}>
            <Link href={`/project/${projectItem.id}`}>{projectItem.title}</Link>
          </li>
        ))} */}
      </ul>
    </>
  );
}
