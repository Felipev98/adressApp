export const state = () => ({
  ip: {},
  error: {}
});

export const mutations = {
  search(state, payload) {
    state.ip = payload;
  },
  error(state, payload) {
    state.error = payload;
  }
};

export const actions = {
  async searchIpAddress({ commit }, ip) {
    try {
      const res = await fetch(
          `https://geo.ipify.org/api/v1?apiKey=at_F0f1DDEf5kAek0RygqZpsZF17sPxo&domain=${ip}`
        ),
        json = await res.json();
      commit("search", json);
      commit("error", null);
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
    } catch (err) {
      commit("error", err);
    }
  }
};
