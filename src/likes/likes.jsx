import { connect } from "react-redux"
import { INCRIMENT, DECREMENT } from "../redux/actions/actions"

const Likes = (props) => {

   return (
      <div className="button-controls">
         <button onClick={props.onIncLikes} type="button">&#9829; Likes {props.likes}</button>
         <button onClick={props.decremetLikes} type="button">Dislikes</button>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      likes: state.likeReducer.likes
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onIncLikes: () => {
         dispatch({ type: INCRIMENT })
      },
      decremetLikes: () => {
         dispatch({ type: DECREMENT })
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)