const StaticNav = [
  {
    title: "Strona główna",
    url: "/",
  },
  {
    title: "Aktualności",
    url: "/news",
  },
  {
    title: "Projekty",
    url: "/projects",
  },
  {
    title: "Kontakt",
    url: "/contact",
  },
  {
    title: "Zapisane",
    url: "/saved",
  },
];

export const StaticNavLinksWithoutPrefix = StaticNav;

export const StaticNavLinks = StaticNav.map((link) => {
  link.url = link.url.length > 1 ? `${link.url}?_` : link.url;
  link.url = link.url.toLowerCase();
  return link;
});

//Links are not sensetive to Upper case. It will be converted to lower case
//Links are sensetive to postion you give them
