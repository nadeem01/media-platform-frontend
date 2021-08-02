import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import Image from 'react-bootstrap/Image';
import { getAssignedMedia } from './actions';
import './styles.css';
const UserMedia = ({ toggleMedia, setToggleMedia }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.media);
  const { assignedMedia } = useSelector((state) => state.userMedia);

  const { currentUser } = useSelector((state) => state.auth);

  const [userImages, setUserImage] = useState([]);

  const [hoverItem, setHoverItem] = React.useState(null);

  useEffect(() => {
    dispatch(getAssignedMedia(currentUser.id));
  }, []);
  useEffect(() => {
    if (assignedMedia.length > 0) {
      setUserImage(assignedMedia);
    }
    if (assignedMedia.length == 0) {
      setUserImage([]);
    }
  }, [assignedMedia]);
  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, cat) => {
    debugger;
    let id = e.dataTransfer.getData('id');
    let currentDraggedImage = data.filter((m) => m.id === +id);
    console.log('currentDraggedImage', currentDraggedImage);
    console.log('userImages', userImages);
    setUserImage([...userImages, ...currentDraggedImage]);
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
    <div
      className='user-media'
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e)}
    >
      <div className='user-media-header'>
        <h4>My Media</h4>
        <Button
          className='primary'
          onClick={() => setToggleMedia(!toggleMedia)}
        >
          {toggleMedia ? 'Hide Media' : 'Add Media'}
        </Button>
      </div>
      <div className='gallery'>
        {userImages && userImages.length === 0 && (
          <p>Please drag item here from the Available Media below!!!</p>
        )}
        {userImages &&
          userImages.length > 0 &&
          userImages.map((m) => {
            console.log(m, 'svgsdf');
            return (
              <div
                className='gallery-item'
                onMouseEnter={(e) => handleMouseEnter(e, m)}
                onMouseLeave={() => handleMouseLeave()}
              >
                {hoverItem && hoverItem.id == m.id && (
                  <div className='overlay'>
                    <p>
                      <b>{hoverItem.name}</b>
                    </p>
                    <p>{hoverItem.description}</p>
                  </div>
                )}
                <Image src={m.url} rounded height='150px' width='auto' />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserMedia;
