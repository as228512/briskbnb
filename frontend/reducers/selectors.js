export const selectHome = ({ homes }, homeId) => {
  return homes[homeId] || { reviewIds: [] };
};

export const asArray = ({ homes }) => (
  Object.keys(homes).map(key => homes[key])
);
