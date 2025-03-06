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
  CYBORGS: 'cyborgs',
  DF: 'df',
  HAKI: 'haki',
  SEIMEI: 'seimei',
  IOSORY: 'iosory',
  RESTRICTIONS: 'restrictions',
  PIRATES: 'pirates',
  RA: 'ra',
  MARINE: 'marine',
  CP: 'cp',
  EQUIPMENT: 'equipment',
  RACES: 'races',
  FISHMANKARATE: 'fishmankarate',
  MERMAIDSTYLE: 'mermaidstyle',
  POWERTABLET: 'powertablet',
  REBILD: 'rebild',
  CANON: 'canon',
  REQUIEM: 'requiem',
  REQUIEMQUESTS: 'requiemquests',
  REQUIEMSHOP: 'requiemshop',
  REQUIEMWALLET: 'requiemwallet',
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
      createPanel(DEFAULT_VIEW_PANELS.DF, `/${DEFAULT_VIEW_PANELS.DF}`, []),
      createPanel(DEFAULT_VIEW_PANELS.HAKI, `/${DEFAULT_VIEW_PANELS.HAKI}`, []),
      createPanel(DEFAULT_VIEW_PANELS.SEIMEI, `/${DEFAULT_VIEW_PANELS.SEIMEI}`, []),
      createPanel(DEFAULT_VIEW_PANELS.IOSORY, `/${DEFAULT_VIEW_PANELS.IOSORY}`, []),
      createPanel(DEFAULT_VIEW_PANELS.RESTRICTIONS, `/${DEFAULT_VIEW_PANELS.RESTRICTIONS}`, []),
      createPanel(DEFAULT_VIEW_PANELS.PIRATES, `/${DEFAULT_VIEW_PANELS.PIRATES}`, []),
      createPanel(DEFAULT_VIEW_PANELS.RA, `/${DEFAULT_VIEW_PANELS.RA}`, []),
      createPanel(DEFAULT_VIEW_PANELS.MARINE, `/${DEFAULT_VIEW_PANELS.MARINE}`, []),
      createPanel(DEFAULT_VIEW_PANELS.CP, `/${DEFAULT_VIEW_PANELS.CP}`, []),
      createPanel(DEFAULT_VIEW_PANELS.EQUIPMENT, `/${DEFAULT_VIEW_PANELS.EQUIPMENT}`, []),
      createPanel(DEFAULT_VIEW_PANELS.RACES, `/${DEFAULT_VIEW_PANELS.RACES}`, []),
      createPanel(DEFAULT_VIEW_PANELS.FISHMANKARATE, `/${DEFAULT_VIEW_PANELS.FISHMANKARATE}`, []),
      createPanel(DEFAULT_VIEW_PANELS.MERMAIDSTYLE, `/${DEFAULT_VIEW_PANELS.MERMAIDSTYLE}`, []),
      createPanel(DEFAULT_VIEW_PANELS.POWERTABLET, `/${DEFAULT_VIEW_PANELS.POWERTABLET}`, []),
      createPanel(DEFAULT_VIEW_PANELS.REBILD, `/${DEFAULT_VIEW_PANELS.REBILD}`, []),
      createPanel(DEFAULT_VIEW_PANELS.CANON, `/${DEFAULT_VIEW_PANELS.CANON}`, []),
      createPanel(DEFAULT_VIEW_PANELS.REQUIEM, `/${DEFAULT_VIEW_PANELS.REQUIEM}`, []),
      createPanel(DEFAULT_VIEW_PANELS.REQUIEMQUESTS, `/${DEFAULT_VIEW_PANELS.REQUIEMQUESTS}`, []),
      createPanel(DEFAULT_VIEW_PANELS.REQUIEMSHOP, `/${DEFAULT_VIEW_PANELS.REQUIEMSHOP}`, []),
      createPanel(DEFAULT_VIEW_PANELS.REQUIEMWALLET, `/${DEFAULT_VIEW_PANELS.REQUIEMWALLET}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
