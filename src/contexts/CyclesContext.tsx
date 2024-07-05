/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState, ReactNode,useReducer, useEffect } from "react";
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer"
import { addNewCycleAction, interruptCurrentCycleAction, markCurrentCycleAsFinishedAction } from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

interface CreateCycleData {
  task: string;
  minutesAmount: number;

}

interface CyclesContextType {
  
  cycles:Cycle[],  
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
  children: ReactNode;
}


export function CyclesContextProvider({ children }: CyclesContextProviderProps) {

  const [cyclesState, dispatch ] = useReducer( cyclesReducer, {

    
    cycles: [],
    activeCycleId: null,

  },
  (initialState) => {
    const storedStateJson=localStorage.getItem('@Ignite-time:cyclesState-1.0.0')

    if(storedStateJson){
      return JSON.parse(storedStateJson)
     }

     return initialState
  },
)
   


  useEffect(() =>{
    const stateJson=JSON.stringify(cyclesState)


    localStorage.setItem('@Ignite-time:cyclesState-1.0.0',stateJson)
  },[cyclesState])



  const{cycles,activeCycleId} =cyclesState;
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(()=>{
    
    if(activeCycle){
      
    return differenceInSeconds(new Date(), activeCycle?.startDate?? new Date());
    }
    return 0
  });



  function markCurrentCycleAsFinished() {
     
    dispatch(markCurrentCycleAsFinishedAction())

  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
      duration: undefined
    };


    dispatch(addNewCycleAction(newCycle ))

  
   
    setAmountSecondsPassed(0);
   
  }

  function interruptCurrentCycle() {



    dispatch(interruptCurrentCycleAction())
   

   
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
