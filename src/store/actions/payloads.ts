export interface User {
  name: string;
  id: string;
  images: any[];
  uri: string;
  email: string;
}

export interface Track {
  name: string;
  images: any[];
  artist: string;
  uri: string;
  duration?: string;
}

export interface EditorPicks {
  name: string;
  images: any[];
  trackUrl: string;
}

export interface Playlists {
  name: string;
  image: any[];
  id: string;
  description: string;
}
