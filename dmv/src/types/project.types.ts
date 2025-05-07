export type ProjectType = {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    keywords: string[];
    pictureHeaderUrl: string;
    picturesGallery?: GalleryPicture[];
};

export type GalleryPicture = {
    id: number;
    pictureUrl: string;
    pictureAlt: string;
}