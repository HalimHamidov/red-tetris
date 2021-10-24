import { toast } from "react-toastify";
import { socket } from "../hooks";
import store from "../Store";

export const HashFormat = (hash) => {
  const regexp = /(?<room>[a-zA-Z0-9]{1,18})\[(?<usr>[a-zA-Z0-9]{1,18})\]/;
  const found = hash.match(regexp);
  if (!found) {
    toast.error(
      "[!] Please Enter Up to 18 characters[!]"
    );
    return false;
  }
  return found;
};
export const checkHash = (hash) => {
  if (!hash.trim()) 
    return false;
  const found = HashFormat(hash)
  if (found){
    socket.emit("joinRoom", {
      user: found.groups.usr,
      room: found.groups.room,
      mode: store.getState().room.mode,
    });
    return true
  }
};