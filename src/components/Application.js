import React from "react";
import Header from "./Header";
import Body from "./Body";
import uuid from "uuid";

class Application extends React.Component {
  state ={
    options: this.props.options
  }
  handleAddOption = () => {
    this.setState((prevState) => ({
      options: prevState.options.concat({
        id: uuid.v4(),
        title: 'My Home',
        smallTitle: '...',
        device: "0",
        pluging: "0"
      })
    }));
  }
  handleDeleteOption = (optionId) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option.id !== optionId)
    }));
  }
  handleEditOption = (option) => {
    //objIndex = options.findIndex((obj => obj.id === option.id));
    this.setState((prevState) => {
      const newOptions = prevState.options.map((opt) => {
        if(opt.id === option.id) {
          opt.smallTitle = option.smallTitle;
          opt.device = option.device;
          opt.pluging = option.plugin;            
        }
        return opt;
      });
      return {options: newOptions}
    });
  }
  render() {
    return (
      <div>
        <Header 
        handleAddOption={this.handleAddOption} 
        />
        <Body 
        options={this.state.options}
        handleDeleteOption={this.handleDeleteOption}
        handleEditOption={this.handleEditOption}
        />
      </div>
    );
  }
}

Application.defaultProps = {
  options: [{
    id: uuid.v4(),
    title: 'My Home',
    smallTitle: 'Living Room',
    device: "1",
    pluging: "2"
  }]
};

export default Application;
