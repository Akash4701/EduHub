import React, { useEffect, useRef, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

const appId = 'f1a144fc1057406393b45513c7ae7038'; // Replace with your Agora App ID
const token = '007eJxTYPC733/M/G3u3Pnu1hfW/1/zWHJ3wvuwtBubG56GbPzG5GKhwJBmmGhoYpKWbGhgam5iYGZsaZxkYmpqaJxsnphqbmBssX1tfVpDICMDy5lgRkYGCATzGUpSi0sYGAAGHiE2'; // Replace with your Agora Token


const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

const AgoraVideoCall = () => {
  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);
  const channelName = 'test'; // Replace with your channel name
  const localTracks = useRef({ videoTrack: null, audioTrack: null });

  useEffect(() => {
    const init = async () => {
      client.on('user-published', handleUserPublished);
      client.on('user-unpublished', handleUserUnpublished);
      client.on('user-left', handleUserLeft);

      try {
        await client.join(appId, channelName, token, null);
        localTracks.current.videoTrack = await AgoraRTC.createCameraVideoTrack();
        localTracks.current.audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        await client.publish(Object.values(localTracks.current));
        localTracks.current.videoTrack.play('local-player');
        setStart(true);
      } catch (error) {
        console.error('Failed to join channel or publish tracks:', error);
      }
    };

    init();

    return () => {
      client.leave();
      localTracks.current.videoTrack && localTracks.current.videoTrack.stop();
      localTracks.current.audioTrack && localTracks.current.audioTrack.stop();
      localTracks.current.videoTrack && localTracks.current.videoTrack.close();
      localTracks.current.audioTrack && localTracks.current.audioTrack.close();
    };
  }, []);

  const handleUserPublished = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === 'video') {
      setUsers((previousUsers) => [...previousUsers, user]);
      user.videoTrack.play(`user-${user.uid}`);
    }

    if (mediaType === 'audio') {
      user.audioTrack.play();
    }
  };

  const handleUserUnpublished = (user, mediaType) => {
    if (mediaType === 'video') {
      setUsers((previousUsers) => previousUsers.filter((u) => u.uid !== user.uid));
    }
  };

  const handleUserLeft = (user) => {
    setUsers((previousUsers) => previousUsers.filter((u) => u.uid !== user.uid));
  };

  return (
    <div>
      <h1>Agora Video Call</h1>
      <div id="local-player" style={{ width: '400px', height: '400px' }}></div>
      {users.map((user) => (
        <div id={`user-${user.uid}`} key={user.uid} style={{ width: '400px', height: '400px' }}></div>
      ))}
    </div>
  );
};

export default AgoraVideoCall;
