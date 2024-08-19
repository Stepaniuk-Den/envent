import Image from "next/image";

interface PropsProjectCard {
  id: number;
  src: string;
  alt: string;
  title: string;
  address: string;
  link: string;
}
const ProjectCard = ({
  id,
  src,
  alt,
  title,
  address,
  link,
}: PropsProjectCard) => {
  return (
    <div>
      <Image src={src} alt={alt} width={260} height={160} />
    </div>
  );
};

export default ProjectCard;
