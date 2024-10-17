import styles from "./sidebar.module.scss";
import SideBarLangSwitcher from "../SideBarLangSwitcher";
import SideBarThemeSwitcher from "../SideBarThemeSwitcher";
import CatalogReview from "../CatalogReview";
import { IAriaLabelProps } from "@/helpers/interfaces";

const SideBar:React.FC<{ariaLabel:IAriaLabelProps}> = ({ariaLabel}) => {
  return (
    <div className={styles.sideBarContainer}>

      <SideBarLangSwitcher ariaLabel={ariaLabel} />
      <SideBarThemeSwitcher ariaLabel={ariaLabel} />
      <CatalogReview />
    </div>
  );
};

export default SideBar;
