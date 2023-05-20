var Luna = {
    Cmp: {
        Build: function () {
            let _Cmps = document.querySelectorAll('[cmp]');
            for (let i = 0; i < _Cmps.length; i++) {
                fetch(_Cmps[i].getAttribute('cmp'))
                    .then(response => response.text())
                    .then(data => {
                        data = Luna.Ls.TmpProp(data, _Cmps[i].getAttribute('slot'));
                        _Cmps[i].innerHTML = data.replaceAll("File not found","Luna : Cmp Undefind").replaceAll(" cannot be found. It may have been moved, edited, or deleted."," : Undefind");
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
            if (typeof key) {
                if (!typeof box) {
                    return undefined;
                }
                let key_box = Function('return ' + box)();
                /*
                    box => 連想配列 => key取得
                    key_box[key] => 値
                */
                return key_box[key];
            }
            return Function('return ' + key)();
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
            Luna.User[name] = func; // 関数に変換
        }
    }
};

//let name = "test"
Luna.Cmp.Build();

Luna.User.Set(`
    function () {
        console.log("test");
    }
`, "test")

//Luna.User.test();
