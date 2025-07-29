import { Route } from '@angular/router';
import {App} from "./app";
import {loadRemoteModule} from "@nx/angular/mf";

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => loadRemoteModule('login', './Routes')
      .then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: App,
  },
];
