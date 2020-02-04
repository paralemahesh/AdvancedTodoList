const storeData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getDataFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export { storeData, getDataFromStorage };