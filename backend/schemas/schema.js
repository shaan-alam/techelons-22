// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import president from "./president";
import vicePresident from "./vicePresident";
import officeBearer from "./officeBearer";
import coreMember from "./coreMember";
import teacher from "./teacher";
import event from "./event";
import about from "./about";
import volunteer from "./volunteer";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    president,
    vicePresident,
    coreMember,
    officeBearer,
    teacher,
    event,
    about,
    volunteer,
  ]),
});
