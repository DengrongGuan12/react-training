import React, { Component } from 'react';

export default class TrackTable extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount()
    {

    }

    render()
    {
      const tracks = this.props.selectedPlayList ? this.props.selectedPlayList.tracks : [];
      return (<div className="nm-track-table">
        <table className="track-table">
          <thead>
            <tr>
              <td>音乐标题</td>
            </tr>
          </thead>
          <tbody>
            {tracks.map((item,index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>);

    }
}
