
// export function initialize(/* application */) {
//   // application.inject('route', 'foo', 'service:foo');
// }

// export default {
//   initialize
// };
// */
export function initialize(application) {
  //application.inject('route', 'constants', 'service:constants');
  application.inject('controller', 'constants', 'service:constants');
}
export default {
  name: 'constants',
  initialize: initialize
};