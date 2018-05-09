import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
	<div>
	   <div className="title">ToDo App</div>
	   <AddTodo />
	   <Footer />
	   <VisibleTodoList />
	</div>
)

export default App
