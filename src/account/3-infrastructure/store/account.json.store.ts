import fs from 'fs'

interface StoredAccount {
  id: string;
  name: string;
}

export class AccountJSONStore {

  private loadStore(): StoredAccount[] {
    const rawContent = fs.readFileSync('./accounts.json').toString()
    const deserialized = JSON.parse(rawContent) as StoredAccount[]
    return deserialized
  }
  
  private saveStore(accounts: StoredAccount[]): void {
    const serialized = JSON.stringify(accounts)
    fs.writeFileSync('./accounts.json', serialized)
  }

  load(id: string) {
    const store = this.loadStore()
    const account = store.find(x => x.id === id)

    if (!account) {
      return undefined
    }

    return account
  }

  save(id: string, name: string) {
    const store = this.loadStore()
    const account = store.find(x => x.id === id)
    if (account) {
      account.name = name
    } else {
      store.push({ name, id })
    }

    this.saveStore(store)
  }

}