export const state = () => ({
  ip: false,
  loader: false,
  error: false
});

export const mutations = {
  search(state, payload) {
    state.ip = payload;
  },
  error(state, payload) {
    state.error = payload;
  },
  loader(state, payload) {
    state.loader = payload;
  }
};

export const actions = {
  async searchIpAddress({ commit }, ip) {
    commit("loader", true);
    try {
      const res = await fetch(
          `https://geo.ipify.org/api/v1?apiKey=at_F0f1DDEf5kAek0RygqZpsZF17sPxo&domain=${ip}`
        ),
        json = await res.json();
      commit("search", json);
      commit("error", false);
      commit("loader", false);
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
    } catch (err) {
      commit("error", err);
      commit("loader", false);
    }
  },
  searchIp({ commit }, ip) {
    if (ip === "") {
      commit("search", false);
      commit("error", false);
    }
  }
};
