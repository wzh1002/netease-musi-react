const actionsCreator = (type, ...argNames) => (...args) => {
    return argNames.reduce((action, key, index) => {
        action[key] = args[index];
        return action;
    }, { type });
};

const reducersCreator = (initialState, reducers) => (state = initialState, action = {}) => {
    if (reducers.hasOwnProperty(action.type)) {
        return reducers[action.type](state, action);
    }
    return state;
};

const serializeListen = num => `${Math.floor(num / 10000)}万`;

const getType = obj => Object.prototype.call(obj).replace(/\[object\s/, '').replace(/\]/, '').toLowerCase();

const classNames = (...args) => {
    let classLists = [];
    args.forEach((arg) => {
        let type = typeof arg;

        if (type === 'string' || type === 'number') {
            classLists.push(arg);
        } else if (Array.isArray(arg)) {
            classLists = classLists.concat(arg);
        } else if (type === 'object') {
            for (let key in arg) {
                if (arg.hasOwnProperty(key) && arg[key]) {
                    classLists.push(key);
                }
            }
        }
    });
    return classLists.join(' ');
};

const serializeRankNum = num => num < 10 ? '0' + num : num + '';

const localFetch = namespace => {
    const data = localStorage.getItem(namespace);
    return (data && JSON.parse(data)) || [];
};

const localSave = (namespace, data) => {
    localStorage.setItem(namespace, JSON.stringify(data))
};

const getQueryValue = (str, param) => {
    let arr,
        reg = new RegExp(`${param}=([^&]+)(&|$)`);
    if (arr = str.match(reg)) {
        return decodeURIComponent(arr[1]);
    }
    return null;
};

const addUrlParams = (url, params) => {
    const arr = Object.keys(params).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));

    if (arr.length > 0) {
        url += url.indexOf('?') === -1 ? '?' : '&';
        url += arr.join('&');
    }
    return url;
};

const computeTime = time => {
    time = time.split('.')[0];
    let arr = time.split(':');
    const len = arr.length;
    time = 0;
    for (let i = 0; i < len; i++) {
        const pos = len - i - 1;
        if (i > 2) {
            return time;
        }
        if (i === 0) {
            time += parseInt(arr[pos]);
        } else if (i === 1) {
            time += parseInt(arr[pos]) * 60
        } else if (i === 2) {
            time += parseInt(arr[pos]) * 60 * 60;
        }
    }
    return time;
};

export {
    actionsCreator,
    reducersCreator,
    serializeListen,
    getType,
    classNames,
    serializeRankNum,
    localFetch,
    localSave,
    getQueryValue,
    addUrlParams,
    computeTime
}