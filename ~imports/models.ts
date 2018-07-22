export interface Episode {
  _id?: string;
  title: string;
  description: string;
  publishDate: Date;
  coverImage: string;
  duration: number;
  url: {
    url: string;
    type: string;
    length: number;
  };
  created: Date;
}

export interface ITunesChannelItem {
  trackId: string;
  artistName: string;
  trackName: string;
  feedUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
}

export interface ITunesFeedItem {
  title: string;
  'itunes:title': string;
  'itunes:episodeType': string;
  'itunes:summary': string;
  pubDate: Date;
  'itunes:explicit': 'yes' | 'no';
  'itunes:image': {
    $href: string;
  }
  'itunes:keywords': string;
  'itunes:duration': string;
  enclosure:{ '$url': string;
    '$type': string;
    '$length': string;
  }
}