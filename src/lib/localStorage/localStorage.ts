class LocalStorage {
  public getItem(key: string): string | null {
    let item = null;
    if (localStorage.getItem(key) !== null) {
      item = localStorage.getItem(key);
    }
    return item;
  }

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public removeCookie(key: string): void {
    localStorage.removeItem(key);
  }
}

export default new LocalStorage();
