import React from 'react';
import NewsPiece from './NewsPiece';
import { NewsPieceProps } from './NewsPiece';

interface NewsPiecesProps {
  newsData: Object[];
}

const NewsPieces: React.FC<NewsPiecesProps> = ({ newsData }) => {
  return (
    <div className="news-pieces">
      {newsData.map((n: NewsPieceProps) => (
        <NewsPiece
          key={n.objectID}
          url={n.url}
          title={n.title}
          created_at={n.created_at}
        />
      ))}
      <style jsx>{`
        .news-pieces {
          max-height: 75vh;
          overflow: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none;
          padding-top: 10px;
        }
        .news-pieces::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default NewsPieces;
