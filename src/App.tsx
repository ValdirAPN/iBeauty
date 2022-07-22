import { BottomNavigation } from "./components/BottomNavigation"
import { OngoingAppointment } from "./components/OngoingAppointment"

function App() {
  return (
    <>
      <BottomNavigation />
      <div className="h-screen max-h-[calc(100vh_-_4rem)]">
        <OngoingAppointment />
      </div>
    </>
  )
}

export default App
