

/* eslint-disable react/react-in-jsx-scope */

import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod"


import {
  HomeContainer,
  StartCountdownButton, StopCountdownButton
}
  from "./styles";

import { NewCycleForm } from "./components/NewCicleForm";
import { CountDown } from "./components/CountDown";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";










export function Home() {


  const{activeCycle ,createNewCycle,interruptCurrentCycle} =useContext(CyclesContext)

  

 


  const newCycleFormValidationSchema = (
    zod.object({
      task: zod.string().min(1, 'informe a tarefa').max(50),
      minutesAmount: zod.number().int().min(1).max(60),
    })
  )

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>


  const newCycleForm = useForm<NewCycleFormData>({

    resolver: zodResolver(newCycleFormValidationSchema),

    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })

  const{handleSubmit,watch, reset}=newCycleForm


  function handleCreateNewCycle(data: NewCycleFormData){
    createNewCycle(data)
    reset()
  
  }








 

  const task = watch('task')
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">

       

        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>  
          <CountDown />




        {activeCycle ? (

          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            começar
          </StartCountdownButton >
        )}
      </form>
    </HomeContainer>
  )
}