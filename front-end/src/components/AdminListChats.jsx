import React, { useState, useEffect } from 'react';
import fechtMessages from '../methods/getMessages';

function AdminListChats() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fechtMsg = async () => {
      const dbMessages = await fechtMessages();
      setMessages(dbMessages);
    };
    fechtMsg();
  }, []);

  return (
    <div>
      <div>
        {messages.length === 0
          ? <p data-testid="text-for-no-conversation">Nenhuma conversa por aqui!</p>
          : messages.map(({ email, sentTime }, i) => (
            <div
              data-testid="containerChat"
              key={ i }
              className="paracss"
            >
              <p data-testid="profile-name">{email}</p>
              <p data-testid="last-message">
                Última mensagem às
                {sentTime}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AdminListChats;
