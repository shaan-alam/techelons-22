import client from "@sanity/client";

export default client({
  projectId: "axxb6ocs",
  dataset: "production",
  useCdn: true,
});
