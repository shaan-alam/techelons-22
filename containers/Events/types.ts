export interface Event {
  name: string;
  poster: string;
  caption: string;
  registrationLink: string;
}

export interface Props {
  events: Event[];
}
