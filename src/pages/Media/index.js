import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { getMediaRequest, updateAvailableimages } from './actions';
import Image from 'react-bootstrap/Image';
import Draggable from 'react-draggable';

import './styles.css';
const Media = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.media);
  const { currentUser } = useSelector((state) => state.auth);

  const [publicImages, setPublicImages] = React.useState([]);
  const [hoverItem, setHoverItem] = React.useState(null);

  useEffect(() => {
    dispatch(getMediaRequest());
  }, [data.length]);
  useEffect(() => {
    if (data.length > 0) {
      setPublicImages(data);
    }
    if (data.length == 0) {
      setPublicImages([]);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  const onDragStart = (e, id) => {
    console.log('Dragging');
    e.dataTransfer.setData('id', id);
  };

  const onDragEnd = (e, imageId) => {
    console.log('Dragging end', imageId);
    const userId = currentUser.id;
    //call the api
    dispatch(updateAvailableimages(userId, imageId));
  };

  const handleMouseEnter = (e, media) => {
    console.log('hover itme id', media.id);
    setHoverItem(media);
  };

  const handleMouseLeave = () => {
    // console.log('hover itme id', media.id);
    setHoverItem(null);
  };

  return (
    <div>
      <div className='user-media-header'>
        <h4>Available Media</h4>
      </div>
      <div className='gallery'>
        {publicImages.length === 0 && <h6>No media available!!!</h6>}
        {publicImages &&
          publicImages.length > 0 &&
          publicImages.map((m) => {
            return (
              <div
                className='gallery-item'
                onMouseEnter={(e) => handleMouseEnter(e, m)}
                onMouseLeave={() => handleMouseLeave()}
                draggable
                onDragStart={(e) => onDragStart(e, m.id)}
                onDragEnd={(e) => onDragEnd(e, m.id)}
              >
                {hoverItem && hoverItem.id == m.id && (
                  <div className='overlay'>
                    <p>
                      <b>{hoverItem.name}</b>
                    </p>
                    <p>{hoverItem.description}</p>
                  </div>
                )}
                <Image src={m.url} rounded height='150px' width='auto'></Image>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Media;
