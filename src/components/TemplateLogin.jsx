import React from 'react'
import { Link } from 'react-router-dom'

function TemplateLogin() {
    return (
        <div>   
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <div className='button-login'>

                    <button type="submit"> Login </button>
                    <button type="submit"> Cadastrar-se </button>
                    <Link>Esqueceu a senha?</Link>
                </div>



            </form>
        </div>
    )
}

export default TemplateLogin