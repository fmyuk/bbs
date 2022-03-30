export const actionTypes = {
  CHANGE_TITLE: "CHANGE_TITLE"
} as const;

export const actionCreators = {
  changeTitle: (title: string) => ({
    type: actionTypes.CHANGE_TITLE,
    title
  })
};