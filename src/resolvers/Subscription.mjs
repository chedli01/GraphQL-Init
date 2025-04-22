export const Subscription = {
    userAdded: {
      subscribe: (parent, args, { pubsub }) => pubsub.subscribe('user'),
      resolve: (payload) => {
        return payload.userAdded; // ✅ unwrapped correctly
      },
    },
  };
  