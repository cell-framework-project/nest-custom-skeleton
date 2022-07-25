import { UserLoggedEvent } from "./user.logged.event";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";

@EventsHandler(UserLoggedEvent)
export class UserLoggedEventEventHandler implements IEventHandler<UserLoggedEvent> {

  handle(event: UserLoggedEvent) {
    console.log(event);
  }
}