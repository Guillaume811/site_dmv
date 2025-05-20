// Typage
export type NavigationLink = {
    id: string;
    label: string;
    to: string;
};

// Array of navigation links
export const navLinks: NavigationLink[] = [
    { id: "home", label: "Accueil", to: "/" },
    { id: "prestation", label: "Prestations", to: "/prestation" },
    { id: "projet", label: "Projets", to: "/projet" },
    { id: "galerie", label: "Galerie", to: "/galerie" },
];

// Helper

// Function to get a navigation link by its ID
export const getNavigationLink = (id: string): NavigationLink | undefined => {
    return navLinks.find((link) => link.id === id);
};
  
// Function to get all navigation links excluding the ones with the specified IDs
export const getNavigationLinksExcluding = (excludedIds: string[]): NavigationLink[] => {
    return navLinks.filter((link) => !excludedIds.includes(link.id));
};