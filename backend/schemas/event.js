export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "caption",
      title: "caption",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: 'description',
      title: "Description",
      type: "text"
    },
    {
      name: "registrationLink",
      title: "Registration Link",
      type: "string",
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "name",
      event: "name",
      media: "poster",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
