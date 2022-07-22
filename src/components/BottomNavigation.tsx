import { CalendarBlank, Chat, HouseSimple, IconContext, PlusCircle } from "phosphor-react";
import { Link } from "react-router-dom";

export function BottomNavigation() {
  return (
    <div className="bg-primary-400 h-16 text-white fixed bottom-0 left-0 right-0">
      <nav className="h-full flex items-center justify-evenly">
        <IconContext.Provider
          value={{ size: 24 }}>
          <Link to="/home">
            <HouseSimple />
          </Link>
          <Link to="/chats">
            <Chat />
          </Link>
          <Link to="/appointments">
            <CalendarBlank />
          </Link>
          <Link to="/new-appointment">
            <PlusCircle />
          </Link>
        </IconContext.Provider>
      </nav>
    </div>
  )
}