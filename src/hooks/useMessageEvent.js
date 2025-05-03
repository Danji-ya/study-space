import { useEffect, useCallback, useRef } from "react";

const createPostMessageHandler = (source, origin) => {
  return (message) => {
    if (!source || !origin) return;
    if (source.closed) return;

    source.postMessage(message, origin);
  };
};

/**
 * Same-Origin Policy 내에서 윈도우 간 메시지 통신을 관리하는 훅
 * @param {string} messageChannel - 메시지를 수신할 채널 이름
 * @param {function} callback - 메시지를 수신했을 때 실행될 콜백 함수
 * @param {function} callback.ack - 송신자에게 메시지를 보내는 함수
 * @returns {function} sendToParent - 부모 윈도우로 메시지를 보내는 함수
 *
 * @example
 * // 부모 컴포넌트에서 사용
 * useMessageEvent("messageChannel", (ack, payload) => {
 *   ack({ messageChannel: "targetChannel", payload: { success: true } });
 * });
 *
 * // 자식 컴포넌트에서 사용
 * const { sendToParent } = useMessageEvent("targetChannel", () => {});
 * sendToParent({ messageChannel: "messageChannel", payload: { userId: "123" } });
 */
const useMessageEvent = (messageChannel, callback) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const handleMessage = useCallback(
    (event) => {
      if (!event.origin || !window?.location?.origin) return;
      if (event.origin !== window?.location?.origin) return;
      if (!event.data || typeof event.data !== "object") return;

      const { messageChannel: targetChannel, payload } = event.data;

      if (targetChannel === messageChannel) {
        const send = createPostMessageHandler(event.source, event.origin);
        callbackRef?.current?.(send, payload);
      }
    },
    [messageChannel]
  );

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [handleMessage]);

  const sendToParent = useCallback((message) => {
    const send = createPostMessageHandler(
      window?.opener,
      window?.location?.origin
    );
    send(message);
  }, []);

  return {
    sendToParent,
  };
};

export default useMessageEvent;
