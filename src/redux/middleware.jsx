import React from 'react'
import { CREATE_POST } from './types'
import {showAlert} from './actions'

const fobiden = ['хуй', 'пизда', 'fuck', 'бля']

export const fobidenmidlware = ({ dispatch }) => {
    return function(next){
        return function(action){
            if(action.type === CREATE_POST){
                const found = fobiden.filter(i => action.payload.title.includes(i))
                if(found.length){
                    return dispatch(showAlert('Вы спамер'))
                }
            }
            return next(action)
        }
    }
}