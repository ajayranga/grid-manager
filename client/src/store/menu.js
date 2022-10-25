// types
import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer } from 'redux-injectors';
import { createSelector } from '@reduxjs/toolkit';

const initialState = {
  openItem: ['dashboard'],
  openComponent: 'buttons',
  drawerOpen: false,
  componentDrawerOpen: true,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },

    activeComponent(state, action) {
      state.openComponent = action.payload.openComponent;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },

    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    },
  },
});

export const UseMenuSlice = () => {
  useInjectReducer({
    key: menuSlice.name,
    reducer: menuSlice.reducer,
  });
  return { actions: menuSlice.actions };
};

const selectDomain = (state) => state.menu || initialState;

export const selectOpenItem = createSelector(
  [selectDomain],
  (menu) => menu.openItem
);

export const selectOpenComponent = createSelector(
  [selectDomain],
  (menu) => menu.openComponent
);

export const selectDrawerOpen = createSelector(
  [selectDomain],
  (menu) => menu.drawerOpen
);

export const selectComponentDrawerOpen = createSelector(
  [selectDomain],
  (menu) => menu.componentDrawerOpen
);
