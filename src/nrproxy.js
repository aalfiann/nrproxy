/**
 * NRProxy (No Reverse Proxy)
 * @var {string} whitelist      Input domain name to whitelist. Leave empty to whitelist all domains.
 * @var {bool} debug            Debug used for unit test purpose only. Default false.
 */
window.NRProxy = function (whitelist, debug) {
  debug = (debug === undefined) ? 0 : 1;
  if (whitelist) {
    var ua = window.location.href;
    var ub = ua.split('//');
    var uc = ub[1];
    var domi = '';
    if (uc.indexOf('/') > 0) {
      uc = uc.split('/');
      domi = uc[0];
    } else {
      domi = uc;
    }
    if (whitelist.indexOf(',') > 0) {
      var mm = whitelist.split(',').map(function (item) {
        return item.trim();
      });
      if (mm.indexOf(domi) === -1) {
        if (debug) {
          return 'Protected!!!';
        } else {
          ua = ua.replace(domi, mm[0]);
          window.location.href = ua;
        }
      }
    } else {
      if (domi !== whitelist) {
        if (debug) {
          return 'Protected!!!';
        } else {
          ua = ua.replace(domi, whitelist);
          window.location.href = ua;
        }
      }
    }
  }
  if (debug) return 'Passed!!!';
};
