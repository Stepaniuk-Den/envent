import Image from "next/image";
import ButtonVariableColor from "../Buttons/ButtonVariableColor";
import MainButton from "../Buttons/MainButton";
import Link from "next/link";
import styles from "./serviceCard.module.scss";
import AnimatedTitle from "../AnimatedTitle";
import Line from "../Line";
import { generateSlug } from "@/helpers/generateSlug";
import { PropsServiceCard } from "@/helpers/interfaces";


const ServiceCard = ({
  id,
  title,
  description,
  firstImg,
  secondImg,
  thirdImg,
  alt,
  firstBtn,
  secondBtn,
  address,
  link,
  alignRight = false,
}: PropsServiceCard) => {

    const slug = generateSlug(title);

  return (
    <li
      className={`${styles.service_card} ${
        alignRight ? styles.right_aligned : styles.left_aligned
      }`}
    >
      <div className={`${styles.container} ${alignRight ? styles.right_padding : styles.left_padding}`}>
        <div className={styles.wrapper_title}>
          <AnimatedTitle title={title} className={styles.services_title}/>
          <Line className="yellow-left" />
        </div>
        <p className={styles.text}>{description}</p>
        <div className={styles.wrapper_img}>
          <div className={styles.thumb}>
            <Image src={firstImg} alt={alt} 
            width={160} height={100} />
          </div>
          <div className={styles.thumb}>
            <Image src={secondImg} alt={alt} width={160} height={100} />
          </div>
          <div className={styles.thumb}>
            <Image src={thirdImg} alt={alt} width={160} height={100} />
          </div>
        </div>
      </div>
      <ButtonVariableColor
        className="dark_blue"
        firstChildren={
          <MainButton className="white">
            <Link href="/about">{firstBtn}</Link>
          </MainButton>
        }
        secondChildren={
          <MainButton className="description">
            <Link href={`/services/${slug}`}>{secondBtn}</Link>
          </MainButton>
        }
      ></ButtonVariableColor>
    </li>
  );
};

export default ServiceCard;
