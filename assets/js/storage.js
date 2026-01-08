const STORAGE_KEY = "calendar-storage";

function initStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    const data = {
      id: 1,
      fecha: new Date().toISOString().split("T")[0]
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
}

function getStorageData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}
