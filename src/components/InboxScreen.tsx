// src/components/InboxScreen.js

import React, { useState } from 'react';
import {PureTaskList} from './TaskList';
import {TaskInterface} from "./Task"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { addTask } from '../store/taskSlice'



export interface ScreenProps {
    error?: string
}

export const PureInboxScreen: React.FC<ScreenProps> = ({ error }) => {

    const currentState = useSelector((state:TaskInterface[]) => (state))
    const dispatch = useDispatch() 
    const [input , setInput] = useState<string>("")
    
    const handleSubmit = () => {
        if(!input){
            alert!("Write something before adding")
        }
        else {
            dispatch(addTask({input}))
        }
    }

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }



  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">
            <input type="text" value = {input}  onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}   />
            <button className = "add_button"  onClick = {handleSubmit} >Add </button>
          </span>
        </h1>
      </nav>
      <PureTaskList tasks = {currentState} loading = {false} />
    </div>
  );
}

