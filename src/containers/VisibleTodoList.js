import {connect} from 'react-redux'
import {toggleTodo}from '../actions'
import TodoList from '../components/TodoList'
import {VisibilityFilters } from '../actions'

const getVisibleTodo = (todos,filter) =>{
	switch(filter){
		case VisibilityFilters.SHOW_ALL:
		   return
		case VisibilityFilters.SHOW_COMPLETED:
		   return
		case VisibilityFilters.SHOW_ACTIVE:
		   return
		default:
		   throw new Error('Unkown filter: ' + filter)

	}
}

export default (TodoList)
