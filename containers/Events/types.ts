export interface Event {
  name: string;
  poster: string;
  caption: string;
  registrationLink: string;
  slug: string
  tagLine: string
}

export interface Props {
  events: Event[];
}
