import React, {Component} from 'react';
export default class PlayList extends Component{
  constructor (props) {
      super(props);
  }

  static defaultProps = {

  }

  static propTypes = {

  }

  state = {
    selectedId: null
  }
  componentDidMount()
  {

  }

  handleClick(id){
    // console.log("on li click "+id);
    if(id !== this.state.selectedId){
      this.setState({
        selectedId:id
      });
      this.props.onClick(id);
    }
    // console.log(this);
  }

  render()
  {
    const {playlists} = this.props;
    // console.log("playlists",playlists);
    let selectedId = this.state.selectedId;
    return (
      <ul className="nm-play-list">
        {playlists.map((item,index) => {
          let selectedClass = "";
          selectedClass = item.id === selectedId ? "selected" : "";
          return (<li key={item.id} onClick={() => this.handleClick(item.id)} className={selectedClass}>
            <span className="iconfont icon-music"></span>
            <span className="text">{item.name}</span>
            </li>);
        })}
      </ul>
    );
  }
}
