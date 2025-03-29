import PropTypes from "prop-types"

export const FunctinnSample = (props) => {
    const { handleclick}=props;
  return (
    <div>
        <p>this is function component</p>
        <button onClick={handleclick}>Clickme!</button>
    </div>
  ); 
}

FunctinnSample.propTypes={
    handleclick:PropTypes.func.isRequired,
};