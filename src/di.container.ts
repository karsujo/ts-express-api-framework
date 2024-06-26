import { createContainer, asClass, InjectionMode, asValue } from "awilix";
import UserRepository from "./repositories/user.repository";
import UserService from "./services/user.service";
import { LogRepository } from "./repositories/log.repository";
import { LogService } from "./services/log.service";

const container = createContainer({
    injectionMode: InjectionMode.PROXY,
    strict: true,
 });
 

 container.register({
    userRepository: asClass(UserRepository).singleton(),
    logRepository : asClass(LogRepository).singleton()

 });


 container.register({
    userService: asClass(UserService).singleton(),
    logService: asClass(LogService).singleton()
 }); 

export default container; 
