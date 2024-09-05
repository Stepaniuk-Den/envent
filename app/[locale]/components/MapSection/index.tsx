import { Link } from "@/navigation";
import MainButton from "../Buttons/MainButton";
import styles from "./mapSection.module.scss";
import { contactsItems } from "@/data/ContactsItem";

const MapSection: React.FC<{ locationBtn: string }> = ({ locationBtn }) => {
  return (
    <section
      className={styles.map_section}
      style={{ backgroundImage: `url("/images/envent-google_maps.webp")` }}
    >
      <div className={styles.overlay}>
        <MainButton type="button" color="filled" className="locationBtn">
          <Link
            href={contactsItems[0].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {locationBtn}
          </Link>
        </MainButton>
      </div>
    </section>
  );
};

export default MapSection;
