
import React, { Component } from 'react';
import axios from 'axios';

export class Player extends Component {
    getPlayerById(id){
        var sha1 = require('sha1');
        let result = "";  
        const player = {
            token: token,
            idPlayer: id
          };
        result = axios.post(`https://localhost:44314/api/Players`, { player })
            .then(res => {
                token = res.data;
            });
        return result;
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Player
