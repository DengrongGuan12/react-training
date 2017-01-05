import React, { Component } from 'react';

import ServiceClient from "../../base/service/ServiceClient";
import PlayList from "./PlayList";
export default class App extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
      playlists: []
    }
    async componentDidMount()
    {
      const result = await ServiceClient.getInstance().getAsyncUserPlayLists("77464772");
      // console.log(result);
      this.setState({
        playlists: result
      });
      // ServiceClient.getInstance().getUserPlayLists("77464772").then(res => {
      //   return res;
      // }).catch(error =>{
      //   console.log(error);
      // }).then(res => {
      //   console.log(res);
      // });
    }

    render()
    {
      const {playlists} = this.state;
      console.log(playlists);
      return (
        <div className="nm-app">
          <header>
            <div className="logo"></div>
            <h1>网易云音乐</h1>
          </header>
          <main>
            <aside><PlayList playlists={playlists}/></aside>
            <section></section>
          </main>
          <footer></footer>
        </div>
      );

    }
}
