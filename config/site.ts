export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Student Gradebook",
	description: "Help keep track of grades.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Students",
      href: "/students",
    },
    {
      label: "Courses",
      href: "/courses",
    },
    {
      label: "Grades",
      href: "/grades",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Students",
      href: "/students",
    },
    {
      label: "Courses",
      href: "/courses",
    },
    {
      label: "Grades",
      href: "/grades",
    }
	],
	links: {
		github: "https://github.com/aknsubbu/java-frontend",

	},
};
