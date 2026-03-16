export const menu = [
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
      {
        label: "Terrace",
        href: "/services/terrace",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
