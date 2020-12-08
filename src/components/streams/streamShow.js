import React from 'react'
import {connect} from 'react-redux'
import {fetchStream} from '../../actions'

class streamShow extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }
   
    renderContent(){
        if(!this.props.stream){
            return 'Loading...'
        }
        return (
            <div>
                 <h1>{this.props.stream.title}</h1>
               <h5> {this.props.stream.description}</h5>
            </div>
            
        )
    }
    render(){

    return (
        <div>
        {this.renderContent()}</div>
    )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {stream:state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream})(streamShow)
