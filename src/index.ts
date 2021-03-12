import { AccountService } from "./account/2-application/account.service";
import { ConsoleJSONLogger } from "./account/3-infrastructure/logger/console-json.logger";
import { AccountInMemoryStore } from "./account/3-infrastructure/store/account.in-memory.store";

// INIT

const accountStore = new AccountInMemoryStore();
const logger = new ConsoleJSONLogger()

const accountService = new AccountService(accountStore, logger)

// RUN

const tamtam = accountService.register('tamtam')

const tomtom = accountService.register('tomtom')

accountService.impersonate(tamtam.id, tomtom.id)

const freshTamTam = accountStore.load(tamtam.id)!

console.log(freshTamTam.name);