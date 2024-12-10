export const state = () => ({
  windowsDownloadUrl: null,
  windowsLatestReleaseName: null,
});

export const mutations = {
  setWindowsDownloadUrl(state, url) {
    state.windowsDownloadUrl = url;
  },
  setWindowsLatestReleaseName(state, name) {
    state.windowsLatestReleaseName = name;
  },
};
