var sgSdk = function () {

  var config;
  var storageKey = 'bubble-shooter-challenge-sgk';
  var storageData;

  function initialize(moduleArray, _config, callBack) {
    config = _config;
    let getCurrentLanguage = (supportedLanguages) => {
      if (window._YaSDK) {
        return window._YaSDK.environment.i18n.lang;
      }
      // ?lang=en
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop)
      });
      if (params.lang) {
          return params.lang;
      }
      
      var lang = navigator.language || navigator.userLanguage;

      if (lang.indexOf('-') !== -1) {
        lang = lang.split('-')[0];
      }

      if (supportedLanguages.indexOf(lang) === -1) {
        lang = 'en';
      }

      return lang;
    }
    var settings = {
      config: {
        rewarded: {
          enabled: true
        },
        env: {
          locale: getCurrentLanguage(config.supportedLanguages)
        }
      }
    };
    document.addEventListener('contextmenu', event => event.preventDefault());

    storageData = localStorage.getItem(storageKey);
    if (!storageData) {
      storageData = {};
    } else {
      storageData = JSON.parse(storageData);
    }
    //try to move saves
    if (!storageData['qmsq']) {
      storageData['qmsq'] = 1;
      storageData['highscore'] = localStorage.getItem('highscore');

      if (window._YaSDK) {
        window._YaSDK.getPlayer().then(_player => { //was need for return score to player after some time can be deleted
          if (_player) {
            var id = _player.getUniqueID();
            if (id === '/I6AKlIglJM4CcaItguzq5N7nlRB8Bq4kAxpZOgEysU=') {
              storageData['highscore'] = 1314450;
            }
          }
          // console.error('curr id', id);
          callBack(null, settings, sgSdk);
        }).catch(err => {
          callBack(null, settings, sgSdk);
        });;
        return;
      }
    }
    callBack(null, settings, sgSdk);
  }

  function trigger(key, data) {
    switch (key) {
      case "restore":
        restore(data);
        break;

      case "loading.completed":
        loadingComplete(data);
        break;

      case "loading.update":
        loadingUpdate(data);
        break;

      case "levelStart":
        levelStart(data);
        break;

      case "gameTracking":
      case "start":
      case "levelFinish":
        nothing(data);
        break;

      case "save":
        save(data);
        break;

      case "beforePlayButtonDisplay":
      case "playButtonPressed":
        callbackCall(data);
        break;

      case "rewardedAd":
        rewardedAd(data);
        break;

      default:
        break;
    }
  }

  function nothing(data) {
    // we dont use this data for now
   };

  function restore(data) {
    data.callback(null, storageData[data.key]);
  }

  async function loadingComplete(data) {
    var userData = { id: "100" };

    // data.callback(null, userData);
    config.runGame();
  }

  function loadingUpdate(data) {
    // we dont use this data for now
  }

  function levelStart(data) {
    // we dont use this data for now
  }

  function save(data) {
    storageData[data.key] = data.value;
    localStorage.setItem(storageKey, JSON.stringify(storageData));

    data.callback();
  }

  function callbackCall(data) {
    data.callback();
  }

  function rewardedAd(data) {
    var success = Math.random() > 0.25;

    data.callback(success);
  }

  return {
    initialize: initialize,
    trigger: trigger,
    GA: {
      GameAnalytics: {
        setCustomDimension01: nothing,
        addDesignEvent: nothing,
      }
    }
  }

}();
