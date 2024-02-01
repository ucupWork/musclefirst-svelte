import { queue } from '$stores/fb-pixel'

function init (id: any) {
  queue.update(existing => [ ...existing, { type: 'init', params: [ id ] } ])
}

function trackSingle (id: any, event: any, data: any) {
  queue.update(existing => [ ...existing, { type: 'trackSingle', params: [ id, event, data ] } ])
}

function trackCustom (event: any, data: any) {
  queue.update(existing => [ ...existing, { type: 'trackCustom', params: [ event, data ] } ])
}

function track (event: any, data: any) {
  queue.update(existing => [ ...existing, { type: 'track', params: [ event, data ] } ])
}

export {
  init,
  trackSingle,
  trackCustom,
  track
}