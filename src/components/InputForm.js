import './InputForm.css'

function InputForm(props) {
    return (
        <div className="input-form-container">
            <form onSubmit={props.onSubmit} className='input-form'>
                <input
                    type="text"
                    placeholder="What's your plan?"
                    value={props.todo}
                    onChange={props.onInputChangeFunction}
                />
                <button className="add-but" type='submit'>+</button>
            </form>
        </div>
    )
}

export default InputForm