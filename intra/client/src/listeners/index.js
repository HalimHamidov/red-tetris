import { socket } from "../hooks/index";
import store from "../Store";
import {
    ROOM_JOINED,
    CHANGE_PIECE,
    START_GAME,
    GAME_OVER,
} from "../actions/roomAction";
import { toast } from "react-toastify";
import { checkHash } from "../actions/checkHash";
import { UPDATE_PLAYER, PLAYER_LOST } from "../actions/playerAction";
import { ADD_PLAYER } from "../actions/playersAction";
import { UPDATE_MEMBER } from "../actions/roomAction";
import { SET_ROW } from "../actions/playerAction";

export const actionListener = (dispatch, getState) => {
    window.onhashchange = () => {
        checkHash(window.location.hash.substring(1));
    };

    socket.on("new score", (result) => {
        dispatch({ type: ADD_PLAYER, data: result });
    });
    socket.on("add row", () => {
        let State = getState();
        dispatch({ type: SET_ROW, data: State.player.row + 1 });
    });
    socket.on("Join_success", (data) => {
        dispatch({ type: UPDATE_PLAYER, data });
        dispatch({ type: ROOM_JOINED, data });
    });
    newFunction();
    socket.on("start game", (data) => {
        dispatch({ type: CHANGE_PIECE, data: data });
        dispatch({ type: START_GAME });
        let resetSpecters = []
        store.getState().players.map(e => {
            resetSpecters.push({...e, stage: [], score: 0 })
        })
        dispatch({ type: ADD_PLAYER, data: resetSpecters })
    });

    socket.on("new_tetriminos", (data) => {
        dispatch({ type: CHANGE_PIECE, data: data });
    });

    socket.on("new member", (result) => {
        let tmp = [];
        let i = 0;
        for (i = 0; i < result.length; i++)
            if (result[i].user !== "")
                tmp.push({ user: result[i].user, score: result[i].score, stage: [] });
        dispatch({ type: UPDATE_MEMBER, data: i });
        dispatch({ type: ADD_PLAYER, data: tmp });
    });

    socket.on("Winner", (data) => {
        dispatch({ type: GAME_OVER });
        if (store.getState().player.username !== data.user) {
            dispatch({ type: PLAYER_LOST });
        }
    });

    socket.on("Update Admin", (data) => {
        let tmp = {
            user: data.user.user,
            is_admin: data.is_admin,
        };
        dispatch({ type: UPDATE_PLAYER, data: tmp });
    });

    socket.on("React-Toastify", (data) => {
        switch (data.type) {
            case "error":
                {
                    toast.error(data.message);
                    setTimeout(() => {
                        dispatch({ type: "RESET_STATE" });
                        window.location.hash = "";
                    }, 500);
                    break;
                }
            case "success":
                toast.success(data.message);
                break;
            default:
                toast.error(data.message);
                break;
        }
    });

    function newFunction() {
        socket.on("Stage", (rs) => {
            for (let i = 0; i < rs.players.length; i++) {
                if (rs.user == rs.players[i].user) {
                    rs.players[i] = {
                        user: rs.user,
                        score: rs.players[i].score,
                        stage: rs.stage,
                    };
                }
            }
            dispatch({ type: ADD_PLAYER, data: rs.players });
        });
    }
};