export type BurgerMenuProps = {
	isOpenMobile: boolean;
	mobileMenuRef: React.RefObject<HTMLElement>;
	isHidden: boolean;
	setHidden: (isHidden: boolean) => void;
	links: string[];
};
