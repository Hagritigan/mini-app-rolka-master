import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  PERSIK: 'persik',
  REGISTRATION: 'registration',
  CHARCARD: 'charcard',
  GAME: 'game',
  REVARDS: 'revards',
  LD: 'ld',
  ABILITIES: 'abilities',
  CYBORGS: 'cyborgs'
};

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.PERSIK, `/${DEFAULT_VIEW_PANELS.PERSIK}`, []),
      createPanel(DEFAULT_VIEW_PANELS.REGISTRATION, `/${DEFAULT_VIEW_PANELS.REGISTRATION}`, []),
      createPanel(DEFAULT_VIEW_PANELS.CHARCARD, `/${DEFAULT_VIEW_PANELS.CHARCARD}`, []),
      createPanel(DEFAULT_VIEW_PANELS.GAME, `/${DEFAULT_VIEW_PANELS.GAME}`, []),
      createPanel(DEFAULT_VIEW_PANELS.REVARDS, `/${DEFAULT_VIEW_PANELS.REVARDS}`, []),
      createPanel(DEFAULT_VIEW_PANELS.LD, `/${DEFAULT_VIEW_PANELS.LD}`, []),
      createPanel(DEFAULT_VIEW_PANELS.ABILITIES, `/${DEFAULT_VIEW_PANELS.ABILITIES}`, []),
      createPanel(DEFAULT_VIEW_PANELS.CYBORGS, `/${DEFAULT_VIEW_PANELS.CYBORGS}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
