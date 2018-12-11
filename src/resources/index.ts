import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { configure as demoConfigure } from './demo/index';

export function configure(config: FrameworkConfiguration) {
  demoConfigure(config);
}
