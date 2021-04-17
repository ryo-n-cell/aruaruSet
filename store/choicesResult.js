export const state = () => ({
  result: [],
})

export const mutations = {
  add(state, obj) {
    state.result.push(obj)
    console.log(state.result)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
}

export const getters = {
  getList(state) {
    return state.result
  },
}
