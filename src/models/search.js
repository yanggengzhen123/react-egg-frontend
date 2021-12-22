// dva(支持同步和异步)
import { getLists } from '../services/search'
export default {
  namespace: 'search',
  state: {
    text: 'dva',
    lists: [],
  },
  // 同步
  reducers: {
    getLists(state, action) {
      console.log(Array(10).fill(action.payload))
      return {
        ...state,
        lists: action.payload
      }
    }
  },
  // 异步
  effects: {
    // dva异步用的是generator
    // call和put都是异步函数,call主要用作调用异步函数，put主要用作事件的派发
    *getListAsync({ payload }, { call, put }) {
      const res = yield call(getLists, payload)
      console.log(res);
      yield put({
        type: 'getLists',
        payload: res.lists
      })

    },
    *test() {
      let temp = null
      yield setTimeout(() => {
        temp = 1
      }, 1000

      )
    }
  }
};
