import { useDispatch, useSelector } from "react-redux/es/exports"
import { INPUT_TEXT } from "../redux/actions/actions"

const Title = () => {
   const dispatch = useDispatch()
   const state = useSelector(state => state.inputTextReducer.text)

   const handleChange = (e) => {
      dispatch({ type: INPUT_TEXT, data: e.target.value })
   }

   return <div className="card-title">
      <div className="card-title-top">
         <input type="text" onChange={handleChange} />
      </div>
      <p>{state}</p>
   </div>
}

export default Title