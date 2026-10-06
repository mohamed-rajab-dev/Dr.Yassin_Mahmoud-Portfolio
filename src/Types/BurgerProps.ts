export type BurgerProps = {
	isOpenMobile: boolean;
	setIsOpenMobile: (isOpen: boolean) => void;
	setIsHidden: (isHidden: boolean) => void;
	mobileMenuRef: React.RefObject<HTMLElement>;
};
