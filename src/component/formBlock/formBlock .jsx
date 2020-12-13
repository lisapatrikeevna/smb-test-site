import React, {Component} from 'react';
import cl from './formBlock.module.css';
import cits from '../../image/1citsm.png'

export const FormBlock = () => {
return(
    <div className={cl.Restangle}>
            <img src={cits} alt="" className={cl.cits}/>
            <div className={cl.mainBlock}>

            </div>
            <div className={cl.wrapForm}>
                <h6>Отправить заявку</h6>
                <p className={cl.desk}>
                    Оставьте заявку на сопровождение
                    и наш менеджер свяжется с Вами
                </p>
                <Form className={cl.form}/>
            </div>
        </div>
        )
        }
        class Form extends Component {
        constructor(props) {
        super(props);
        this.state = {
        email: ''
    };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        handleEmailChange(e){
        console.log("email:"+ e.target.value)
        this.setState({email: e.target.value})
    }
        handleSubmit(e){
        e.preventDefault();
        console.log('message was send')
    }
        render(){
        return(
        <form onSubmit= {this.handleSubmit}>
        <input type="text"
        plaseholder='enter e-mail'
        value={this.state.email}
        onChange={this.handleEmailChange}
        className={cl.input}/>
        <input type="text"
        plaseholder='enter e-mail'
        value={this.state.email}
        onChange={this.handleEmailChange}
        className={cl.input}/>
        <input type="text"
        plaseholder='enter e-mail'
        value={this.state.email}
        onChange={this.handleEmailChange}
        className={cl.input}/>
        <button className={cl.btnForm}>send</button>
        </form>
        );
    }
    }