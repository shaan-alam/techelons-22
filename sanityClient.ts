import client from "@sanity/client";

export default client({
  projectId: "axxb6ocs",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-04-09",
});
