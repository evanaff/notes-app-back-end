const InvariantError = require('../../exceptions/InvariantError');
const { CollaborationsPayloadSchema } = require('./schema');

const CollaborationsValidator = {
  validateCollaborationPayload: (payload) => {
    const validationResult = CollaborationsPayloadSchema.validate(payload);

    if (!validationResult) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = CollaborationsValidator;
