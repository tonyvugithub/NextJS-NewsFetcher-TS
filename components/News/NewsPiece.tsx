import React from 'react';
import { useSelector } from 'react-redux';
import { selectThemeMode } from '../../store/slices/themeSlice';

export interface NewsPieceProps {
  objectID?: string;
  url: string;
  title: string;
  created_at: Date;
}

const NewsPiece = ({ url, title, created_at }: NewsPieceProps) => {
  const themeMode = useSelector(selectThemeMode);
  return (
    <div style={{ marginBottom: '10px' }}>
      <a
        href={url}
        target="_blank"
        className={`font-weight-bold ${
          themeMode == 'light' ? 'brown-text' : 'text-white'
        }`}
      >
        {title}
      </a>
      <p
        style={{ fontStyle: 'italic' }}
        className={themeMode == 'light' ? 'light-green-text' : 'text-warning'}
      >
        Date published: {new Date(created_at).toUTCString()}
      </p>
    </div>
  );
};

export default NewsPiece;
