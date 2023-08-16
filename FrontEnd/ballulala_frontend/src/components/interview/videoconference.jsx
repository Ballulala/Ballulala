import React, { useState, useRef, useEffect, useCallback } from "react";
import io from "socket.io-client";
import Video from "./video";

const pc_config = {
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302",
    },
  ],
};
const SOCKET_SERVER_URL = "https://i9d110.p.ssafy.io:8083";

const VideoChat = () => {
  const socketRef = useRef();
  const pcsRef = useRef({});
  const localVideoRef = useRef(null);
  const localStreamRef = useRef();
  const [users, setUsers] = useState([]);

  const getLocalStream = useCallback(async () => {
    try {
      const localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
          width: 240,
          height: 240,
        },
      });

      localStreamRef.current = localStream;

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = localStream;
      }

      if (!socketRef.current) {
        return;
      }

      socketRef.current.emit("join_room", {
        room: "1234",
        email: "abcd9351@naver.com",
      });
    } catch (e) {
      console.log(`getUserMedia error: ${e}`);
    }
  }, []);

  const createPeerConnection = useCallback(
    (socketID: string, email: string) => {
      try {
        const pc = new RTCPeerConnection(pc_config);

        pc.onicecandidate = (e) => {
          if (!(socketRef.current && e.candidate)) {
            return;
          }

          console.log("onicecandidate");

          socketRef.current.emit("candidate", {
            candidate: e.candidate,
            candidateSendID: socketRef.current.id,
            candidateReceiveID: socketID,
          });
        };

        pc.oniceconnectionstatechange = (e) => {
          console.log(e);
        };

        pc.ontrack = (e) => {
          console.log("ontrack success");

          setUsers((oldUsers) =>
            oldUsers
              .filter((user) => user.id !== socketID)
              .concat({
                id: socketID,
                email,
                stream: e.streams[0],
              })
          );
        };

        if (localStreamRef.current) {
          console.log("localstream add");

          localStreamRef.current.getTracks().forEach((track) => {
            if (!localStreamRef.current) {
              return;
            }
            pc.addTrack(track, localStreamRef.current);
          });
        } else {
          console.log("no local stream");
        }

        return pc;
      } catch (e) {
        console.error(e);
        return undefined;
      }
    },
    []
  );

  useEffect(() => {
    socketRef.current = io.connect(SOCKET_SERVER_URL);

    getLocalStream();

    socketRef.current.on(
      "all_users",
      (allUsers: Array<{ id: string, email: string }>) => {
        allUsers.forEach(async (user) => {
          if (!localStreamRef.current) {
            return;
          }

          const pc = createPeerConnection(user.id, user.email);

          if (!(pc && socketRef.current)) {
            return;
          }

          pcsRef.current = { ...pcsRef.current, [user.id]: pc };

          try {
            const localSdp = await pc.createOffer({
              offerToReceiveAudio: true,
              offerToReceiveVideo: true,
            });

            console.log("create offer success");

            await pc.setLocalDescription(new RTCSessionDescription(localSdp));

            socketRef.current.emit("offer", {
              sdp: localSdp,
              offerSendID: socketRef.current.id,
              offerSendEmail: "offerSendSample@sample.com",
              offerReceiveID: user.id,
            });
          } catch (e) {
            console.error(e);
          }
        });
      }
    );

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }

      users.forEach((user) => {
        if (!pcsRef.current[user.id]) {
          return;
        }

        pcsRef.current[user.id].close();
        delete pcsRef.current[user.id];
      });
    };
  }, [createPeerConnection, getLocalStream]);

  return (
    <div>
      <video
        style={{
          width: 240,
          height: 240,
          margin: 5,
          backgroundColor: "black",
        }}
        muted
        ref={localVideoRef}
        autoPlay
      />
      {users.map((user, index) => (
        <Video key={index} email={user.email} stream={user.stream} />
      ))}
    </div>
  );
};

export default VideoChat;
