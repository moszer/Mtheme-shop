import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import widgetData from '../../Store';
import State from '../../State';

  const ImgurUploader = ({ imgData }) => {
  const [image, setImage] = useState(imgData);
  const [Imgurl, setImgurl] = useRecoilState(widgetData)
  const [State_, setState] = useRecoilState(State)

  useEffect(() => {
    // Update the image state when imgData changes
    setImage(imgData);
  }, [imgData]);

  useEffect(() => {
    const uploadImage = async () => {
      try {
        setState({
          ...State_,
          uploadState: true
        })

        const formData = new FormData();
        formData.append('image', image);

        const response = await axios.post('https://api.imgur.com/3/image', formData, {
          headers: {
            Authorization: 'Client-ID c0da6736e138e2e', // Replace YOUR_CLIENT_ID with your actual Imgur client ID
          },
        });

        console.log(response.data.data.link);

        setImgurl({
          ...Imgurl,
          img: response.data.data.link
        })

      } catch (error) {
        console.error('Error uploading image to Imgur:', error);
      } finally {
        setState({
          ...State_,
          uploadState: false
        })
      }
    };

    // Upload the image when the component mounts or when image changes
    if (image) {
      uploadImage();
    }
  }, [image]);
};

export default ImgurUploader;
