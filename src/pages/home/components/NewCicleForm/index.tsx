/* eslint-disable react/react-in-jsx-scope */
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { useFormContext } from "react-hook-form";



export function NewCycleForm() {


  const {register}=useFormContext()
  

  const {activeCycle} = useContext(CyclesContext)


  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="Dê um nome para seu projeto"
        list="task-suggestions"
        {...register('task')}
        disabled={!!activeCycle}

      />

      <datalist id="task-suggestions">
        <option value="projeto 1" />
        <option value=" projeto 2" />
        <option value="projeto 3" />
        <option value="upgrade" />
      </datalist>

      <label htmlFor="">Durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}

        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}