import React from 'react';


class Testthu extends React.Component {
    state = {
        name: 'ronaldo',
        chanel: 'hung stupid'
    }

    handleOnChangName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <>
                <div className='firstname'>
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangName(event)} />
                    hello my Component my name is {this.state.name}
                </div>
                <div className='lastname'>
                    abcxyz {this.state.chanel}
                </div>
            </>
        )
    }
}
export default Testthu;