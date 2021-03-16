const NavInterface = () => {

    interface SubItem {
        label: string,
        href: string,
        subLabel?: string
    }

    interface NavItem {
        label: string;
        children?: Array<SubItem>;
        href?: string;
    }

    const NAV_ITEMS: Array<NavItem> = [
        {
            label: 'Inspiration',
            href: '#',
            children: [
                {
                    subLabel: 'Party hard',
                    label: 'Motivation',
                    href: '#'
                }
            ]
        },
        {
            label: 'Find Work'
        },
        {
            label: 'Hire Designers',
            href: '#',
        },
    ];

}

export default NavInterface;
