function store(reducers, middlewares) {
  let state = {};

  reducers.forEach((reducer) => {
    Object.assign(
      state,
      reducer(undefined, {})
    );
  });

  let signals = {}
  let Dep = {
    target: null,
    subs: {},
    depend(deps, dep) {
      if (!deps.includes(this.target)) {
        deps.push(this.target);
      }
      if (!Dep.subs[this.target].includes(dep)) {
        Dep.subs[this.target].push(dep);
      }
    },
    getValidDeps(deps, key) {
      return deps.filter(dep => this.subs[dep].includes(key));
    },
    notifyDeps(deps) {
      deps.forEach(notify);
    }
  }

  observeData(state);

  return {
    get,
    set,
    getState,
    observe,
    notify,
    dispatch,
  }

  function getState() {
    return state;
  }

  function dispatch(action) {
    reducers.forEach((reducer) => {
      const newState = reducer(state, action);
      updateState(newState);
    });
  }

  function updateState(newState) {
    for (let key in newState) {
      state[key] = newState[key];
    }
  }

  function set(key, value) {
    state[key] = value;
  }

  function get(key) {
    return state[key];
  }

  function observe(property, signalHandler) {
    if (!signals[property]) signals[property] = [];
    signals[property].push(signalHandler);
    return this;
  }

  function notify(signal) {
    if (!signals[signal] || signals[signal].length < 1) return;
    signals[signal].forEach((signalHandler) => {
      signalHandler(state[signal]);
    });
  }

  function makeComputed(obj, key, computeFunc) {
    let cache = null;
    let deps = [];

    observe(key, () => {
      cache = null;
      deps = Dep.getValidDeps(deps, key);
      Dep.notifyDeps(deps, key);
    });

    Object.defineProperty(obj, key, {
      get() {
        if (Dep.target) Dep.depend(deps, key);
        Dep.target = key;

        if (!cache) {
          Dep.subs[key] = [];
          cache = computeFunc.call(obj);
        }
        Dep.target = null;
        return cache;
      },
      set() { }
    })
  }

  function makeReactive(obj, key) {
    let deps = [];
    let val = obj[key];

    Object.defineProperty(obj, key, {
      get() {
        if (Dep.target) Dep.depend(deps, key);
        return val
      },
      set(newVal) {
        val = newVal;
        deps = Dep.getValidDeps(deps, key);
        Dep.notifyDeps(deps, key);
        notify(key);
      }
    })
  }

  function observeData(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'function') {
          makeComputed(obj, key, obj[key]);
        } else {
          makeReactive(obj, key);
        }
      }
    }
  }
}

export default store;