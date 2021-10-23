class LeaveGame {
  leaveRoom = (socket, Players, io, Rooms) => {
    return new Promise((resolve, reject) => {
      let cmptr = 0;
      let winner = {};
      let tmp = Players.find((el) => el.socketId === socket.id);
      if (tmp) {
        socket.leave(tmp.room);
        let tmp2 = Players.filter((el) => el.socketId !== socket.id);
        Players = tmp2;
        for (let i = 0; i < Players.length; i++) {
          if (Players[i].room === tmp.room && !Players[i].hasLost) {
            winner = Players[i];
            cmptr++;
          }
        }
        if (cmptr === 1) io.sockets.in(tmp.room).emit("Winner", winner);
        if (Players.filter((el) => el.room === tmp.room).length === 0)
          Rooms = Rooms.filter((el) => el.name !== tmp.room);
        if (tmp.admin === true) {
          let i = Players.findIndex((el) => el.room === tmp.room);
          Players[i] = {
            ...Players[i],
            admin: true,
          };
          socket.to(Players[i].socketId).emit("Update Admin", {
            user: Players[i],
            is_admin: Players[i].admin,
          });
        }
        io.sockets.in(tmp.room).emit(
          "new member",
          Players.filter((e) => e.room === tmp.room)
        );
        resolve({
          Players: Players,
          Rooms: Rooms,
        });
      }
    });
  };
}

module.exports = LeaveGame;
