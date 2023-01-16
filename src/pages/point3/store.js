import create from 'zustand';
import Convert from 'rbase-model/jsonPlaceholdeModel';
import * as Provider from 'rbase-providers/jsonPlaceHolderProvider';
export function base_state(props) {
  return {
    loading: props?.loading ?? true,
    is_refresh: props?.is_refresh ?? true,
    list: Convert.listOfjsonPlaceholdeModel(props?.list ?? []),
  };
}
export const useStore = create(set => base_state());
export const action = {
  initialize: async () => {
    setter.loading(true);
    await loadData();
    setter.loading(false);
  },
  cleanUp: () => {
    useStore.setState();
    useStore.destroy();
  },
  loadData,
  refresh,
  removeData,
};
export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
  is_refresh: (value = false) => useStore.setState({is_refresh: value}),
  list: (value = []) =>
    useStore.setState({list: Convert.listOfjsonPlaceholdeModel(value)}),
};

async function loadData() {
  setter.loading(true);
  setter.is_refresh(true);
  try {
    const response = await Provider.getAll();
    const data = response.data;
    if (data.length > 10) {
      let list = data.slice(0, 10);
      setter.list(list);
    } else {
      setter.list(data);
    }
  } catch (error) {
    console.log(error);
  }
  setter.loading(false);
  setter.is_refresh(false);
}

async function refresh() {
  setter.is_refresh(true);
  try {
    const response = await Provider.getAll();
    const data = response.data;
    if (data.length > 10) {
      let list = data.slice(0, 10);
      setter.list(list);
    } else {
      setter.list(data);
    }
  } catch (error) {
    console.log(error);
  }
  setter.is_refresh(false);
}
function removeData(index, state) {
  const cur_state = base_state(state);
  cur_state.list.splice(index, 1);
  setter.list(cur_state.list);
}
