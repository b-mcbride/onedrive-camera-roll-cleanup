// For a full list of fields, see
// https://docs.microsoft.com/graph/api/resources/event?view=graph-rest-1.0
export class Photo {
    selected: boolean;
    name: string;
    thumbnails: ThumbnailSet[];
}

export class Thumbnail {
    width: number;
    height: number;
    url: string;
}

export class ThumbnailSet {
    id: string;
    large: Thumbnail;
    medium: Thumbnail;
    small: Thumbnail;
}
