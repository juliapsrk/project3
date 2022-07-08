import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { messageSend, messageThreadLoad } from '../services/message';
import AuthenticationContext from './../context/authentication';

import './MessageThreadDetailPageStyle.scss';

const MessageThreadDetailPage = () => {
  const { id } = useParams();

  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    messageThreadLoad(id).then((data) => {
      setMessages(data.messages);
    });
  }, [id]);

  const handleMessageFormSubmission = (event) => {
    event.preventDefault();
    messageSend(id, { content }).then((data) => {
      setContent('');
      setMessages([...messages, data.message]);
    });
  };

  const { user } = useContext(AuthenticationContext);

  return (
    <div style={{ margin: '2rem 14rem' }}>
      <div
        className="message-list"
        style={{ marginLeft: '20rem', marginRight: '0', width: '500px' }}
      >
        {messages.map((message) => (
          <div
            className={
              message.sender === user._id ? 'message-sent' : 'message-received'
            }
          >
            <span>{message.content}</span>
            <br />
            <small>{new Date(message.createdAt).toGMTString()}</small>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <form onSubmit={handleMessageFormSubmission}>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <button className="btn-message">Send</button>
        </form>
      </div>
    </div>
  );
};

export default MessageThreadDetailPage;
