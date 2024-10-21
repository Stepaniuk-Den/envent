import styles from "./sidebar.module.scss";
import SideBarLangSwitcher from "../SideBarLangSwitcher";
import SideBarThemeSwitcher from "../SideBarThemeSwitcher";
import SideBarCatalogReview from "../SideBarCatalogReview";
import { SideBarT } from "@/messages/types/SideBarT";
import { IAriaLabelProps } from "@/helpers/interfaces";

const SideBar: React.FC<{ t: SideBarT; ariaLabel: IAriaLabelProps }> = ({
  t,
  ariaLabel,
}) => {
  return (
    <div className={styles.sideBarContainer}>
      <SideBarLangSwitcher ariaLabel={ariaLabel} />
      <SideBarThemeSwitcher ariaLabel={ariaLabel} />
      <SideBarCatalogReview t={t} ariaLabel={ariaLabel} />
    </div>
  );
};

export default SideBar;
