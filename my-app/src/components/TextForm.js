import PropTypes from 'prop-types'


export default function textarea(props) {
  return (
  <div className="mb-3">
  <h1>{props.heading}</h1>
  <label for="myBox" className="form-label my-3">Example textarea</label>
  <textarea className="form-control" id="mybox" rows="8"></textarea>
  </div>
  )
}


