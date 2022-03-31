export const actionTypes = {
  CHANGE_COMMENT: "CHANGE_COMMENT"
} as const;

export const actionCreators = {
  changeComment: (comment: string) => ({
    type: actionTypes.CHANGE_COMMENT,
    comment
  })
};