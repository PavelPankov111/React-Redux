import React from 'react'
import {connect} from 'react-redux'
import {createPost, showAlert} from '../redux/actions'
import {Alert} from './Alert'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            key: '',
        }
    }

    submitHandler = (e) => {
        console.log(this.state)
        e.preventDefault()
        if(this.state.title === ''){
            this.props.showAlert("вы не можете отправлять пустое поле")
             
            return
        }
        const newPost = {
            title: this.state.title,
            key: Date.now().toString()
        }
        this.props.createPost(newPost)
        console.log(newPost)
    }

    handleInput = e => {
        e.persist()
        this.setState(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert text={this.props.alert}/>}
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInput}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )

    }
}

const mapStateToProps = {
    createPost, showAlert
}

const mapToProps = state => ({
    alert: state.app.alert
})

export default connect(mapToProps, mapStateToProps)(PostForm)