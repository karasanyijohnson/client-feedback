import './caseDetail.css'

const CaseDetail=()=>{
    return(
        <div className="caseDetail">
            <h2>CASE DETAIL</h2>
            <div className="caseInputContainer">
                <label> Title</label>
                <input type="text" />
            </div>
            <div className="caseInputContainer">
                <label>Description</label>
                <textarea name="Comment"  cols="50" rows="10"></textarea>
            </div>
            <button type='Submit'>Submit</button>
        </div>
    )
}
export default CaseDetail