export default {
  state: {
    id: undefined,
    username: undefined,
  },
  //同步
  reducers: {
    getUser(state: any, payload: any) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  // 异步
  effects: {
    async getUserAsync(dispatch: any, rootState: any, payload: any) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve('');
        }, 1000);
      });
      dispatch({
        type: 'getUser',
        payload,
      });
    },
  },
};
