type SubItem = {
  label: string;
  href: string;
};

type ChildItem =
  | {
      label: string;
      href: string;
      children?: SubItem[];
    }
  | {
      label: string;
      children: SubItem[];
      href?: never;
    };

type MenuItem =
  | {
      label: string;
      href: string;
      children?: ChildItem[];
    }
  | {
      label: string;
      children: ChildItem[];
      href?: never;
    };

export const menu: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Residential",
        // href: "/services/residential",
        children: [
          {
            label: "Apartment",
            href: "/services/residential/apartment",
          },
        ],
      },
      // {
      //   label: "Terrace",
      //   href: "/services/terrace",
      // },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
