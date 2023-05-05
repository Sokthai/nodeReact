import React, {Fragment} from "react"


const Form = (props) => {

    return (
        <Fragment>
             <div className="form-group">
                <input type="text" placeholder="Street" name="street" value={zipcode} onChange={e => props.onChange(e)} required/>
            </div>

            <div className="form-group">
                <input type="text" placeholder="City" name="city" value={zipcode} onChange={e => props.onChange(e)} required/>
            </div>

            <div className="form-group">
                <input type="text" placeholder="State" name="state" value={zipcode} onChange={e => props.onChange(e)} required/>
            </div>

            <div className="form-group">
                <input type="number" placeholder="Zipcode" name="zipcode" minLength="5" maxLength="5" value={zipcode} onChange={e => props.onChange(e)} required/>
            </div>

            <div className="form-group">
                <select name="question1" value={question1} onChange={e => props.onChange(e)} required>
                    <option value="">--select a question---</option>
                    <option value="What is your favorite color">What is your favorite color</option>
                    <option value="What is your pet name">What is your pet name</option>
                    <option value="What brand is your first car">What brand is your first car</option>
                </select>
            </div>

            
            <div className="form-group" required>
                <input type="text" placeholder="" name="answer1" value={answer1} onChange={e => props.onChange(e)} required/>
            </div>

                
            <div className="form-group">
                <select name="question2" value={question2} onChange={e => props.onChange(e)} required>
                    <option value="">--select a question---</option>
                    <option value="What is your pet name">What is your pet name</option>
                    <option value="What is your favorite color">What is your favorite color</option>
                    <option value="What brand is your first car">What brand is your first car</option>
                </select>
            </div>

            <div className="form-group">
                <input type="text" placeholder="" name="answer2" value={answer2} onChange={e => props.onChange(e)} required/>
            </div>

            <div className="form-group">
                <select name="question3" value={question3} onChange={e => props.onChange(e)} required>
                    <option value="">--select a question---</option>
                    <option value="What brand is your first car">What brand is your first car</option>
                    <option value="What is your favorite color">What is your favorite color</option>
                    <option value="What is your pet name">What is your pet name</option>
                </select>
            </div>

            <div className="form-group">
                <input type="text" placeholder="" name="answer3"  value={answer3} onChange={e => props.onChange(e)} required/>
            </div>

        
            <div className="form-group" required>
                    <input type="text" placeholder="" name="answer1" value={answer1} onChange={e => props.onChange(e)} required/>
                </div>

                    
                <div className="form-group">
                    <select name="question2" value={question2} onChange={e => props.onChange(e)} required>
                        <option value="">--select a question---</option>
                        <option value="What is your pet name">What is your pet name</option>
                        <option value="What is your favorite color">What is your favorite color</option>
                        <option value="What brand is your first car">What brand is your first car</option>
                    </select>
                </div>

                <div className="form-group">
                    <input type="text" placeholder="" name="answer2" value={answer2} onChange={e => props.onChange(e)} required/>
                </div>

                <div className="form-group">
                    <select name="question3" value={question3} onChange={e => props.onChange(e)} required>
                        <option value="">--select a question---</option>
                        <option value="What brand is your first car">What brand is your first car</option>
                        <option value="What is your favorite color">What is your favorite color</option>
                        <option value="What is your pet name">What is your pet name</option>
                    </select>
                </div>

                <div className="form-group">
                    <input type="text" placeholder="" name="answer3"  value={answer3} onChange={e => props.onChange(e)} required/>
                </div>
        </Fragment>
    )
}


export default Form