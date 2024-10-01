import styles from "./sidebar.module.scss";
import SideBarLangSwitcher from "../SideBarLangSwitcher";
import SideBarThemeSwitcher from "../SideBarThemeSwitcher";

const SideBar = () => {
  return (
    <div className={styles.sideBarContainer}>
      <SideBarLangSwitcher />
      <SideBarThemeSwitcher />
    </div>
  );
};

export default SideBar;
