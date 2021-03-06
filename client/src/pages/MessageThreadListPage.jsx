import { useEffect, useState } from 'react';
import { messageThreadList } from '../services/message';
import { Link } from 'react-router-dom';
import placeholder from '../assets/images/placeholder.png';
import Wrapper from '../assets/wrappers/CardWrappr';

const MessageThreadListPage = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    messageThreadList().then((data) => {
      setThreads(data.threads);
    });
  }, []);

  return (

    <Wrapper>
      {threads.length && threads.map((thread) => (
        <>
          <Link to={`/message/${thread._id}`} className="picture">
            {thread.picture && (
              <img src={thread.picture} alt={thread.name} />
            ) || (
                <img src={placeholder} alt={thread.name} />
              )}
          </Link>
          <div className="content">
            <h3>{thread.name}</h3>
            <p>{thread.description}</p>
          </div>
        </>
      )) || "There are no messages to show!"
      }
    </Wrapper>
  );



};

export default MessageThreadListPage;