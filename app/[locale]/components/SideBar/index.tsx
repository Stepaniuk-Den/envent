import styles from "./sidebar.module.scss";
import SideBarLangSwitcher from "../SideBarLangSwitcher";
import SideBarThemeSwitcher from "../SideBarThemeSwitcher";
import CatalogReview from "../CatalogReview";

const SideBar = () => {
  return (
    <div className={styles.sideBarContainer}>
      <SideBarLangSwitcher />
      <SideBarThemeSwitcher />
      <CatalogReview />
    </div>
  );
};

export default SideBar;
