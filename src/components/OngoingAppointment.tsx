import { CaretDown } from "phosphor-react";
import { useState } from "react";
import { Button } from "./Button";

export function OngoingAppointment() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isDone, setIsDone] = useState(false)

  function handleIsCollapsed() {
    setIsCollapsed((prevState) => !prevState)
  }

  function handleFinish() {
    setIsDone(() => true)
  }

  function handleCancel() {
    setIsDone(() => true)
  }

  return (
    <>
      <section className={`fixed bottom-[4rem] right-0 left-0 bg-primary-100 text-primary-900 rounded-md flex flex-col justify-between duration-500`}>
        <span className={`${isCollapsed && 'hidden'} p-4 flex flex-col justify-between tablet:flex-row`}>
          {isDone ? (
            <p>Nenhuma sessão ativa. Inicie um novo atendimento</p>
          ) : (
            <>
              <span className="text-center px-4 pb-4 tablet:text-left tablet:pb-0">
                <p className="text-lg leading-5 font-medium mb-2">Priscila Stefany Chaves de Souza</p>
                <p>Micropigmentação</p>
              </span>

              <span className="flex flex-col gap-4">
                <Button text="Finalizar" onClick={handleFinish} />
                <Button text="Cancelar" onClick={handleCancel} isSecondary />
              </span>
            </>
          )}
        </span>

        <span className="bg-primary-100 h-14 flex items-center justify-center border-t-2 border-primary-900 hover:cursor-pointer select-none" onClick={handleIsCollapsed}>
          <CaretDown size={32} className={`${isCollapsed && 'rotate-180'} transition-all duration-500`} />
          <p className="ml-2">Sessão Atual</p>
        </span>
      </section>
    </>
  )
}