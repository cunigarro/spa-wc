import { directive } from 'lit-html';

const _resolved = new WeakSet();

export const lazyLoading = directive((importPromise: any, template: any) => {
  return (part: any) => {
    if(!_resolved.has(part)) {
      importPromise.then(() => _resolved.add(part));
    }
    part.setValue(template);
  }
});
