import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mSTP } from '../../Pages/Game';

class Player extends Component {

    renderTableHeader () {
        let header = Object.keys(this.props.player.players[0])
        return header.map ((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
        });
    };

    renderTableData () {
        return this.props.player.players.map ((player, index) => {
            const { name, score } = player
            return (
                <tr key={index}>
                    <td>{name}</td>
                    <td>{score}</td>
                </tr>
            );
        });
    };

    render() {
        
        console.log(this.props.player.currentPlayer)

        // console.log(this.props.player.totalPlayers)
        // console.log(this.props.player.players)


        return (
            <div id="playerComponent">
                <p>This is the component: Player</p>        
                <table id="playerTable">
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }   
};

export default connect(mSTP) (Player);