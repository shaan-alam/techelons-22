export default {
  name: "coreMembers",
  title: "Core Members",
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
      coreMembers: "name",
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
