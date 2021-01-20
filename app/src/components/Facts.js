import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFact } from '../actions';

const Facts = ({fact, isFetching, error, getFact }) => {

    useEffect(() => {
        getFact();
      }, [getFact]); 

    const handleClick = () => {
        getFact();
    }

    if(error){
        return <h3>Whoopsie daisy. Something broke: {error}</h3>;
    }

    if(isFetching){
        return <h3>Get right with ya!</h3>
    }

    return(
        <>
        <h3>Ran(dumb): {fact}</h3>
        <button onClick={handleClick}>Get another one!</button>
        </>
    )

}

const mapStateToProps = state => {
    return {
        fact: state.fact,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getFact })(Facts)