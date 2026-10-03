export type BurgerButtonProps = {
	isOpenMobile: boolean;
	setIsOpenMobile: (isOpen: boolean) => void;
	mobileMenuRef: React.RefObject<HTMLElement>;
};
