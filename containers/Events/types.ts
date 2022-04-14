export interface Event {
  /**
   * Name of the event
   *  */
  name: string;

  /**
   * URL of the poster of event  */
  poster: string;

  /**
   * Caption to be used along with poster on the event page/  */
  caption: string;

  /**
   * Registration Link of the event
   */
  registrationLink: string;

  /**
   * Slug for dynamic routing */
  slug: string;

  /** Tag Line which is to be displayed on the event card */
  tagLine: string;
}

export interface Props {
  events: Event[];
}
