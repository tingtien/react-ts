export interface API {
  list: string;
}

const api = {
  list: `${MI.config.api}/api/list`
};

export default api;
