import './InputForm.css'

function InputForm(props) {
    return (
        <div className="input-form">
            <form onSubmit={props.onSubmit}>
                <input
                    type="text"
                    placeholder="Add your todo here!"
                    value={props.todo}
                    onChange={props.onInputChangeFunction}
                />
                <button className="add-but" type='submit'>Add</button>
            </form>
        </div>
    )
}

export default InputForm