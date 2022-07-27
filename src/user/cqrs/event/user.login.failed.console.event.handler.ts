import { UserLoginFailedEvent } from "./user.login.failed.event";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";

@EventsHandler(UserLoginFailedEvent)
export class UserLoginFailedConsoleEventHandler implements IEventHandler<UserLoginFailedEvent> {

  handle(event: UserLoginFailedEvent) {
    console.log(event);
  }
}