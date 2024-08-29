import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: `Project ${id} | Envent`,
    description: `Project ${id} details`,
  };
}

export default function ProjectItem({ params: { id } }: Props) {
  return <h1>ProjectItem page {id}</h1>;
}
