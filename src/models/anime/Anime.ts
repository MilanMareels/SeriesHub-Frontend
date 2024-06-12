export interface AnimeSerie {
    _id:         string;
    animeId:     string;
    animeTitle:  string;
    genres:      string[];
    description: string;
    episodes:    number;
    animeStatus: string;
    userRating:  number;
    image:       string;
    userId:      string;
    dub:         boolean;
    listStatus:  string;
}
