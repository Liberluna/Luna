var Luna = {
  Cmp: {
    Build: function (Selector) {
      if (typeof Selector == 'undefined') {
        Selector = "";
      }

      let _Cmps = document.querySelectorAll(Selector + "[cmp]");
      for (let i = 0; i < _Cmps.length; i++) {
        fetch(_Cmps[i].getAttribute('cmp'))
          .then(response => response.text())
          .then(data => {
            data = Luna.Ls.TmpProp(data, _Cmps[i].getAttribute('slot'));
            _Cmps[i].innerHTML = data
              .replaceAll("File not found", "Luna : Cmp Undefind")
              .replaceAll(
                " cannot be found. It may have been moved, edited, or deleted.",
                " : Undefind"
              );
          })
          .catch(error => {
            Luna.Csl.Error(error);
          });
      }
    }
  },
  Csl: {
    Warn: function (msg) {
      console.warn('Luna : ', msg);
    },
    Error: function (msg) {
      console.error('Luna : ', msg);
    },
    Info: function (msg) {
      console.info('Luna : ', msg);
    },
    Log: function (msg) {
      console.log('Luna : ', msg);
    },
    Clear: function () {
      console.clear();
    }
  },
  Ls: {
    GetProp: function (key, box) {
      if (typeof key === 'string') {
        if (typeof box !== 'undefined') {
          let key_box = Function('return ' + box)();
          return key_box[key];
        }
        return Function('return ' + key)();
      }
      return undefined;
    },
    TmpProp: function (str, box) {
      const regex = /{{\s*([\w.]+)\s*}}/g;
      const result = str.replace(regex, (match, propName) => {
        const value = Luna.Ls.GetProp(propName, box);
        return value !== undefined ? value : match;
      });
      return result;
    }
  },
  User: {
    Set: function (func, name) {
      if (typeof Luna.User[name]) {

      }

      if (typeof func === 'function') {
        Luna.User[name] = func;
      } else if (typeof func === 'string') {
        let funcStr = 'Luna.User.' + name + ' = ' + func;
        Luna.Ls.GetProp(funcStr);
      } else {
        console.error('Luna : Invalid function.');
      }
    },
    Delete: function (name) {
      delete Luna.User[name];
    }
  }
};

Luna.Cmp.Build();

Luna.User.Set(
  function test() {
    console.log("tests");
  },
  "test"
);

Luna.User.test();