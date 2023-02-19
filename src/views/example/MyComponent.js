import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Văn Thanh',
        love: 'Thu Ngân',
    }


    /**
     * JSX => return block (div) hoặc 
     * Fragment(mảnh vở): có thể in ra 2 block (React.Fragment)
     * React có thể dùng javascript bên trong thẻ html đc viết trong 1 component
     */

    handleOnChangeName = (event) => {
        this.setState({
            name : event.target.value
        })
    }
    render() {
        return (
            <>
                <div className="first">
                    { console.log(`My name is :`, this.state.name) }
                    ThanhRain love { this.state.love }
                </div>
                <div className="second">
                    <input type="text" value={this.state.name}
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is: {this.state.name}
                </div>
            </>
            // <React.Fragment>
            //     <div className="first">
            //         { console.log(`My name is :`, name) }
            //         ThanhRain love { name }
            //     </div>
            //     <div className="second">
            //         abc
            //     </div>
            // </React.Fragment>
        )
    }
}

export default MyComponent;