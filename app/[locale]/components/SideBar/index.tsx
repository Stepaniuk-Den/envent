import styles from "./sidebar.module.scss";
import SideBarLangSwitcher from "../SideBarLangSwitcher";
import SideBarThemeSwitcher from "../SideBarThemeSwitcher";
import SideBarCatalogReview from "../SideBarCatalogReview";
import { SideBarT } from "@/messages/types/SideBarT";

const SideBar: React.FC<{ t: SideBarT }> = ({ t }) => {
  return (
    <div className={styles.sideBarContainer}>
      <SideBarLangSwitcher />
      <SideBarThemeSwitcher />
      <SideBarCatalogReview t={t} />
    </div>
  );
};

export default SideBar;
