export default {
  name: "president",
  title: "President",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "designation",
      title: "Designation",
      type: "string",
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "name",
      president: "name",
      media: "profileImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
