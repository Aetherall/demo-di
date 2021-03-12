import { AccountInMemoryStore } from "../3-infrastructure/store/account.in-memory.store";
import { ConsoleJSONLogger } from "../3-infrastructure/logger/console-json.logger";

export class AccountService {

  constructor(
    private readonly accountStore: AccountInMemoryStore,
    private readonly logger: ConsoleJSONLogger,
  ) { }

  register(name: string) {
    const id = Math.random().toString()
    this.accountStore.save(id, name)
    return { id, name }
  }

  impersonate(originatorId: string, impersonatedId: string) {
    const originator = this.accountStore.load(originatorId)
    if (!originator) {
      this.logger.warn('impersonation failed')
      throw new Error('could not find originator account')
    }
  
    const impersonated = this.accountStore.load(impersonatedId)
    if (!impersonated) {
      this.logger.warn('impersonation failed')
      throw new Error('could not find impersonated account')
    }

    this.accountStore.save(originator.id, impersonated.name)
    this.logger.info(`${originator.id} have renamed to ${impersonated.name}`)
  }

}