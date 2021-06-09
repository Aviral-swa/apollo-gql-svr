import { SchemaDirectiveVisitor } from 'apollo-server-express';
import { defaultFieldResolver } from 'graphql';

class UpperCaseDirective extends SchemaDirectiveVisitor {
  // eslint-disable-next-line
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    // eslint-disable-next-line
    field.resolve = async function (...args) {
      const result = await resolve.apply(this, args);
      if (typeof result === 'string') {
        return result.toUpperCase();
      }
      return result;
    };
  }
}

export default UpperCaseDirective;
