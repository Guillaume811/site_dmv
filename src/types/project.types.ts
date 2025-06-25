import { GalleryType } from "./gallery.types";

export type ProjectType = {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    keywords: string[];
    pictureHeaderUrl: string;
    picturesGallery?: GalleryType[];
};