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
    title: `Envent | Service ${id}`,
    description: `Service ${id} details`,
  };
}

export default function ServiceItem({ params: { id } }: Props) {
  return <h1>ServiceItem page {id}</h1>;
}
