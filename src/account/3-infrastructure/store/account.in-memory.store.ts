export class AccountInMemoryStore {
  
  store = new Map<string, string>()

  load(id: string) {
    const name = this.store.get(id)
    if (!name) {
      return undefined
    }
    return { id, name }
  }

  save(id: string, name: string) {
    this.store.set(id, name)
  }

}